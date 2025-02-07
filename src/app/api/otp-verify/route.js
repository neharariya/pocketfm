import jwt from "jsonwebtoken";
import { connectDB } from "../../../../lib/mongodb";  // ✅ Correct MongoDB import
import Otp from "../../../../models/Otp";  // ✅ Correct Model import
import dotenv from "dotenv";

// ✅ Manually load `.env.local` from `env_local/`
dotenv.config({ path: "./env_local/.env.local" });


export async function POST(req) {
  await connectDB(); // Connect to MongoDB

  try {
    const { mobile, otp } = await req.json();

    // Fetch the OTP from MongoDB
    const storedOtp = await Otp.findOne({ mobile });

    console.log(`📩 Incoming Request - Mobile: ${mobile}, OTP: ${otp}`);
    console.log(`🔍 Stored OTP in MongoDB: ${storedOtp?.otp}`);

    if (!storedOtp || String(otp) !== String(storedOtp.otp)) {
      console.log(`❌ Invalid OTP!`);
      return new Response(JSON.stringify({ error: "Invalid OTP" }), { status: 400 });
    }

    // ✅ OTP matched, delete OTP from database
    await Otp.deleteOne({ mobile });

    // ✅ Generate JWT Token
    const token = jwt.sign({ mobile }, process.env.JWT_SECRET, { expiresIn: "7d" });
    

    return new Response(JSON.stringify({ message: "OTP Verified!", token }), { status: 200 });
  } catch (error) {
    console.log("❌ Error in verify-otp:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
