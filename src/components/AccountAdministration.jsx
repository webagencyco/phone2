import React from "react";
import "./AccountAdministration.css";
const AccountAdministration = () => {
  const items = [
    { id: 1, label: "Statistics", icon: "📊", isNew: false, to: "/stats" },
    // { id: 2, label: "Number Porting", icon: "🔄", isNew: true },
    {
      id: 3,
      label: "Change Password",
      icon: "🔒",
      isNew: false,
      to: "/change-password",
    },
    // { id: 4, label: "Your Invoices", icon: "📄", isNew: false },
    {
      id: 5,
      label: "Make A Payment",
      icon: "💳",
      isNew: false,
      to: "/payment",
    },
    // { id: 6, label: "Direct Debit", icon: "💳", isNew: false },
    { id: 7, label: "My Details", icon: "📋", isNew: false, to: "/my-details" },
    // { id: 8, label: "Tamar Affiliates", icon: "✨", isNew: true }
  ];

  return (
    <div className="account-administration">
      <h3>Account Administration</h3>
      <p>
        This section allows account and portal wide actions to be carried out.
        This includes the viewing of call statistics for the numbers on the
        portal, as well as changing the password for the portal.
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
    </div>
  );
};

export default AccountAdministration;
