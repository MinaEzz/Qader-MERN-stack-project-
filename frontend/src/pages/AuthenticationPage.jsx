import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterationPage from "./RegisterationPage";

const AuthenticationPage = () => {
  const [authenticationMood, setAuthenticationMood] = useState("login");

  if (authenticationMood === "login") {
    return <LoginPage setAuthenticationMood={setAuthenticationMood} />;
  }
  if (authenticationMood === "register") {
    return <RegisterationPage setAuthenticationMood={setAuthenticationMood} />;
  }
};

export default AuthenticationPage;
