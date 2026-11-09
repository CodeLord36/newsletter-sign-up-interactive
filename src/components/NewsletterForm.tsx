import { useState } from "react";
import { validateEmail } from "../utils/validation";
import BenefitsList from "./BenefitsList";
import EmailInput from "./EmailInput";

interface NewsletterFormProps {
  onSuccess: (email: string) => void;
}

const NewsLetterForm = ({ onSuccess }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email.trim())) {
      setError("Valid email required");
      return;
    }

    setError("");
    onSuccess(email.trim());
  };
  return (
    <section className="">
      <div className="">
        <div className="">
          <h1 className="">Stay Updated!</h1>
          <p className="">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>

        <BenefitsList />

        <form onSubmit={handleSubmit} noValidate className="">
          <EmailInput email={email} setEmail={setEmail} error={error} />

          <button type="submit" className="">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <div className="">
        <img
          src="/images/illustration-sign-up-desktop.svg"
          alt=""
          className=""
        />
      </div>
      <div className="">
        <img
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
          className=""
        />
      </div>
    </section>
  );
};

export default NewsLetterForm;
