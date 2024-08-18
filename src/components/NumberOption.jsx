import React from "react";

const NumberOption = ({
  title,
  description,
  details,
  selected,
  onClick,
  callType,
}) => {
  return (
    <div className="main-page__number-option !h-[400px] w-[40%]">
      <h3>{title}</h3>
      <p className="text-lg">{description}</p>
      <p className="text-center font-bold text-gray-500 py-5">{details}</p>
      <ul className="dropdownList px-10">
        {callType.map((item, index) => (
          <li key={index} className="dropdownItem">
            <span className="dot"></span>
            <div className="itemContent">
              <p className="itemDescription">{item}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="#choosePrice">
        <button
          className={selected ? "bg-yellow-300" : ""}
          onClick={onClick}
        >
          {selected ? "Selected" : "Choose Your Number"}
        </button>
      </a>
    </div>
  );
};

export default NumberOption;
