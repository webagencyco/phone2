import React from "react";

const PlanCard = ({
  plan,
  index,
  tariffPrice,
  fetchPartialNumbers,
  TariffHandler,
  setButtonDisabled,
  ButtonDisabled,
  setTailor,
}) => {
  return (
    <div
      key={index}
      className={
        index === 2 ? "main-page__number-option !h-[850px]" : "main-page__number-option"
      }
    >
      <h3>{plan.name}</h3>
      <p>{plan.price}</p>
      <b>/Month +VAT</b>
      <ul className="price-options dropdownList my-5">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="dropdownItem">
            <span className="dot w-5 h-5"></span>
            <div className="itemContent">
              <p className="itemDescription">{feature}</p>
            </div>
          </li>
        ))}
        {plan.premiumFeatures && (
          <>
            <p className="text-center">PLUS These Premium Features</p>
            <div className="pl-1 premium-price-features">
              {plan.premiumFeatures.map((feature, idx) => (
                <li key={idx} className="dropdownItem">
                  <span className="dot w-5 h-5"></span>
                  <div className="itemContent">
                    <p className="itemDescription">{feature}</p>
                  </div>
                </li>
              ))}
            </div>
          </>
        )}
      </ul>
      <a href="#tailor">
        <button
          className={tariffPrice === plan.value ? "bg-yellow-300" : ""}
          onClick={(e) => {
            fetchPartialNumbers();
            TariffHandler(e, plan.price, plan.value, index);
            index === 2
              ? (setButtonDisabled(!ButtonDisabled), setTailor("Switchboard"))
              : setButtonDisabled(false);
          }}
        >
          Build my Number
        </button>
      </a>
    </div>
  );
};

export default PlanCard;
