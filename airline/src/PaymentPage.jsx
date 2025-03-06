import React from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";
const PaymentPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "Unknown";
  const to = params.get("to") || "Unknown";
  const travelers = params.get("travelers") || "1";
  const finPrice = params.get("prize") || "0";
  return (
    <div className="paymentpage" style={{backgroundColor:"white"}}>
      <div className="paymentdetails">
        <h1>💳 Payment Details</h1>
        <p>You're booking a flight from <strong>{from}</strong> to <strong>{to}</strong></p>
        <p>👥 Travellers: {travelers}</p>
        <p>Price: {finPrice} INR</p>
      </div>
      <form className="paymentform">
        <label>Card Number:
          <input type="text" placeholder="1234 5678 9012 3456" required />
        </label>
        <label> Expiry Date:
          <input type="month" required />
        </label>
        <label>CVV:
          <input type="password" placeholder="123" required />
        </label>
        <button type="submit" className="confirmpaymentbutton">Confirm Payment</button>
      </form>
    </div>
  );
};
export default PaymentPage;
