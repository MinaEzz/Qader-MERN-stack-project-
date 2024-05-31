import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";
import { useState } from "react";
// speech to text recognition:
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const recordingToggler = () => {
    setIsRecording(!isRecording);
  };
  const startListen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
    resetTranscript();
  };
  const stopListen = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
    setSearchTerm(transcript);
  };
  const buttonHandler = () => {
    if (!browserSupportsSpeechRecognition) {
      setError(true);
      setErrorMsg("This browser does not support speech recognition.");
    }
    if (!isMicrophoneAvailable) {
      setError(true);
      setErrorMsg("Unable to access microphone, please check system settings");
    }
    if (error) {
      toast.error(errorMsg, {
        theme: "colored",
      });
    } else {
      recordingToggler();
    }
    !isRecording ? startListen() : stopListen();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm.trim() && navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div className="relative flex items-center flex-1 border border-primary-600 rounded-xl">
      <IoSearchOutline
        className="absolute top-1/2 -translate-y-1/2 left-2 text-neutral-600 dark:text-neutral-200 pointer-events-none"
        fontSize={18}
      />
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search something..."
          className="w-full h-10 bg-transparent outline-none text-sm text-neutral-600 dark:text-neutral-200  placeholder:text-neutral-600 dark:placeholder:text-neutral-200 py-2 pl-8 pr-10 rounded-xl placeholder:text-sm"
        />
      </form>
      <button
        className={`absolute right-3 border-l border-neutral-600 dark:text-neutral-200 pl-1 ${
          isRecording
            ? " text-coral-red-700"
            : "text-neutral-600 dark:text-neutral-200"
        }`}
        onClick={buttonHandler}
      >
        {isRecording ? (
          <FaRegStopCircle fontSize={20} />
        ) : (
          <FaMicrophone fontSize={20} />
        )}
      </button>
      {error && <ToastContainer />}
    </div>
  );
};

export default Searchbar;
