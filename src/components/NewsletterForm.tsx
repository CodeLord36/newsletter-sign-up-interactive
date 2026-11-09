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
    <section className="flex w-full max-w-5xl flex-col overflow-hidden rounded-none bg-white md:flex-row md:rounded-3xl md:p-5">
      <div className="block md:hidden ">
        <img
          src="/images/illustration-sign-up-mobile.svg"
          alt=""
          className="w-full"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-7 px-6 py-7 md:px-10 md:py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-blue-800 md:text-5xl">
            Stay updated!
          </h1>
          <p className="text-blue-800 ">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>

        <BenefitsList />

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5 "
        >
          <EmailInput email={email} setEmail={setEmail} error={error} />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-800 px-5 py-4 font-bold text-white transition hover:bg-linear-to-r hover:from-[#ff5476] hover:to-[#ff6742] hover:shadow-lg"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <div className="hidden flex-1 md:block">
        <img
          src="/images/illustration-sign-up-desktop.svg"
          alt=""
          className="h-full w-full object-cover "
        />
      </div>
    </section>
  );
};

export default NewsLetterForm;
