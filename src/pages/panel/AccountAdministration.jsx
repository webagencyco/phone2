import React from "react";
import "./AccountAdministration.css";
import { Link } from "react-router-dom";
import { MdCallEnd, MdEmail, MdMissedVideoCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const AccountAdministration = () => {
  const items = [
    {
      id: 1,
      label: "Usage Report",
      icon: "📊",
      isNew: false,
      to: "/admin/usage",
    },
    // { id: 2, label: "Number Porting", icon: "🔄", isNew: true },
    {
      id: 3,
      label: "Change Password",
      icon: "🔒",
      isNew: false,
      to: "/admin/change-password",
    },
    {
      id: 4,
      label: "Your Invoices",
      icon: "📄",
      isNew: false,
      to: "/admin/invoices",
    },
    {
      id: 5,
      label: "Make A Payment",
      icon: "💳",
      isNew: false,
      to: "/admin/payment",
    },
    // { id: 6, label: "Direct Debit", icon: "💳", isNew: false },
    {
      id: 7,
      label: "My Details",
      icon: "📋",
      isNew: false,
      to: "/admin/my-details",
    },
    // { id: 8, label: "Tamar Affiliates", icon: "✨", isNew: true }
  ];

  const includedFeatures = [
    {
      id: 1,
      label: "Fax-To-Email",
      icon: <MdEmail />,
      isNew: false,
      to: "/admin/fax2email",
    },
    {
      id: 2,
      label: "Voicemail",
      icon: <TfiEmail />,
      isNew: true,
      to: "/admin/voicemail",
    },
    {
      id: 3,
      label: "Hunt Groups",
      icon: "🔄",
      isNew: false,
      to: "/admin/hunt-group",
    },
    {
      id: 4,
      label: "Recorded Greetings",
      icon: "📄",
      isNew: false,
      to: "/admin/greetings",
    },
    // {
    //   id: 5,
    //   label: "Missed Call Alerts",
    //   icon: <MdMissedVideoCall />,
    //   isNew: false,
    //   to: "/admin/missedcalls",
    // },
    {
      id: 6,
      label: "Blacklist",
      icon: <MdCallEnd />,
      isNew: false,
      to: "/admin/blacklist",
    },
    {
      id: 7,
      label: "Holiday Settings",
      icon: "📋",
      isNew: false,
      to: "/admin/holiday",
    },
    { id: 8, label: "WhatsApp Business", icon: "W", to: "/whatsapp-bussiness" },
    {
      id: 9,
      label: "Control Panel App",
      icon: "✨",
      isNew: true,
      to: "/admin/mobile-app",
    },
  ];

  return (
    <div className="account-administration my-10">
      <div className="flex flex-col gap-1 px-12 py-6 items-start">
        <h1 className="text-lg">
          <Link to="/admin" className="text-lg">
            {" "}
            Tamar Home{" "}
          </Link>{" "}
          / Control panel home /
        </h1>
        <h2 className="text-5xl">User panel</h2>
      </div>
      <div className="flex">
        <div className="w-[200px] p-3 pt-10 text-xl font-bold">
          <h2>My Account</h2>
          <Link to="/admin/my-details" className="text-blue-700">
            Account Details
          </Link>
        </div>
        <div>
          <h4 className="text-2xl">Account Administration</h4>
          <p>
            This section allows account and portal wide actions to be carried
            out. This includes the viewing of call statistics for the numbers on
            the portal, as well as changing the password for the portal.
          </p>
          <div className="account-items">
            {items.map((item) => (
              <a href={item.to} key={item.id} className="account-item">
                <div key={item.id} className="account-item">
                  <div className="icon-container">
                    <span className="icon">{item.icon}</span>
                    {item.isNew && <span className="new-badge">New</span>}
                  </div>
                  <p>{item.label}</p>
                </div>
              </a>
            ))}
          </div>

          <h4 className="text-2xl">Included Features</h4>
          <p className="!mb-8">
            This section is where you configure the various advanced services
            that are available to you on your portal.
          </p>
          <div className="account-items flex flex-nowrap">
            {includedFeatures.map((item) => (
              <Link to={item.to} key={item.id} className="text-[10px] w-[100px]">
                <div key={item.id} className="">
                  <div className="icon-container">
                    <span className="icon">{item.icon}</span>
                    {item.isNew && <span className="new-badge">New</span>}
                  </div>
                  <p>{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAdministration;
