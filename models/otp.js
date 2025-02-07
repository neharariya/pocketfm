import mongoose from "mongoose";

// Define the OTP Schema
const OtpSchema = new mongoose.Schema({
  mobile: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // OTP expires after 5 minutes
});

// Create the model if it doesn't exist
export default mongoose.models.Otp || mongoose.model("Otp", OtpSchema);
