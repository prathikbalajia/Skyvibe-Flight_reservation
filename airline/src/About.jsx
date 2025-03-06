import React from "react";
import { motion } from "framer-motion";
import "./About.css";
export default function About() {
  return (
    <div className="aboutpage">
      <motion.section
        className="herosection"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <h1>We are a team of <span className="highlight">innovators</span> and <span className="highlightalt">travel experts</span></h1>
        <motion.img
          src="aimg5.png"
          initial={{ scale: 1.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }} />
      </motion.section>
      <motion.section
        className="aboutcontent"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <p className="p">
          <span className="sp"> SkyVibe Airlines</span> was founded with the vision of making air travel seamless, convenient, and enjoyable.Our cutting-edge booking platform provides real-time flight availability, secure transactions, to enhance your travel.
          SkyVibe Reservation specializes in <span className="sp">domestic-level flights</span>, ensuring a hassle-free ticketing process with instant confirmation for available routes across the country. We focus on providing a wide network of domestic flights, connecting major cities and regional destinations with reliability and efficiency.To streamline the booking process,<span className="sp"> SkyVibe Reservations displays flights available for the upcoming month only.</span> For example, if the current month is February, our platform will show flights available in March.
          .With a well-secured platform, we prioritize data privacy and transaction security, ensuring a smooth and trustworthy booking experience. timely updates and a seamless journey from booking to boarding......</p>
      </motion.section>
      <motion.section
        className="featuressection"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <h2 className="policy">Seat Selection Policy</h2>
        <p>
          At <span className="sp">SkyVibe Reservations</span>, we strive to provide a seamless booking experience for all our passengers. Due to airline policies and operational requirements, seat selection is available only at the airport during check-in.
          This policy ensures compliance with safety regulations, optimal seat allocation, and fairness in accommodating passengers with special needs.
        </p>
        <ul>
          <li>✔️ <b>Fair Seat Allocation</b> – Ensuring passengers with special requirements, families, and groups are accommodated appropriately.</li>
          <li>✔️ <b>Compliance with Airline Policies</b> – Adhering to airline-specific regulations regarding seat assignments.</li>
          <li>✔️ <b>Last-Minute Availability</b> – Providing flexibility for any operational changes or upgrades.</li>
        </ul>
        <p>
          We appreciate your understanding and recommend arriving early at the airport to secure your preferred seat. If you have any special seating requests, please inform the check-in staff, and they will assist you accordingly.
        </p>
      </motion.section>
      <motion.section
        className="contactsection"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
        <h2>Contact Us</h2>
        <p>📍 123 SkyVibe Tower,Coimbatore,Tamil Nadu,India</p>
        <p>📧 support@skyvibe.com</p>
        <p>☎️ +1(800)123-4567</p>
      </motion.section>
    </div>
  );
}