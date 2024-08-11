import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>Phone Numbers</h4>
          <ul>
            <li>Geographic Numbers</li>
            <li>0800 Numbers</li>
            <li>0333 Numbers</li>
            <li>0300 Numbers</li>
          </ul>
          <h4>Premium Features</h4>
          <ul>
            <li>Tamar Connect</li>
            <li>Call Whisper</li>
            <li>Virtual Switchboard</li>
            <li>Professional Voice Greetings</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Free Features</h4>
          <ul>
            <li>Welcome Announcement</li>
            <li>Anonymous Call Rejection</li>
            <li>Blacklist</li>
            <li>Call Statistics</li>
            <li>Holiday Settings</li>
            <li>Hunt Groups</li>
            <li>Missed Call Alerts</li>
            <li>Control Panel & App</li>
            <li>Porting</li>
            <li>Timed Diverts</li>
            <li>Voicemail</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Services & Resources</h4>
          <ul>
            <li>Login To Control Panel</li>
            <li>Pay An Invoice Online</li>
            <li>Service Status</li>
            <li>Solutions</li>
            <li>Blog & News</li>
            <li>FAQ</li>
            <li>Tamar Affiliates</li>
            <li>Tamar Partners</li>
            <li>Privacy Policy</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Subscribe</h4>
          <div className="flex">
            <input type="email" placeholder="Email Address" />
            <button type="submit">➤</button>
          </div>
          {/* <div className="footer__social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div> */}
            <img style={{ width: "150px", marginTop: "20px" }}
              src="https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/footer_trustpilot.gif"
              alt="Trustpilot"
            />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__payments">
          <img
            src={
              "https://www.tamartelecommunications.co.uk/wp-content/themes/tamar/img/payment.png"
            }
            alt="PayPal"
          />
          {/* <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="amex.png" alt="American Express" /> */}
        </div>
        <p>© 2022 Tamar Telecommunications...</p>
      </div>
    </footer>
  );
};

export default Footer;
