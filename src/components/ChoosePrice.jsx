import React from "react";
import PlanCard from "./PlanCard"; // Import the PlanCard component

const ChoosePriceSection = ({
  plans,
  tariffPrice,
  fetchPartialNumbers,
  TariffHandler,
  setButtonDisabled,
  ButtonDisabled,
  setTailor,
}) => {
  return (
    <section id="choosePrice" className="main-page__numbers">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
        Step 2: Select Your Tariff
      </h2>
      <p className="!text-[15px]">
        Choose A Tariff With The Amount Of Minutes You Need Each Month Per User
      </p>
      <div className="main-page__numbers-options flex justify-around">
        {plans.length > 0 ? (
          plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              index={index}
              tariffPrice={tariffPrice}
              fetchPartialNumbers={fetchPartialNumbers}
              TariffHandler={TariffHandler}
              setButtonDisabled={setButtonDisabled}
              ButtonDisabled={ButtonDisabled}
              setTailor={setTailor}
            />
          ))
        ) : (
          <p>Loading tariffs...</p>
        )}
      </div>
    </section>
  );
};

export default ChoosePriceSection;
