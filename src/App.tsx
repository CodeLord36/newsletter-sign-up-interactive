import { useState } from "react";
import SuccessMessage from "./components/SuccessMessage";
import NewsLetterForm from "./components/NewsletterForm";

function App() {
  const [submittedEmail, setSubmittedEmail] = useState("");

  const isSubmitted = submittedEmail !== "";

  const handleSubmit = (email: string) => {
    setSubmittedEmail(email);
  };

  const handleDismiss = () => {
    setSubmittedEmail("");
  };

  return (
    <main className="font-roboto min-h-screen flex  items-center justify-center bg-white md:bg-blue-800 md:p-10  ">
      {isSubmitted ? (
        <SuccessMessage email={submittedEmail} onDismiss={handleDismiss} />
      ) : (
        <NewsLetterForm onSuccess={handleSubmit} />
      )}
    </main>
  );
}

export default App;
