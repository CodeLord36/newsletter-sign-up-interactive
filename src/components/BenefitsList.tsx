import { benefits } from "../data/benefits";

const BenefitsList = () => {
  return (
    <ul className="">
      {benefits.map((benefit) => (
        <li key={benefit.id} className="">
          <img
            src="/images/icon-success.svg"
            alt="success-icon"
            aria-hidden="true"
            className="h-5 w-5 shrink-0"
          />

          <span>{benefit.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
