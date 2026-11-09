interface SuccessMessageProps {
  email: string;
  onDismiss: () => void;
}

const SuccessMessage = ({ email, onDismiss }: SuccessMessageProps) => {
  return (
    <section className="">
      <div className="">
        <img src="/images/icon-success.svg" alt="" className="h-14 w-14" />

        <div className="">
          <h1 className="">Thanks for subscribing!</h1>
          <p className="">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
      </div>

      <button type="button" onClick={onDismiss}>
        Dismiss message
      </button>
    </section>
  );
};

export default SuccessMessage;
