import { useEffect } from "react";
import { AddJobForm } from "../components";
const AddJobPage = () => {
  useEffect(() => {
    document.title = "Add Job";
  }, []);
  return (
    <section className="min-h-[100dvh] pd-y">
      <div className="container">
        <AddJobForm />
      </div>
    </section>
  );
};

export default AddJobPage;
