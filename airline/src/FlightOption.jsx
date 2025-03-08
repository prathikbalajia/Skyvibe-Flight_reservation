import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FlightOption.css";
const FlightOption = ({ from, to, time, date, prize, image, description, flightClass }) => {
  const navigate = useNavigate();
  const [travelers, setTravelers] = useState("1");
  const handleGoClick = () => {
    navigate(
      `/destination?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&travelers=${travelers}&prize=${encodeURIComponent(prize)}`
    );
  };
  return (
    <div className="flight-box">
      <img src={image} alt={`${from} to ${to}`} className="flight-image" />
      <div className="location-info">
        <h2 className="flight-title">{from}➝{to}</h2>
        <h2 className="Time">Date:{date}</h2>
        <h2 className="Time">Time:{time}</h2>
        <h2 className="prize">Prize:{prize}</h2>
        <p></p>
        <p className="flight-description">{description}</p>
        <div className="traveler-container">
          <label className="traveler-label">👥 Travelers:</label>
          <select
            className="traveler-select"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="class">
        <strong>Category:</strong> <span style={{ fontWeight: "50" }}>{flightClass}</span>
      </div>
      <button className="go-button" onClick={handleGoClick}>
        Go
      </button>
    </div>
  );
};
export default FlightOption;
