import React, { useState, useEffect } from "react";
import TabComponent from "./TabComponent";

import { PiPhoneCallBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { BiMobileVibration } from "react-icons/bi";
import Accordion from "./Accordion";
import { GetInTouch } from "./Hero";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../App";
import Modal from "react-modal";
import Pagination from "../components/Pagination";

const Voip = () => {
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

  const plans = mapTariffToPlan(tariffs);

  const fetchPartialNumbers = async () => {
    try {
      const response = await axios.get(`${server}/api/numbers/partial/01`);
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

  const TariffHandler = (e, tariffdata, price) => {
    e.preventDefault();
    if (tariff === tariffdata) {
      setTariff("");
      setTariffPrice(0);
    } else {
      setTariff(tariffdata);
      setTariffPrice(price);
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
    <div>
      <div className="main-page">
        <div className="borderline w-full h-[1px]"></div>
        <section className="main-page__hero ">
          <div className="main-page__hero-content space-y-5">
            <h2 className="text-4xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
              Tamar VoIP – Your ISDN Switch Off Solution
            </h2>
            <p className="text-xl px-2 pt-6 font-sans font-thin">
              We’re launching into a new era of telecoms. Discover the power of
              Tamar VoIP (Voice over Internet Protocol), our cutting-edge phone
              system designed specifically for businesses. With our
              state-of-the-art app, you'll experience crystal-clear inbound and
              outbound calls, empowering you to showcase your Tamar numbers as
              the cornerstone of your business operations.
            </p>
            <p className="text-xl px-2 pb-4 font-sans font-thin">
              With our VoIP solutions, you can enjoy cost-effective, scalable,
              and feature-rich communication tools designed to boost
              productivity and streamline operations.
            </p>
            <p className="text-xl px-2 pb-4 font-sans font-thin">
              This is the perfect solution for the ISDN Switch Off.
            </p>
            <div className="flex gap-6">
              <a href="#choosenum">
                <button className="main-page__cta-button px-2 font-sans font-semibold">
                  Choose Your Number
                </button>
              </a>
              <button className="main-page__cta-button font-sans font-semibold">
                Find Out More
              </button>
              <button className="message px-5 text-center font-sans font-semibold">
                {" "}
                <FaPlay className="text-xl" />{" "}
              </button>
            </div>
          </div>
          <div className=" w-[45%] flex justify-center items-center">
            <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/voip-1.png"
              alt="Hero"
            />
          </div>
        </section>

        <div className="borderline w-full h-[1px]"></div>

        <div className=" w-full  px-24 py-12">
          <h2 className="text-center w-full text-5xl font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
            Tamar VoIP Features:
          </h2>
          <TabComponent />
        </div>
        <div className="borderline w-full mt-3 h-[1px]"></div>

        <h2 className="text-center font-sans text-3xl py-9 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
          Step 1: What Type Of Service Do You Need?
        </h2>

        <div
          id="choosenum"
          className="flex flex-col md:flex-row justify-center w-full gap-6 px-24 pb-12"
        >
          <div className="w-[41%] min-w-[330px]">
            <div class="w-[88%] border rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="messageBox flex flex-col justify-center items-center gap-3 rounded-none h-60 py-2">
                <BiMobileVibration className="text-8xl" />
                <h1 className="text-3xl font-sans font-bold text-center">
                  Receive Calls
                </h1>
                <p className="text-xl font-sans">Our Classic Virtual Numbers</p>
              </div>
              <div class="p-5 bg-white">
                <p className="font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
                  Professional Business Phone Numbers.
                </p>
                <p className="font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
                  Simple, Affordable, Effective
                </p>
                <ul>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex items-center gap-2 mt-4">
                    {" "}
                    <div className="w-5 h-5 rounded-full border-4 bg-blue-500"></div>{" "}
                    Over 10 Completely Free Features
                  </li>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2">
                    <div className="w-5 h-5 mt-1 rounded-full border-4 bg-blue-500"></div>{" "}
                    Send Calls To Your Mobiles & Landlines
                  </li>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2">
                    <div className="w-6 h-5 mt-1 rounded-full border-4 bg-blue-500"></div>{" "}
                    24/7 Management With Our Free Control Panel & App
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#choosePrice">
                    <button
                      onClick={() => {
                        setCallType("Recieve");
                      }}
                      className={
                        callType === "Recieve"
                          ? "bg-yellow-300 message"
                          : " message "
                      }
                    >
                      {callType === "Recieve"
                        ? "Selected"
                        : "Choose Your Number"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[41%] min-w-[330px]">
            <div class="w-[88%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="messageBox flex flex-col justify-center items-center gap-3 rounded-none h-60 py-2">
                <PiPhoneCallBold className="text-8xl" />
                <h1 className="text-3xl font-sans font-bold text-center">
                  Make & Receive Calls
                </h1>
                <p className="text-xl font-sans">Our Complete VoIP System</p>
              </div>
              <div class="p-5 bg-white">
                <p className="font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
                  Professional Business Phone Numbers.
                </p>
                <p className="font-sans text-2xl text-center font-semibold pb-2 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
                  Simple, Affordable, Effective
                </p>
                <ul>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex items-center gap-2 mt-4">
                    {" "}
                    <div className="w-5 h-5 rounded-full border-4 bg-blue-500"></div>{" "}
                    Over 10 Completely Free Features
                  </li>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2">
                    <div className="w-5 h-5 mt-1 rounded-full border-4 bg-blue-500"></div>{" "}
                    Send Calls To Your Mobiles & Landlines
                  </li>
                  <li className="font-sans px-1 py-2 text-lg font-medium text-gray-600 flex gap-2">
                    <div className="w-6 h-5 mt-1 rounded-full border-4 bg-blue-500"></div>{" "}
                    24/7 Management With Our Free Control Panel & App
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#choosePrice">
                    <button
                      onClick={() => {
                        setCallType("Make");
                      }}
                      className={
                        callType === "Make"
                          ? "bg-yellow-300 message"
                          : " message "
                      }
                    >
                      {callType === "Make" ? "Selected" : "Choose Your Number"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="borderline w-full mt-3 h-[1px]"></div>

        <section id="choosePrice" className="main-page__numbers">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
            Step 2: Select Your Tariff
          </h2>
          <p className="!text-[15px]">
            Choose A Tariff With The Amount Of Minutes You Need Each Month Per
            User
          </p>
          <div className="main-page__numbers-options flex justify-around">
            {plans.length > 0 ? (
              plans.map((plan, index) => (
                <div
                  key={index}
                  className={
                    index === 2
                      ? "main-page__number-option !h-[850px]"
                      : "main-page__number-option"
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
                        <p className="text-center">
                          PLUS These Premium Features
                        </p>
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
                      className={
                        tariffPrice === plan.value ? "bg-yellow-300" : ""
                      }
                      onClick={(e) => {
                        fetchPartialNumbers();
                        TariffHandler(e, plan.price, plan.value, index);
                        index === 2
                          ? (setButtonDisabled(!ButtonDisabled),
                            setTailor("Switchboard"))
                          : setButtonDisabled(false);
                        console.log(tariffPrice);
                      }}
                    >
                      Build my Number
                    </button>
                  </a>
                </div>
              ))
            ) : (
              <p>Loading tariffs...</p>
            )}
          </div>
        </section>

        <div className="borderline w-full mt-3 h-[1px]"></div>

        <section id="tailor" className="main-page__numbers">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
            Step 3: Tailor Your Number
          </h2>
          <div className="main-page__numbers-options flex justify-around">
            <div className="main-page__number-option !w-[300px] !h-[400px] xs:w-[700%]">
              {/* <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/uk2.png"
              alt="Local Numbers"
            /> */}
              <h3>Call Whisper</h3>
              <p className="text-sm">"Incoming Business Call"</p>
              <p className="text-center font-bold text-gray-500 py-5">
                Whats Included
              </p>
              <ul className="dropdownList px-10">
                <li className="dropdownItem ">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">Call Whisper</p>
                  </div>
                </li>
                <li className=" dropdownItem">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">Caller Announcement</p>
                  </div>
                </li>
                <li className="dropdownItem">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">Press 1 To Accept A Call</p>
                  </div>
                </li>
                <p className="text-center font-bold text-gray-500 py-5">
                  {whisperPrice} Per Month +VAT
                </p>
              </ul>

              {/* <a href="#choosePrice"> */}
              <button
                onClick={(e) => {
                  TailorHandler(e, "Whisper", whisperPrice, 1);
                }}
                className={
                  tailor === "Whisper" || tailor === "Switchboard"
                    ? "bg-yellow-300"
                    : ""
                }
                disabled={ButtonDisabled}
              >
                {tailor === "Whisper" ? (
                  <p>Selected</p>
                ) : tailor === "Switchboard" ? (
                  <p>Included with Virtual Switchboard</p>
                ) : tariff === "TF3" ? (
                  <p>Included With Unlimited</p>
                ) : (
                  <p>Add to your number</p>
                )}
              </button>
              {/* </a> */}
            </div>
            <div className="main-page__number-option !w-[300px] !h-[400px] xs:w-[700%]">
              {/* <img
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/uk2.png"
              alt="Local Numbers"
            /> */}
              <h3>Virtual Switchboard</h3>
              <p className="text-sm">"Press 1 For Sales, 2 For Accounts..."</p>
              <p className="text-center font-bold text-gray-500 py-5">
                Whats Included
              </p>
              <ul className="dropdownList px-10">
                <li className="dropdownItem ">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">Virtual Switchboard</p>
                  </div>
                </li>
                <li className=" dropdownItem">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">Up To 10 Menu Options</p>
                  </div>
                </li>
                <li className="dropdownItem">
                  <span className="dot"></span>
                  <div className="itemContent">
                    <p className="itemDescription">
                      Free Professional Greeting
                    </p>
                  </div>
                </li>
                <p className="text-center font-bold text-gray-500 py-5">
                  {vsbPrice} Per Month +VAT
                </p>
              </ul>

              {/* <a href="#choosePrice"> */}
              <button
                onClick={(e) => {
                  TailorHandler(e, "Switchboard", vsbPrice, 1);
                  console.log(tailorPrice);
                }}
                className={tailor === "Switchboard" ? "bg-yellow-300" : ""}
                disabled={ButtonDisabled}
              >
                {tailor === "Switchboard" ? "Selected" : "Add to your Number"}
              </button>
              {/* </a> */}
            </div>
          </div>
        </section>

        <div className="borderline w-full h-[1px]"></div>

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
            <div className="flex justify-center my-10">
              <div id="partialNumbers" className="flex">
                <a href="#choosePrice">
                  <button className=" bg-[#e50471] text-white py-2 px-4 rounded ">
                    Please Choose a Tariff First{" "}
                  </button>
                </a>
              </div>
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
          >
            <h2>Enter Destination for {currentNumber}</h2>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
            />
            <button onClick={handleConfirmNumber}>Confirm</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </Modal>
        </div>

        <div className="bg-yellow-200 mx-16 my-7 p-8 text-center rounded-2xl">
          <h1 className="font-sans text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
            Need Help? Our team are happy to answer any questions, give us a
            call on 0800 772 0000
          </h1>
        </div>

        <div className="flex justify-center items-center py-12">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Review"
            className="w-[500px]"
          />
        </div>

        <div className="borderline w-full mt-3 h-[1px]"></div>

        <div class="w-full px-12">
          <div className="">
            <h1 className="text-3xl font-sans font-bold text-center py-9 text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
              Benefits Of{" "}
              <span className="text-3xl font-sans font-bold border-b-4 border-yellow-300">
                {" "}
                Switching To Tamar{" "}
              </span>{" "}
              VoIP{" "}
            </h1>
          </div>
          <div class="flex flex-col gap-4 ">
            <div className="flex w-full ">
              <div className="w-[20%] flex justify-center items-start">
                <img
                  src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-2.png"
                  alt="first"
                  className="w-36"
                />
              </div>
              <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">
                  Cost Savings:
                </h5>
                <p class="mb-3 text-2xl leading-10 font-sans font-thin">
                  Say goodbye to expensive phone bills. With VoIP, calls are
                  transmitted over the internet, eliminating the need for
                  traditional phone lines and reducing costs significantly. Not
                  only will you save money over traditional phone systems,
                  you’re future proofing your business by choosing the solution
                  for the ISDN switch off.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[20%] flex justify-center items-start ">
                <img
                  src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-1.png"
                  alt="second"
                  className="w-36"
                />
              </div>
              <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">
                  Flexibility:
                </h5>
                <p class="mb-3 text-2xl leading-10 font-sans font-thin">
                  Work from anywhere, at any time, with our flexible VoIP
                  solutions. Whether you're in the office, on the road, or
                  working remotely, you can access your VoIP phone system from
                  any internet-connected device, ensuring you never miss an
                  important call or message. Whether you’re a team of 1 or an
                  office of 50, our VoIP solutions offer ultimate flexibility as
                  you grow your business.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[20%] flex justify-center items-start ">
                <img
                  src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/feature-3.png"
                  alt="third"
                  className="w-36"
                />
              </div>
              <div class="flex flex-col gap-3 p-4 w-[80%] leading-normal">
                <h5 class="text-3xl font-sans font-bold tracking-tight text-[#c6117d] dark:text-white">
                  Reliability:
                </h5>
                <p class="mb-3 text-2xl leading-10 font-sans font-thin">
                  Count on our VoIP phone systems for reliable and crystal-clear
                  communication. All you need is a good internet connection and
                  your new VoIP phone will work to the same high standards our
                  customers are used to getting with Tamar Business Numbers.
                  We’re a network provider in our own right, not a reseller, so
                  you’re putting reliability at the forefront of your business
                  comms by cutting out any obstacles.
                </p>
              </div>
            </div>
            <div className="text-center mb-4">
              <a href="#choosenum">
                <button className="message py-2 px-5 text-lg font-sans font-semibold">
                  Choose Your Number
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="borderline w-full mt-4 h-[1px]"></div>

        <div className="px-48 py-8 space-y-5">
          <h2 className="text-5xl text-center font-sans pb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#c6117d] to-[#e50471]">
            Frequently Asked Questions
          </h2>
          <Accordion />
        </div>

        <div className="flex justify-center items-center py-12">
          <img
            src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/tp_reviews.png"
            alt="Review"
            className="w-[500px]"
          />
        </div>

        <GetInTouch />
      </div>
    </div>
  );
};

export default Voip;
