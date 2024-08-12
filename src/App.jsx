import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PhoneNumberOptions from "./components/PhoneNumberOptions.jsx";
import FreeFeatures from "./components/FreeFeatures.jsx";
import PremiumFeatures from "./components/PremiumFeatures.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Trust from "./components/Trust.jsx";
import ContactUs from "./components/ContactUs.jsx";
import About from "./components/About.jsx";
import VirtualNumber from "./components/VirtualNumber.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { AuthProvider } from "./AuthContext";
import AccountAdministration from "./components/AccountAdministration.jsx";
import ProtectedRoute from "./ProtectedRoute";
import Stats from "./components/Stats.jsx";
import PaymentPage from "./components/PaymentPage.jsx";
import "./App.css";
import ChangePasswordPage from "./components/ChangePass.jsx";
import UserDetails from "./components/UserDetails.jsx";
import EmailVerification from "./components/EmailVerification.jsx";
import Invoices from "./components/Invioces.jsx";

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
              path="/phone-number-options"
              element={<PhoneNumberOptions />}
            />
            <Route path="/free-features" element={<FreeFeatures />} />
            <Route path="/premium-features" element={<PremiumFeatures />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/virtual-number" element={<VirtualNumber />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/admin" element={<AccountAdministration />} />

              <Route path="/admin/usage" element={<Stats />} />
              <Route path="/verify-email" element={<EmailVerification />} />
              <Route path="/admin/invoices" element={<Invoices />} />
              <Route path="/admin/payment" element={<PaymentPage />} />
              <Route
                path="/admin/change-password"
                element={<ChangePasswordPage />}
              />
              <Route path="/admin/my-details" element={<UserDetails />} />
            {/* </Route> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
