import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./LocationPage.css";

const locationimages = {
  "Coimbatore-Mumbai": "/flight18.jpg",
  "Kochi-Bengaluru": "/flight40.jpg",
  "Trichy-Chennai": "/flight20.jpg",
  "Hyderabad-Goa": "/flight21.jpg",
  "Chennai-Srinagar": "/flight22.jpg",
  "Kolkata-Dhaka": "/flight23.jpg",
  "Aurangabad-Pune": "/flight24.jpg",
  "Bangalore-Delhi": "/flight25.jpg",
  "New Delhi-Colombo": "/flight26.jpg",
  "Tuticorin-Coimbatore": "/flight30.jpg",
  "Mangalore-Hyderabad": "/flight27.jpg",
  "Chennai-Goa": "/flight31.jpg",
  "Madurai-Chennai": "/flight32.jpg",
  "Coimbatore-Chennai":"/flight33.jpg",
  "Bengaluru-Mumbai":"/flight36.jpg"
};
const descriptions = {
  "Coimbatore-Mumbai": `🔹Flight Route:   Coimbatore (CJB) → Mumbai (BOM)
  🔹 Flight Duration:   Approximately 2 hours 15 minutes
  🔹 Aircraft Type:   Airbus A350neo / A351 ✈️
  🔹 Frequency:   Daily flights available
  🔹 Departure Airport:   Coimbatore International Airport (CJB)
  🔹 Arrival Airport:  Chhatrapati Shivaji Maharaj International Airport (BOM)
  🔹About the Route:
   This direct flight offers a comfortable and efficient travel experience, connecting the vibrant city of Coimbatore to the bustling financial capital of India, Mumbai.
   🎟️Book your ticket now and enjoy a smooth journey with Air India!`,

  "Kochi-Bengaluru": `🔹 Flight Route: Kochi (COK) → Bengaluru (BLR)
🔹 Flight Duration: Approximately 1 hour 15 minutes
🔹 Airline: Oman Air ✈️
🔹 Aircraft Type:  Boeing 737-800
🔹 Departure Airport: Cochin International Airport (COK)
🔹 Arrival Airport: Kempegowda International Airport (BLR)
 🔹About the Route:
 This short-haul flight is ideal for both business and leisure travelers, offering a quick, comfortable, and hassle-free journey between two major South Indian cities. Kochi, a vibrant port city known for its rich cultural heritage and scenic backwaters, connects seamlessly to Bengaluru, India's IT capital and startup hub, via this well-serviced air route.
 🎟️ Book your ticket now and enjoy a seamless journey with Oman Air!**`,

  "Trichy-Chennai": `Flight Route: Tiruchirappalli (TRZ) → Chennai (MAA)
🔹Flight Duration: Approximately 1 hour 2 minutes
🔹Aircraft Type: Airbus A320 / ATR 72 ✈️
🔹Frequency:Daily flights available
🔹Departure Airport: Tiruchirappalli International Airport (TRZ)
🔹Arrival Airport: Chennai International Airport (MAA)
🔹About the Route:This direct flight connects the historic city of Tiruchirappalli (Trichy) to the vibrant metropolitan hub of Chennai, ensuring a quick and hassle-free journey for business travelers, tourists, and pilgrims alike. Operated by Malaysian Airlines, this route provides a comfortable and efficient alternative to road or rail travel, allowing passengers to reach their destination in just over an hour.
🎟️ Book your ticket now and experience a smooth journey!**`,

  "Hyderabad-Goa": `Flight Route: Hyderabad (HYD) → Goa (GOI)
🔹Flight Duration: Approximately 1 hour 30 minutes
🔹Aircraft Type: Airbus A320 / Boeing 787 Dreamliner ✈️
🔹Frequency: Available on select days
🔹Departure Airport: Rajiv Gandhi International Airport (HYD)
🔹Arrival Airport: Goa International Airport (GOI)
🔹About the Route:
This flight provides a quick and luxurious journey. Enjoy Qatar Airways’ premium hospitality and world-class comfort on your trip.
🎟️ Book your ticket now and experience the finest travel with Qatar Airways!**`,

  "Chennai-Srinagar": `Flight Route:Chennai (MAA) → Srinagar (SXR)
🔹Flight Duration: Approximately 4 hours 30 minutes (with layovers)
🔹Aircraft Type: Boeing 737 / Bombardier Q400 ✈️
🔹Frequency: Available on select days
🔹Departure Airport: Chennai International Airport (MAA)
🔹Arrival Airport: Sheikh ul-Alam International Airport (SXR)
🔹About the Route:
Experience SpiceJet’s budget-friendly fares with comfortable seating and warm hospitality as you travel from the south to the majestic north.
🎟️ Book your ticket now and fly hassle-free with SpiceJet!**`,

  "Kolkata-Dhaka": `Flight Route: Kolkata (CCU) → Dhaka (DAC)
🔹Flight Duration: Approximately 1 hour
🔹Aircraft Type: Boeing 737 / Dash 8 Q400 ✈️
🔹Frequency: Daily flights available
🔹Departure Airport: Netaji Subhas Chandra Bose International Airport (CCU)
 🔹Arrival Airport: Hazrat Shahjalal International Airport (DAC)
 🔹About the Route:
This short yet crucial international flight connects Kolkata with Dhaka, the vibrant heart of Bangladesh. Enjoy seamless travel, efficient service, and comfortable seating with Biman Bangladesh Airlines.
🎟️ Book your ticket now and experience smooth international travel!**`,

  "Aurangabad-Pune": `🔹 Flight Route:  Aurangabad (IXU) → Pune (PNQ)
🔹 Flight Duration: Approximately 1 hour
🔹Aircraft Type: Airbus A320 / A321neo ✈️
🔹 Frequency: Daily flights available
🔹 Departure Airport: Aurangabad Airport (IXU)
🔹 Arrival Airport: Pune International Airport (PNQ)
🔹 About the Route:
This short domestic flight offers a convenient and comfortable journey, connecting the historic city of Aurangabad to Pune, a major educational and IT hub of India.
🎟️ Book your ticket now and experience seamless travel with Vistara Airlines!`,

  "Bangalore-Delhi": `🔹Flight Route: Bengaluru (BLR) → Delhi (DEL)
🔹 Flight Duration: Approximately 2 hours 45 minutes
🔹 Aircraft Type: Airbus A320 / A321neo ✈️
🔹 Frequency: Multiple daily flights available
🔹 Departure Airport: Kempegowda International Airport (BLR)
🔹 Arrival Airport: Indira Gandhi International Airport (DEL)
🔹 About the Route:
This direct flight connects Bengaluru, India’s tech capital, to Delhi, the nation’s vibrant capital city. IndiGo offers a smooth and efficient travel experience with on-time performance and affordable fares.
🎟️ Book your ticket now and enjoy a hassle-free journey with IndiGo Airlines!`,

  "New Delhi-Colombo": `🔹 Flight Route: New Delhi (DEL) → Colombo (CMB)
🔹 Flight Duration: Approximately 3 hours 45 minutes
🔹 Aircraft Type: Airbus A320 / A321 ✈️
🔹 Frequency: Multiple flights available per week
🔹Departure Airport: Indira Gandhi International Airport (DEL)
🔹Arrival Airport: Bandaranaike International Airport (CMB)
🔹 About the Route:
This direct flight connects New Delhi, India's vibrant capital, with Colombo, Sri Lanka. Experience a smooth and comfortable journey with FitsAir, known for its efficient service and affordability.
🎟️ Book your ticket now and explore the beauty of Sri Lanka with FitsAir!`,

  "Tuticorin-Coimbatore": `🔹Flight Route: Tuticorin (TCR) → Coimbatore (CJB)
🔹 Flight Duration: No direct flights; connecting flights via Chennai or Bengaluru
🔹Aircraft Type: Varies based on connection (ATR 72, Airbus A320) ✈️
🔹 Frequency: Limited flights available with layovers
🔹 Departure Airport: Tuticorin Airport (TCR)
🔹 Arrival Airport: Coimbatore International Airport (CJB)
🔹 About the Route:
While there are no direct flights between Tuticorin and Coimbatore, travelers can opt for convenient connections via Chennai or Bengaluru.
🎟️ Book your ticket now and enjoy a smooth travel experience with IndiGo!`,

  "Mangalore-Hyderabad": `🔹 Flight Route: Mangalore (IXE) → Hyderabad (HYD)
🔹 Flight Duration: Approximately 1 hour 35 minutes
🔹 Aircraft Type: Boeing 737 ✈️
🔹 Frequency: Limited flights available per week
🔹 Departure Airport: Mangalore International Airport (IXE)
🔹 Arrival Airport: Rajiv Gandhi International Airport (HYD)
🔹 About the Route:
This Air India Express flight seamlessly connects Mangalore’s landscapes with Hyderabad’s bustling city life. Air India Express ensures a reliable journey for both business and leisure travelers.
🎟️ Book your ticket now and fly affordably with Air India Express!`,

  "Chennai-Goa": `🔹Flight Route: Chennai (MAA) → Goa (GOI)
🔹 Flight Duration: Approximately 1 hour 40 minutes
🔹 Aircraft Type: Boeing 737 ✈️
🔹 Frequency: Limited flights available per week
🔹 Departure Airport: Chennai International Airport (MAA)
🔹 Arrival Airport: Goa International Airport (GOI)
🔹About the Route:
This Oman Air flight conveniently connects Chennai’s cultural vibrance with Goa’s stunning beaches. With excellent in-flight service and competitive fares, Oman Air ensures a relaxing and hassle-free travel experience.
🎟️ Book your ticket now and enjoy a seamless journey with Oman Air!`,
  "Madurai-Chennai": `🔹 Flight Route: Madurai (IXM) → Chennai (MAA)
🔹 Flight Duration: ~1 hour 10 minutes
🔹 Aircraft Type: Boeing 737-800 ✈️
🔹 Frequency: Daily flights available
🔹 Departure Airport: Madurai International Airport (IXM)
🔹 Arrival Airport: Chennai International Airport (MAA)
🔹 About the Route:
This direct flight with SpiceJet provides a fast and hassle-free connection between the historic city of Madurai and the bustling metropolis of Chennai. Ideal for business travelers, tourists, and students, this route offers a convenient and time-saving alternative to road and rail transport.
🎟️ Book your ticket now and enjoy a smooth journey with SpiceJet! `,
"Coimbatore-Chennai":`🔹 Flight Route: Coimbatore (CJB) → Chennai (MAA)
🔹 Flight Duration: Approximately 1 hour 10 minutes
🔹 Aircraft Type: Airbus A320neo ✈️
🔹 Frequency: Limited flights available per week
🔹 Departure Airport: Coimbatore International Airport (CJB)
🔹 Arrival Airport: Chennai International Airport (MAA)
🔹 About the Route:
Travel seamlessly from the industrial hub of Coimbatore to the cultural capital of Chennai with GoAir’s efficient and budget-friendly service. This short flight ensures a comfortable journey with modern aircraft and excellent in-flight service, making it an ideal choice for both business and leisure travelers.
🎟️ Book your ticket now and experience a smooth journey with GoAir!`,
"Bengaluru-Mumbai":`🔹 Flight Route: Bengaluru (BLR) → Mumbai (BOM)
🔹 Flight Duration: Approximately 1 hour 45 minutes
🔹 Aircraft Type: Airbus A320 / A321neo ✈️
🔹 Frequency: Multiple daily flights available
🔹 Departure Airport: Kempegowda International Airport (BLR)
🔹 Arrival Airport: Chhatrapati Shivaji Maharaj International Airport (BOM)
🔹 About the Route:
From the Silicon Valley of India to the City of Dreams, this route bridges two of India’s most influential hubs. Bengaluru, the epicenter of technology and innovation, connects effortlessly with Mumbai, the powerhouse of finance, entertainment, and trade. 
🎟️ Book your ticket now and enjoy a seamless journey with AirAsia!`

};
const normalizekey = (key) => key.trim().replace(/\s+/g, " ");
const LocationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const from = (params.get("from") || "").trim();
  const to = (params.get("to") || "").trim();
  const travelers = params.get("travelers") || "1";
  const prize = params.get("prize");
  const destinationkey = normalizekey(`${from}-${to}`);
  const imageurl = locationimages[destinationkey] ;
  const description = descriptions[destinationkey] || "No description available.";
  const num = parseInt(prize.replace(/[₹,]/g, ""), 10) * travelers;
  const finprice = `₹${num.toLocaleString("en-US")}`;
  const BookNow = () => {
    navigate(`/travellerform?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&travelers=${travelers}&prize=${finprice}`);
  };
  return (
    <>
      <div className="locationpage">
        <motion.div className="destinationimage" initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          <img src={imageurl} alt={`${from}to${to}Flight`} />
        </motion.div>
        <motion.div className="div2" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
          <div className="dt">
            <h1>Your Destination</h1>
            <h2>{from} ➝ {to}</h2>
          </div>
          <p className="description">
            {(description || "No description available.").split("\n").map((line, index) => (
              <React.Fragment key={index}>{line}<br /></React.Fragment>
            ))}
          </p>
        </motion.div>
        <motion.button className="booknowbutton" onClick={BookNow}>Book Now</motion.button>
      </div>
    </>
  );
};
export default LocationPage;
