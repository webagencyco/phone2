import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Trust from "./components/Trust.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./ProtectedRoute";

import Hero from "./pages/Hero.jsx";
import PhoneNumberOptions from "./pages/PhoneNumberOptions.jsx";
import FreeFeatures from "./pages/FreeFeatures.jsx";
import PremiumFeatures from "./pages/PremiumFeatures.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import About from "./pages/About.jsx";
import VirtualNumber from "./pages/VirtualNumber.jsx";
import FAQ from "./pages/FAQ.jsx";

import AccountAdministration from "./pages/panel/AccountAdministration.jsx";
import Stats from "./pages/panel/Stats.jsx";
import PaymentPage from "./pages/panel/PaymentPage.jsx";
import ChangePass from "./pages/panel/ChangePass.jsx";
import UserDetails from "./pages/panel/UserDetails.jsx";
import EmailVerification from "./pages/panel/EmailVerification.jsx";
import Invoices from "./pages/panel/Invioces.jsx";

import Uknums from "./pages/specificNumbers/uknums.jsx";
import UkWide from "./pages/specificNumbers/UkWide.jsx";
import Voip from "./pages/Voip.jsx";
import WhatsAppBussiness from "./pages/WhatsAppBussiness.jsx";
import OutboundCall from "./pages/OutBoundCall.jsx";
import ISDN from "./pages/ISDN.jsx";
import Charity from "./pages/specificNumbers/Charity.jsx";
import LandLine from "./pages/specificNumbers/LandLine.jsx";

import Login from "./pages/panel/Login.jsx";
import Register from "./pages/panel/Register.jsx";

import { AuthProvider } from "./AuthContext";
import VoicemailBox from "./pages/additional/Voicemail.jsx";
import "./App.css";
import Greetings from "./pages/additional/Greetings.jsx";
import HuntGroups from "./pages/additional/HuntGroups.jsx";
import Blacklist from "./pages/additional/Blacklist.jsx";
import HolidaySettings from "./pages/additional/Holidays.jsx";
import ControlApp from "./pages/additional/ControlApp.jsx";
import FaxToEmail from "./pages/additional/FaxEmail.jsx";

export const server = "http://localhost:5000";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="body">
          <Header />
          <Trust />
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route
              path="/telephone-numbers/numbers/0800-freephone-numbers"
              element={<Uknums />}
            />
            <Route
              path="/telephone-numbers/numbers/03-uk-wide-numbers"
              element={<UkWide />}
            />
            <Route
              path="/telephone-numbers/numbers/0300-numbers/"
              element={<Charity />}
            />
            <Route
              path="/telephone-numbers/numbers/geographic-numbers"
              element={<LandLine />}
            />
            <Route path="/mobile-landline-number" element={<LandLine />} />

            <Route
              path="/phone-number-options"
              element={<PhoneNumberOptions />}
            />
            <Route path="/free-features" element={<FreeFeatures />} />
            <Route path="/premium-features" element={<PremiumFeatures />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="/virtual-number" element={<VirtualNumber />} />
            <Route
              path="/what-is-a-virtual-number"
              element={<VirtualNumber />}
            />

            <Route path="/tamar-voip" element={<Voip />} />
            <Route path="/whatsapp-bussiness" element={<WhatsAppBussiness />} />
            <Route path="/tamar-connect" element={<OutboundCall />} />
            <Route path="/isdn" element={<ISDN />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin/voicemail" element={<VoicemailBox />} />
            <Route path="/admin/greetings" element={<Greetings />} />
            <Route path="/admin/hunt-group" element={<HuntGroups />} />
            <Route path="/admin/blacklist" element={<Blacklist />} />
            <Route path="/admin/holiday" element={<HolidaySettings />} />
            <Route path="/admin/mobile-app" element={<ControlApp />} />
            <Route path="/admin/fax2email" element={<FaxToEmail />} />
            <Route path="/verify-email" element={<EmailVerification />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AccountAdministration />} />
              <Route path="/admin/usage" element={<Stats />} />
              <Route path="/admin/invoices" element={<Invoices />} />
              <Route path="/admin/payment" element={<PaymentPage />} />
              <Route path="/admin/change-password" element={<ChangePass />} />
              <Route path="/admin/my-details" element={<UserDetails />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
