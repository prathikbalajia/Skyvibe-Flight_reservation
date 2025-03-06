import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TravellerForm.css";
const TravellerForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const travelers = parseInt(params.get("travelers"), 10)
    const from = params.get("from")
    const to = params.get("to")
    const finPrice = params.get("prize")
    const [formData, setFormData] = useState(
        Array.from({ length: travelers }, () => ({
            fullName: "",
            age: "",
            gender: "",
            dob: "",
        }))
    );
    const handleChange = (index, e) => {
        const updatedformData = [...formData];
        updatedformData[index][e.target.name] = e.target.value;
        setFormData(updatedformData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Traveller Details:", formData);
        navigate(`/payment?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&travelers=${travelers}&prize=${encodeURIComponent(finPrice)}`);
    };
    return (
        <div className="travellerformcontainer" style={{ background: "aliceblue" }}>
            <div><center><p className="traveller-count">👥 Number of Travellers: {travelers}</p></center>
            </div>
            <h2>Enter Traveller Details</h2>
            <form className="travellerform" onSubmit={handleSubmit}>
                {formData.map((traveler, index) => (
                    <div key={index} className="travellersection">
                        <h3>Traveller {index + 1}</h3>
                        <label>Full Name:</label>
                        <input type="text" name="fullName" value={traveler.fullName} onChange={(e) => handleChange(index, e)} required />
                        <label>Age:</label>
                        <input type="number" name="age" value={traveler.age} onChange={(e) => handleChange(index, e)} required />
                        <label>Gender:</label>
                        <select name="gender" value={traveler.gender} onChange={(e) => handleChange(index, e)} required>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label>Date of Birth:</label>
                        <input type="date" name="dob" value={traveler.dob} onChange={(e) => handleChange(index, e)} required />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default TravellerForm;
