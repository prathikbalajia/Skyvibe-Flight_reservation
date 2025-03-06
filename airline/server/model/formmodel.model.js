import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const Form = mongoose.model("User", formSchema);
export default Form;
