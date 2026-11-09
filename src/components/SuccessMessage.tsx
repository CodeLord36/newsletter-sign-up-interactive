interface SuccessMessageProps {
  email: string;
  onDismiss: () => void;
}

const SuccessMessage = ({ email, onDismiss }: SuccessMessageProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col justify-between bg-white px-6 py-12 md:min-h-0 md:max-w-md md:justify-start md:gap-8 md:rounded-3xl md:p-10">
      <div className="flex flex-col gap-7">
        <img src="/images/icon-success.svg" alt="" className="h-14 w-14" />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-blue-900 md:text-5xl">
            Thanks for subscribing!
          </h1>
          <p className="leading-relaxed text-blue-900">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onDismiss}
        className="w-full rounded-lg bg-blue-800 px-5 py-4 font-bold text-white transition hover:bg-linear-to-r hover:from-[#ff5476] hover:to-[#ff6742] hover:shadow-lg md:mt-2"
      >
        Dismiss message
      </button>
    </section>
  );
};

export default SuccessMessage;
