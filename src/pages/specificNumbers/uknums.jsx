import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../App";
import Modal from "react-modal";
import Pagination from "../../components/Pagination";
import ChoosePriceSection from "../../components/ChoosePrice";
import NumberOption from "../../components/NumberOption";
import TailorOption from "../../components/TailorOption";

const mapTariffToPlan = (tariffData) => {
  if (!tariffData || !tariffData.TF1 || !tariffData.TF1[0]) {
    return [];
  }

  return [
    {
      name: "Basic",
      value: "TF1",
      price: `${tariffData.TF1[0].Price}`,
      features: [
        `Divert To Landlines & Mobiles`,
        `${tariffData.TF1[0].inclusive} Inclusive Diversion Mins`,
        `${tariffData.TF1[0]["PPM Landline"]} ppm to landlines after inclusive`,
        "1 Month Rolling Contract",
        "Free Setup & Connection",
        "No Hidden Costs",
      ],
    },
    {
      name: "Growing Business",
      value: "TF2",
      price: `${tariffData.TF2?.[0]?.Price || "N/A"}`,
      features: [
        `Divert To Landlines & Mobiles`,
        `${tariffData.TF2?.[0]?.inclusive || "N/A"} Inclusive Diversion Mins`,
        `${
          tariffData.TF2?.[0]?.["PPM Landline"] || "N/A"
        } ppm to landlines after inclusive`,
        "1 Month Rolling Contract",
        "Free Setup & Connection",
        "No Hidden Costs",
      ],
    },
    {
      name: "Enterprise",
      value: "TF3",
      price: `${tariffData.TF3?.[0]?.Price || "N/A"}`,
      features: [
        `2000 Inbound Mins To Mobile App`,
        `${tariffData.TF3?.[0]?.inclusive || "N/A"} Diversion Mins`,
        `${
          tariffData.TF3?.[0]?.["PPM Landline"] || "N/A"
        } ppm to landlines after inclusive`,
        "1 Month Rolling Contract",
        "Free Setup & Connection",
        "No Hidden Costs",
        "PLUS These Premium Features",
      ],
      premiumFeatures: [
        "Dedicated VoIP App With:",
        "Outbound Calling",
        "Call Transfer",
        "On Hold Music",
        "Conference Calling",
        "On Demand Audio Saving",
        "Call Whisper",
        "Virtual Switchboard",
        "No Hidden Costs",
      ],
    },
  ];
};

const Uknums = () => {
  const navigate = useNavigate();
  const [callType, setCallType] = useState("Receive");
  const [tailor, setTailor] = useState("");
  const [tariffs, setTariffs] = useState({});
  const [whisperPrice, setWhisperPrice] = useState("");
  const [vsbPrice, setVsbPrice] = useState("");
  const [partialNumbers, setPartialNumbers] = useState({});
  const [category, setCategory] = useState("ALL");
  const [tailorPrice, setTailorPrice] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentNumberPrice, setCurrentNumberPrice] = useState("");
  const [destination, setDestination] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [ButtonDisabled, setButtonDisabled] = useState(false);
  const [tariffPrice, setTariffPrice] = useState(0);
  const [tariff, setTariff] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numbersPerPage] = useState(84);

  useEffect(() => {
    const fetchAllPrices = async () => {
      try {
        const [tariffResponse, whisperResponse, vsbResponse] =
          await Promise.all([
            axios.get(`${server}/api/numbers/tariffs/prices`),
            axios.get(`${server}/api/numbers/whisper/prices`),
            axios.get(`${server}/api/numbers/vsb/prices`),
          ]);
        const whisperPriceString = whisperResponse.data.price;
        const vsbPriceString = vsbResponse.data.price;
        const parsedWhisperPrice = parseFloat(
          whisperPriceString.replace("£", "")
        );
        const parsedVsbPrice = parseFloat(vsbPriceString.replace("£", ""));

        setTariffs(tariffResponse.data);
        setWhisperPrice(parsedWhisperPrice);
        console.log(whisperResponse.data.price);
        setVsbPrice(parsedVsbPrice);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchAllPrices();
  }, []);

  const plans = mapTariffToPlan(tariffs);

  const fetchPartialNumbers = async () => {
    try {
      const response = await axios.get(`${server}/api/numbers/partial/0800`);
      setPartialNumbers(response.data);
      setShowButton(false);
    } catch (error) {
      console.error("Error fetching partial numbers:", error);
    }
  };

  const handleAddNumber = (number, price) => {
    setCurrentNumber(number);
    setCurrentNumberPrice(price);
    setIsModalOpen(true);
    setTailor("");
  };

  const handleConfirmNumber = () => {
    setSelectedNumbers([
      ...selectedNumbers,
      {
        number: currentNumber,
        price: currentNumberPrice,
        destination,
        tariff: tariff,
        tariffPrice: tariffPrice,
        tailorPrice: tailorPrice,
        tailor:
          tailorPrice === whisperPrice
            ? "whisper"
            : tailorPrice === vsbPrice
            ? "vsb"
            : "",
      },
    ]);
    setIsModalOpen(false);
    setDestination("");
    setCurrentNumber(null);
    setPartialNumbers({});
    setShowButton(true);
  };

  const calculateTotalPrice = () => {
    return selectedNumbers.reduce((total, number) => {
      const numberPrice = parseFloat(number.price) || 0;
      const tariffPrice = parseFloat(number.tariff) || 0;
      const tailorPrice = parseFloat(number.tailorPrice) || 0;
      return total + numberPrice + tariffPrice + tailorPrice;
    }, 0);
  };

  const handleProceedToPayment = () => {
    const subtotal = calculateTotalPrice();
    const vat = parseFloat((subtotal * 0.2).toFixed(2));
    const total = subtotal + vat + parseFloat(tailorPrice);

    navigate("/admin/payment", {
      state: {
        selectedNumbers,
        tailorPrice,
        subtotal,
        vat,
        total: total.toFixed(2),
      },
    });
  };

  const filteredNumbers = Object.entries(partialNumbers).filter(
    ([number, price]) => {
      if (category === "ALL") return true;
      if (category === "Bronze" && price === "0") return true;
      if (category === "Silver" && price === "50") return true;
      if (category === "Gold" && price === "200") return true;
      if (category === "Platinum" && price === "1300") return true;
      return false;
    }
  );

  const TariffHandler = (e, tariffdata, price, index) => {
    e.preventDefault();
    if (tariff === tariffdata) {
      setTariff("");
      setTariffPrice(0);
    } else {
      setTariff(tariffdata);
      setTariffPrice(price);
    }
    if (index === 0 || index === 1) {
      setTailor("");
      setTailorPrice();
    }
  };
  const TailorHandler = (e, tailordata, price, index) => {
    e.preventDefault();
    if (tailor === tailordata) {
      setTailor("");
      setTailorPrice();
    } else {
      setTailor(tailordata);
      setTailorPrice(price);
    }
  };

  const indexOfLastNumber = currentPage * numbersPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
  const currentNumbers = filteredNumbers.slice(
    indexOfFirstNumber,
    indexOfLastNumber
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-page">
      <section className="main-page__hero">
        <div className="main-page__hero-content">
          <h1>0800 Freephone Numbers</h1>
          <p className="text-[25px]">Free To Call From Mobile & Landlines</p>
          <p className="pl-[20px] border-solid border-l-[3px] my-7 text-lg">
            0800 numbers are now free to call from both UK landlines and
            mobiles. Most competitors will charge a surcharge when someone calls
            your 0800 number from a mobile. As a Tamar Telecommunications
            customer this won’t affect you, as we’ve decided to absorb this
            cost!
          </p>
          <p className="text-lg">
            0800 Freephone numbers are free to call from UK landlines and from
            UK mobiles. They act as a great way to encourage sales enquiries,
            giving your customer no reason not to pick up the phone. 0800
            Numbers also offer great customer service by allowing your customers
            to call you for free.
          </p>
          <p className="text-lg">
            Our 0800 Freephone numbers are provided with a FREE Control Panel &
            App to manage your number. You will also get free advanced services,
            like Timed Call Diverts and Voicemail. This enables you to change
            where your calls are diverted to instantly 24/7. You can tailor your
            number to suit your business needs.
          </p>
          <p className="text-lg">
            To order your new 0800 freephone number, simply select a tariff from
            the table below, then pick your new number – it’s that simple!
          </p>
          <a href="#chooseNumber">
            <button className="main-page__cta-button mt-10">
              Choose Your Number
            </button>
          </a>
        </div>
        <img
          src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/hero-lady.webp"
          alt="Hero"
          className="main-page__hero-image"
        />
      </section>
      <div className="borderline w-full h-[1px]"></div>

      <section id="chooseNumber" className="main-page__numbers">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
          Step 1: What Type Of Service Do You Need?
        </h2>
        <div className="main-page__numbers-options flex justify-around">
          <NumberOption
            title="Receive Calls"
            description="Receive Calls Our Classic Virtual Numbers"
            details="Professional Business Phone Numbers. Simple, Affordable, Effective"
            callType={[
              "Mobile landline numbers",
              "Free to call from landlines & mobiles",
              "Numbers for a nationwide presence",
            ]}
            selected={callType === "Receive"}
            onClick={() => setCallType("Receive")}
          />
          <NumberOption
            title="Make & Receive Calls"
            description="Our Complete VoIP System"
            details="Professional Business Phone Numbers. Simple, Affordable, Effective"
            callType={[
              "Mobile landline numbers",
              "Free to call from landlines & mobiles",
              "Numbers for a nationwide presence",
            ]}
            selected={callType === "Make"}
            onClick={() => setCallType("Make")}
          />
        </div>
      </section>

      <ChoosePriceSection
        plans={plans}
        tariffPrice={tariffPrice}
        fetchPartialNumbers={fetchPartialNumbers}
        TariffHandler={TariffHandler}
        setButtonDisabled={setButtonDisabled}
        ButtonDisabled={ButtonDisabled}
        setTailor={setTailor}
      />

      <section id="tailor" className="main-page__numbers">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
          Step 3: Tailor Your Number
        </h2>
        <div className="main-page__numbers-options flex justify-around">
          <TailorOption
            title="Call Whisper"
            subtitle='"Incoming Business Call"'
            details="Whats Included"
            options={[
              "Call Whisper",
              "Caller Announcement",
              "Press 1 To Accept A Call",
            ]}
            price={whisperPrice}
            selected={tailor === "Whisper" || tailor === "Switchboard"}
            onClick={(e) => TailorHandler(e, "Whisper", whisperPrice, 1)}
            tailor={tailor}
            tariff={tariff}
            ButtonDisabled={ButtonDisabled}
          />
          <TailorOption
            title="Virtual Switchboard"
            subtitle='"Press 1 For Sales, 2 For Accounts..."'
            details="Whats Included"
            options={[
              "Virtual Switchboard",
              "Up To 10 Menu Options",
              "Free Professional Greeting",
            ]}
            price={vsbPrice}
            selected={tailor === "Switchboard"}
            onClick={(e) => TailorHandler(e, "Switchboard", vsbPrice, 1)}
            tailor={tailor}
            tariff={tariff}
            ButtonDisabled={ButtonDisabled}
          />
        </div>
      </section>

      <div className="flex justify-center flex-col bg-slate-50">
        <div className="m-auto mt-10">
          <label htmlFor="category" className="text-lg font-semibold m-2">
            Select Category:
          </label>
          <select
            className="bg-white border border-gray-300 rounded-md p-2 outline-none"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="ALL">All</option>
            <option value="Bronze">Bronze (Free)</option>
            <option value="Silver">Silver (£50)</option>
            <option value="Gold">Gold (£200)</option>
            <option value="Platinum">Platinum (£1300)</option>
          </select>
        </div>

        <div className="flex justify-center my-10">
          <div
            id="partialNumbers"
            className="grid grid-cols-3 gap-3 sm:grid-cols-6"
          >
            {currentNumbers.map(([number, price]) => (
              <button
                key={number}
                value={number}
                className="py-2 px-4 text-[#e50471] font-bold rounded border transition-all border-[#e50471] bg-white hover:bg-[#e50471] hover:text-white"
                onClick={() => handleAddNumber(number, price)}
              >
                {number} - £{price}
              </button>
            ))}
          </div>
        </div>

        <Pagination
          itemsPerPage={numbersPerPage}
          totalItems={filteredNumbers.length}
          paginate={paginate}
          currentPage={currentPage}
        />

        {showButton && (
          <div id="partialNumbers" className="flex justify-center mb-10">
            <a href="#choosePrice">
              <button className=" bg-[#e50471] text-white py-2 px-4 rounded ">
                Please Choose a Tariff First{" "}
              </button>
            </a>
          </div>
        )}

        {selectedNumbers.length > 0 && (
          <div className="my-5">
            <h3>Selected Numbers:</h3>
            <ul>
              {selectedNumbers.map(({ number, destination, price }) => (
                <li key={number}>
                  {number} - Destination: {destination} -{price}
                </li>
              ))}
            </ul>
            <button
              className="mt-3 bg-[#e50471] text-white py-2 px-4 rounded"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
          contentLabel="Enter Destination"
          className={
            "p-10 flex flex-col items-center bg-gray-50 shadow-2xl h-[80vh] mt-[5%] ml-[10%] w-[80%] gap-10 rounded"
          }
        >
          <h2 className="text-2xl text-[#e50471]">
            Enter Destination for {currentNumber}
          </h2>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
            className="h-10 rounded px-3 outline-none"
          />
          <div>
            <button
              className="py-2 mr-10 px-4 rounded bg-[#e50471] text-white"
              onClick={handleConfirmNumber}
            >
              Confirm
            </button>
            <button className="" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Uknums;

// const plans2 = [
//   {
//     name: "Startup",
//     price: "£9",
//     features: [
//       "500 Inbound Mins To Mobile App",
//       "500 Diversion Mins",
//       "500 Outbound Mins",
//       "1 Month Rolling Contract",
//       "Free Setup & Connection",
//       "No Hidden Costs",
//       "Price Per User",
//     ],
//     freeFeatures: ["Includes Our Supercharged FREE Features"],
//     premiumFeatures: [
//       "Dedicated VoIP App With:",
//       "Outbound Calling",
//       "Call Transfer",
//       "On Hold Music",
//       "Conference Calling",
//       "On Demand Audio Saving",
//     ],
//   },
//   {
//     name: "Growing Business",
//     price: "£15",
//     features: [
//       "1000 Inbound Mins To Mobile App",
//       "1000 Diversion Mins",
//       "1000 Outbound Mins",
//       "1 Month Rolling Contract",
//       "Free Setup & Connection",
//       "No Hidden Costs",
//       "Price Per User",
//     ],
//     freeFeatures: ["Includes Our Supercharged FREE Features"],
//     premiumFeatures: [
//       "Dedicated VoIP App With:",
//       "Outbound Calling",
//       "Call Transfer",
//       "On Hold Music",
//       "Conference Calling",
//       "On Demand Audio Saving",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "£30",
//     features: [
//       "2000 Inbound Mins To Mobile App",
//       "2000 Diversion Mins",
//       "2000 Outbound Mins",
//       "1 Month Rolling Contract",
//       "Free Setup & Connection",
//       "No Hidden Costs",
//     ],
//     freeFeatures: ["Includes Our Supercharged FREE Features"],
//     premiumFeatures: [
//       "Dedicated VoIP App With:",
//       "Outbound Calling",
//       "Call Transfer",
//       "On Hold Music",
//       "Conference Calling",
//       "On Demand Audio Saving",
//       "Call Whisper",
//       "Virtual Switchboard",
//       "Tamar Voice AI",
//     ],
//     newList: [
//       "24/7 Customer Support",
//       "Advanced Analytics Dashboard",
//       "Priority Technical Assistance",
//       "Custom API Integrations",
//     ],
//   },
// ];
