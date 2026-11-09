interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
}

const EmailInput = ({ email, setEmail, error }: EmailInputProps) => {
  return (
    <div className="">
      <div>
        <label htmlFor="email" className="">
          Email Address
        </label>
        {error && <span className="">{error}</span>}
      </div>

      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="email@company.com"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "email-error" : undefined}
        className=""
      />

      {error && (
        <span id="email-error" className="">
          {error}
        </span>
      )}
    </div>
  );
};

export default EmailInput;
