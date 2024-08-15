import React, { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMail, CiMobile3, CiMicrophoneOn } from "react-icons/ci";
import { LiaLaptopCodeSolid, LiaHeadsetSolid } from "react-icons/lia";
import { FaChartPie, FaWhatsapp } from "react-icons/fa6";
import { PiUserSwitchBold, PiUserSoundLight } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiVibratingSmartphone } from "react-icons/gi";
import { ImTree } from "react-icons/im";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../App";
import "./Header.css";

function Header() {
  const { login, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dropdownsOpen, setDropdownsOpen] = useState(0);

  const handleDropDowns = (numb) => {
    setDropdownsOpen(numb);
    if (numb === dropdownsOpen) {
      setDropdownsOpen(0);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}/api/auth/login`, {
        username,
        password,
      });
      login(data);
      setDropdownsOpen(0);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  const phoneNumbers = [
    {
      title: "01,02 Local Numbers",
      description: "Mobile landline numbers",
      path: "/mobile-landline-number/",
    },
    {
      title: "0800 Numbers",
      description: "Free to call from landlines & mobiles",
      path: "/telephone-numbers/numbers/0800-freephone-numbers",
    },
    {
      title: "0333 Numbers",
      description: "Numbers for a nationwide presence",
      path: "/telephone-numbers/numbers/03-uk-wide-numbers",
    },
    {
      title: "0300 Numbers",
      description: "For charities & public bodies",
      path: "/telephone-numbers/numbers/0300-numbers",
    },
    {
      title: "VoIP System",
      description: "Complete Business Phone Solution",
      path: "/tamar-voip/",
    },
  ];
  const features = [
    {
      title: "01,02 Local Numbers",
      path: "/telephone-numbers/services/voicemail/",
      icon: <PiUserSoundLight className="extraSvg" />,
    },
    {
      title: "0800 Numbers",
      path: "/telephone-numbers/services/online-control-panel/",
      icon: <GiVibratingSmartphone className="extraSvg" />,
    },
    {
      title: "0333 Numbers",
      path: "/telephone-numbers/services/call-statistics/",
      icon: <ImTree className="extraSvg" />,
    },
    {
      title: "0300 Numbers",
      path: "/telephone-numbers/services/timed-diverts/",
      icon: <CiMicrophoneOn className="extraSvg" />,
    },
    {
      title: "VoIP System",
      path: "/telephone-numbers/services/hunt-groups/",
      icon: <LiaHeadsetSolid className="extraSvg" />,
    },
    {
      title: "01,02 Local Numbers",
      path: "/telephone-numbers/services/holiday-settings/",
      icon: <PiUserSoundLight className="extraSvg" />,
    },
    {
      title: "0800 Numbers",
      path: "/telephone-numbers/services/welcome-announcement/",
      icon: <GiVibratingSmartphone className="extraSvg" />,
    },
    {
      title: "0333 Numbers",
      path: "/telephone-numbers/services/missed-call-alerts/",
      icon: <ImTree className="extraSvg" />,
    },
    {
      title: "0300 Numbers",
      path: "/telephone-numbers/services/blacklist/",
      icon: <CiMicrophoneOn className="extraSvg" />,
    },
    {
      title: "VoIP System",
      path: "/telephone-numbers/services/anonymous-call-rejection-acr/",
      icon: <LiaHeadsetSolid className="extraSvg" />,
    },
    {
      title: "VoIP System",
      path: "/whatsapp-business/",
      icon: <LiaHeadsetSolid className="extraSvg" />,
    },
    {
      title: "01,02 Local Numbers",
      path: "/telephone-numbers/services/porting/",
      icon: <PiUserSoundLight className="extraSvg" />,
    },
    {
      title: "0800 Numbers",
      path: "/telephone-numbers/services/mobile-app/",
      icon: <GiVibratingSmartphone className="extraSvg" />,
    },
    {
      title: "0333 Numbers",
      path: "/telephone-numbers/services/blacklist/",
      icon: <ImTree className="extraSvg" />,
    },
  ];
  const premiumFeatures = [
    {
      title: "Tamar Voice AI",
      description: "AI Voiceovers",
      path: "/tamar-voice-ai/",
      icon: <PiUserSoundLight className="extraSvg" />,
    },
    {
      title: "Tamar VoIP",
      description: "Complete business phone system",
      path: "/guide-to-voip/",
      icon: <GiVibratingSmartphone className="extraSvg" />,
    },
    {
      title: "Virtual Switchboard",
      description: `"Press 1 for sales, 2 for accounts"`,
      path: "/telephone-numbers/services/virtual-switchboard/",
      icon: <ImTree className="extraSvg" />,
    },
    {
      title: "Call Whisper",
      description: `"Incoming business call"`,
      path: "/telephone-numbers/services/call-whisper/",
      icon: <CiMicrophoneOn className="extraSvg" />,
    },
    {
      title: "Professional Voiceovers",
      description: "Make first impressions count",
      path: "/telephone-numbers/services/professional-voiceovers/",
      icon: <LiaHeadsetSolid className="extraSvg" />,
    },
  ];

  return (
    <header className="header">
      <ul className="navList">
        <li className="dropdown">
          <button
            onClick={() => handleDropDowns(1)}
            className="dropdownButton navItem"
          >
            Phone Numbers <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 1 && (
            <div className="dropdownMenu" style={{ minWidth: "450px" }}>
              <h3 className="dropdownTitle">Phone Numbers</h3>
              <p className="dropdownDescription">
                Connect With Your Customers, Pick Your Perfect Number
              </p>
              <ul className="dropdownList">
                {phoneNumbers.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="dropdownItem"
                  >
                    <span className="dot"></span>
                    <div className="itemContent">
                      <strong className="itemTitle">{item.title}</strong>
                      <p className="itemDescription">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="dropdown">
          <button
            onClick={() => handleDropDowns(2)}
            className="dropdownButton navItem"
          >
            Number Features <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 2 && (
            <div className="dropdownMenu featuresDropDown flex justify-between left-[-150px]">
              <div>
                <h3 className="dropdownTitle">FREE Features</h3>
                <p className="dropdownDescription text-lg w-[400px]">
                  With every Tamar number, you'll get the below features
                  completely free
                </p>
                <ul className="dropdownList">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      onClick={() => navigate(feature.path)}
                      className="dropdownItem"
                    >
                      <span>{feature.icon}</span>
                      <div className="itemContent">
                        <strong className="itemTitle">{feature.title}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="premiumFeatures w-[370px]">
                <h3 className="dropdownTitle">Phone Numbers</h3>
                <p className="dropdownDescription">
                  Connect With Your Customers, Pick Your Perfect Number
                </p>
                <ul className="dropdownList flex flex-col">
                  {premiumFeatures.map((feature, index) => (
                    <li
                      key={index}
                      onClick={() => navigate(feature.path)}
                      className="dropdownItem"
                    >
                      <span>{feature.icon}</span>
                      <div className="itemContent">
                        <strong className="itemTitle">{feature.title}</strong>
                        <p className="itemDescription">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="dropdown">
          <button
            onClick={() => handleDropDowns(3)}
            className="dropdownButton navItem"
          >
            Solutions <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 3 && (
            <div
              className="dropdownMenu solDropdowns p-0 py-4"
              style={{ minWidth: "200px" }}
            >
              <h4
                onClick={() => navigate("/tamar-voip")}
                className="dropdownTitle"
              >
                VOIP Switching{" "}
              </h4>
              <h4
                onClick={() => navigate("/tamar-connect")}
                className="dropdownTitle"
              >
                OutBound Calling{" "}
              </h4>
              <h4
                onClick={() => navigate("/whatsapp-bussiness")}
                className="dropdownTitle"
              >
                WhatsApp Business
              </h4>
              <h4 onClick={() => navigate("/isdn")} className="dropdownTitle">
                ISDN Switch Off
              </h4>
            </div>
          )}
        </li>
        {/* <li className="dropdown">
          <button
            onClick={() => handleDropDowns(4)}
            className="dropdownButton navItem"
          >
            Partners <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 4 && (
            <div
              className="dropdownMenu solDropdowns p-0 py-4"
              style={{ minWidth: "200px" }}
            >
              <h4
                onClick={() => navigate("/tamar-affiliates")}
                className="dropdownTitle"
              >
                Tamar Affiliates{" "}
              </h4>
              <h4
                onClick={() => navigate("/tamar-partner-application")}
                className="dropdownTitle"
              >
                Tamar Partners{" "}
              </h4>
            </div>
          )}
        </li> */}
        <li className="dropdown">
          <button
            onClick={() => handleDropDowns(5)}
            className="dropdownButton navItem"
          >
            Help Center <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 5 && (
            <div
              className="dropdownMenu solDropdowns p-0 py-4"
              style={{ minWidth: "200px" }}
            >
              <h4
                onClick={() => navigate("/what-is-a-virtual-number")}
                className="dropdownTitle"
              >
                What is a Virtual Number{" "}
              </h4>
              <h4 onClick={() => navigate("/faq")} className="dropdownTitle">
                FAQ{" "}
              </h4>
            </div>
          )}
        </li>
        <li className="dropdown">
          <button
            onClick={() => handleDropDowns(6)}
            className="dropdownButton navItem"
          >
            Team Tamar <IoMdArrowDropdown />
          </button>
          {dropdownsOpen === 6 && (
            <div
              className="dropdownMenu solDropdowns p-0 py-4"
              style={{ minWidth: "200px" }}
            >
              <h4 onClick={() => navigate("/about")} className="dropdownTitle">
                About Us
              </h4>
              {/* <h4 onClick={() => navigate('')} className="dropdownTitle">Customer Reviews </h4> */}
            </div>
          )}
        </li>
        <li className="navItem">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="flex">
        <div className="dropdown">
          <button
            className="accountButton dropdown"
            onClick={() => handleDropDowns(7)}
          >
            My Account
            <IoMdArrowDropdown style={{ transform: "translateY(4px)" }} />
          </button>
          {dropdownsOpen === 7 && (
            <div className="login-container p-0 fixed right-[20px] top-3 bg-white z-20">
              {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <form>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button onClick={handleLogin} type="submit">
                    Login
                  </button>
                </form>
              )}
              <div
                className="solDropdowns p-0 py-4 text-black"
                style={{ minWidth: "200px" }}
              >
                <div className="borderline w-full h-[1px] bg-slate-300 my-2"></div>

                <Link href="/about">
                  <p className="dropdownTitle cursor-pointer text-xl">
                    About Us
                  </p>
                </Link>
                <div className="borderline w-full h-[1px] bg-slate-300 my-2"></div>
                <Link to={"/admin"}>
                  <p className="dropdownTitle cursor-pointer text-xl">
                    Control Panel{" "}
                  </p>
                </Link>
                {/* <div className="borderline w-full h-[1px] bg-slate-300 my-2"></div>
                <p className="dropdownTitle cursor-pointer text-xl">
                  Make Payment{" "}
                </p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
