import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from "cors";
import Form from './model/formmodel.model.js';
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running at port 3000");
        });
    })
    .catch(err => {
        console.error("Connection error:", err);
    });
app.post('/user', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existinguser = await Form.findOne({ email });
        if (existinguser) {
            return res.status(400).json({ message: "User already exists. Please sign in." });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await Form.create({ username, email, password: hashedpassword });
        res.status(200).json(user);
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Form.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found. Please sign up." });
        }
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: " Server Error" });
    }
});
