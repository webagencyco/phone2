import React from "react";

const TailorOption = ({
  title,
  subtitle,
  details,
  options,
  price,
  selected,
  onClick,
  tailor,
  tariff,
  ButtonDisabled,
}) => {
  return (
    <div className="main-page__number-option !w-[300px] !h-[400px] xs:w-[700%]">
      <h3>{title}</h3>
      <p className="text-sm">{subtitle}</p>
      <p className="text-center font-bold text-gray-500 py-5">{details}</p>
      <ul className="dropdownList px-10">
        {options.map((option, index) => (
          <li key={index} className="dropdownItem">
            <span className="dot"></span>
            <div className="itemContent">
              <p className="itemDescription">{option}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-center font-bold text-gray-500 py-5">
        {price} Per Month +VAT
      </p>
      <button
        onClick={onClick}
        className={selected ? "bg-yellow-300" : ""}
        disabled={ButtonDisabled}
      >
        {selected ? (
          <p>Selected</p>
        ) : tailor === "Switchboard" ? (
          <p>Included with Virtual Switchboard</p>
        ) : tariff === "TF3" ? (
          <p>Included With Unlimited</p>
        ) : (
          <p>Add to your number</p>
        )}
      </button>
    </div>
  );
};

export default TailorOption;
