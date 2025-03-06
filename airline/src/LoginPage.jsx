import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import { motion } from 'framer-motion';
import axios from 'axios';
export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSignUp, setIsSignUp] = useState(true);
    const validate = async (event) => {
        event.preventDefault();
        let formErrors = {};
        if (isSignUp && !username.trim()) {
            formErrors.username = "User Name is required!";
        }
        if (!email.trim()) {
            formErrors.email = "Email address is required!";
        } else if (!email.includes("@")) {
            formErrors.email = "Invalid email! Email must contain '@'.";
        }
        if (!password.trim()) {
            formErrors.password = "Password is required!";
        } else if (password.length < 6) {
            formErrors.password = "Password must be at least 6 characters!";
        }
        if (isSignUp && password !== confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match!";
        }
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setErrors({});
        const userdata = { email, password };
        try {
            let response;
            if (isSignUp) {
                userdata.username = username;
                response = await axios.post("http://localhost:3000/user", userdata);
            } else {
                response = await axios.post("http://localhost:3000/signin", userdata);
            }
            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrors({ server: error.response?.data?.message || "Something went wrong" });
        }
        if (isSignUp) {
            alert("successfully signed up")
        }
    };

    return (
        <div className="logincontainer" style={{ backgroundColor: "white" }}>
            <div className="imagecontainer">
                <img src="loginpage.png" alt="Login" />
            </div>
            <motion.div
                className="loginform"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}>
                <h2><center>{isSignUp ? "Welcome Onboard!" : "Sign In"}</center></h2>
                <form>
                    {isSignUp && (
                        <div className="inputgroup">
                            <label>User Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                            {errors.username && <p className="error-message">{errors.username}</p>}
                        </div>
                    )}
                    <div className="inputgroup">
                        <label>Email address:</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="inputgroup password-container">
                        <label>Password:</label>
                        <div className="password-wrapper">
                            <input type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    {isSignUp && (
                        <div className='cp'>
                            <div className="inputgroup password-container">
                                <label>Confirm Password:</label>
                                <div className="password-wrapper">
                                    <input type="password"
                                        placeholder="Enter password again"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                    )}
                    <center><button type="submit" onClick={validate}>{isSignUp ? "Sign Up" : "Sign In"}</button></center>
                    <center>{errors.server && <p className="errormessage">{errors.server}</p>}</center>

                </form>
                <p className="signin-text">
                    {isSignUp ? "Already have an account? " : "Don't have an account? "}
                    <a href="#" onClick={() => {
                        setIsSignUp(!isSignUp);
                        setEmail("");
                        setUsername("");
                        setPassword("");
                        setConfirmPassword("");
                        setErrors({});
                    }}>
                        {isSignUp ? "Sign in now" : "Sign up now"}
                    </a>
                </p>
            </motion.div>
        </div>
    );
}