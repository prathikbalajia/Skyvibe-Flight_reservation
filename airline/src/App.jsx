import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SecondPage from "./SecondPage";
import LocationPage from "./LocationPage";
import PaymentPage from "./PaymentPage";
import LoginPage from "./LoginPage";
import About from "./About";
import TravellerForm from "./TravellerForm";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/location" element={<SecondPage />} />
        <Route path="/destination" element={<LocationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/travellerform" element={<TravellerForm/>}/>
      </Routes>
    </Router>
  );
};

export default App;
