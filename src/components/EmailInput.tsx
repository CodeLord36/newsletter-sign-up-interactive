interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
}

const EmailInput = ({ email, setEmail, error }: EmailInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="email" className="text-sm font-bold">
          Email Address
        </label>
        {error && <span className="text-sm font-bold text-red">{error}</span>}
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
        className={`w-full rounded-lg border px-5 py-4 outline-none transition ${
          error
            ? "border-red bg-red-100 text-red placeholder:text-red"
            : "border-grey focus:border-blue-800"
        }`}
      />

      {error && (
        <span id="email-error" className="sr-only ">
          {error}
        </span>
      )}
    </div>
  );
};

export default EmailInput;
