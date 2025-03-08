import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";
const LandingPage = () => {
  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/login");
  };
  const move = () => {
    navigate("/location")
  }
  return (
    <div className="landing-page">
      <nav className="navbar">
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="logo" />
        <motion.h1
          className="welcome-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
        </motion.h1>
        <div className="nav-links">
          <a href="/About" className="about"><p>About</p></a>
          <button className="login" onClick={handleSearchClick}>Sign Up</button>
        </div>
      </nav>

      <div className="hero">
        <motion.img
          src="img2.png"
          alt="Airport"
          initial={{ x: "100vw", y: "100vh", opacity: 0 }}
          animate={{ x: "0vw", y: "-10vh", opacity: 1 }}
          transition={{ type: "tween", duration: 2 }} />
        <motion.div
          className="gesture-box"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 5, x: 0 }}
          transition={{ duration: 3.5 }}>
          <p className="gesture-text">
            ** <span className="highlight">Experience a seamless journey with us!</span>
            We ensure a hassle-free and enjoyable trip from takeoff to landing.
            Fly high with <span className="highlight">top-tier service</span> that caters to your every need.
            Let Sky Vibe take you to new heights because your journey matters as much as your destination! **
          </p>
          <button className="add-flights-btn" onClick={move}>Available Flights</button>
        </motion.div>
      </div>
      <center>
        <div className="second">
          <h1 className="pop">Popular Routes</h1>
          <div className="routescontainer">
            <div className="routecard">
              <img src="/s6.jpg" alt="Madrid" />
              <h2>Goa</h2>
              <p>From ₹5,000 INR</p>
            </div>
            <div className="routecard">
              <img src="/s2.jpg" alt="Chennai" />
              <h2>Chennai</h2>
              <p>From ₹2,000 INR</p>
            </div>
            <div className="routecard">
              <img src="/s3.jpg" alt="Doha" />
              <h2>Bengaluru</h2>
              <p>From ₹3,087INR</p>
            </div>
            <div className="routecard">
              <img src="/new2.jpg" alt="New York City" />
              <h2>Mumbai</h2>
              <p>From ₹5,000 INR</p>
            </div>
            <div className="routecard">
              <img src="/s5.jpg" alt="New York City" />
              <h2>Hyderebad</h2>
              <p>From ₹4,000 INR</p>
            </div>
          </div>
        </div></center>
      <div className="whychoose">
        <h2 className="heading1">Why Choose SkyVibe?</h2>
        <ul className="ull">
          <li><strong> Effortless Booking </strong> – Quick reservations in a few clicks.</li>
          <li><strong> Secure Payments </strong> – Encrypted transactions for safety.</li>
          <li><strong> Wide Network of Flights </strong> – Extensive domestic and international routes.</li>
          <li><strong>Seamless Travel Experience </strong> – Real-time updates, easy modifications, and smooth boarding.</li>
          <li><strong>Exclusive Member Benefits </strong>
            – Enjoy priority boarding, extra baggage allowance, and special discounts.</li>
          <li><strong>Exclusive Rewards
          </strong> – Earn points on every booking and redeem them for discounts on future trips.</li>
        </ul>
      </div>
      <div className="offerssection">
        <h2 className="offersheading">Exclusive Offers & Deals</h2>
        <p>Unlock amazing discounts on domestic and international flights. Enjoy seasonal sales, last-minute deals, and exclusive partner offers tailored to your travel needs.</p>
        <ul>
          <li><strong>Early Bird Discounts:</strong> Book in advance and save more on flights.</li>
          <li><strong>Last-Minute Deals:</strong> Get incredible discounts on last-minute bookings.</li>
          <li><strong>Seasonal Sales:</strong> Avail special holiday and festival offers on flights and hotels.</li>
          <li><strong>Bundle & Save:</strong> Combine flights and hotels to enjoy additional savings.</li>
          <li> <strong>Loyalty Rewards: </strong> Earn points on every booking and redeem them for discounts on future flights and hotel stays.</li>
        </ul>
      </div>

      <div className="sponsors">
        <h2 className="h"> Sponsors & Partners</h2>
        <div className="sponsor-logos">
          <div className="sponsor">
            <img src="/spon2.jpg" alt="MakeMyTrip" />
            <p> <strong>Make my trip</strong> India’s leading travel company offering seamless flight, hotel, and holiday bookings.</p>
          </div>
          <div className="sponsor">
            <img src="/spon3.jpg" alt="Yatra" />
            <p><strong>EaseMyTrip </strong> – One of the most trusted travel agencies in India, known for its zero convenience fees,and excellent customer service.</p>
          </div>
          <div className="sponsor">
            <img src="/spon6.jpg" alt="Air India" />
            <p><strong> Vistara </strong>India’s premium full-service airline committed to luxury and seamless travel experiences.</p>
          </div>
          <div className="sponsor">
            <img src="/spon4.jpg" alt="IndiGo" />
            <p> <strong>Indigo</strong> India’s largest airline, known for on-time performance and affordability.</p>
          </div>

          <div className="sponsor">
            <img src="/spon7.jpg" alt="Taj Hotels" />
            <p><strong>Taj Hotels </strong>Luxury hospitality brand offering premium stays across India and beyond.</p>
          </div>
        </div>
      </div>
      <div className="travel-essentials">
        <h2 cus1>Travel Essentials</h2>
        <div className="essentials-container">
          <div className="essential-item">
            <img src="ess1.jpg" alt="Passport" />
            <h3>Passport & Visa</h3>
            <p>Ensure your passport is valid for at least six months beyond your travel dates.  Some countries offer e-visas or visa-on-arrival services, while others require a consulate visit for processing.</p>
          </div>
          <div className="essential-item">
            <img src="/ess2.jpg" alt="Luggage" />
            <h3>Packing Smart</h3>
            <p>Pack light to make your journey more convenient and stress-free. Choose versatile clothing suitable for the weather and activities planned. Use packing cubes to stay organized and maximize space in your luggage.</p>
          </div>
          <div className="essential-item">
            <img src="/ess3.jpg" alt="Health & Safety" />
            <h3>Health & Safety</h3>
            <p>Carry essential medicines for common ailments and any prescribed medications you may need. Ensure you have travel insurance to cover unexpected medical emergencies, trip cancellations, or lost belongings.</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h2 className="cus"> Top-Travel Entrepreneur Reviews</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <img src="cus1.jpg" alt="Rahul Sharma" className="reviewer-img" />
            <p>"SkyVibe made my vacation hassle-free! Quick bookings and amazing discounts."</p>
            <h4>- Rahul Sharma</h4>
          </div>
          <div className="testimonial">
            <img src="/cus2.jpg" alt="Priya Kapoor" className="reviewer-img" />
            <p>"The best flight booking experience I’ve ever had! Highly recommend SkyVibe."</p>
            <h4>- Priya Kapoor</h4>
          </div>
          <div className="testimonial">
            <img src="/cus3.jpg" alt="Ankit Verma" className="reviewer-img" />
            <p>"Excellent service and great deals. My go-to platform for travel bookings."</p>
            <h4>- Ankit Verma</h4>
          </div>
          <div className="testimonial">
            <img src="/cus4.jpg" alt="Sneha Mehta" className="reviewer-img" />
            <p>"Amazing customer support and smooth booking process. Loved my experience!"</p>
            <h4>- Sneha Mehta</h4>
          </div>

        </div>
      </div>



      <div className="featuresection">
        <div className="feature">
          <img src="/icon1.png" className="featureicon" />
          <h3>Guarantee of the best price</h3>
          <p>We offer only the best deals, if you find the same flight cheaper elsewhere, contact us!</p>
        </div>
        <div className="feature">
          <img src="/icon4.png" className="featureicon" />
          <h3>Refunds & cancellations</h3>
          <p>Your flight got cancelled? We have you covered with our instant refund services.</p>
        </div>

        <div className="feature">
          <img src="/icon5.png" className="featureicon" />
          <h3>24/7 Customer Support</h3>
          <p>Need help? Our support team is available 24/7 to assist you with any booking, refund, or travel-related queries.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
