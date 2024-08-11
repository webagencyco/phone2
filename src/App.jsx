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

import "./App.css";

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
            <Route path="/administration" element={<AccountAdministration />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/stats"
              element={
                // <ProtectedRoute>
                  <Stats />
                // </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
