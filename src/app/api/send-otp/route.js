import { connectDB } from "../../../../lib/mongodb";  // ✅ Correct MongoDB import
import Otp from "../../../../models/Otp";  // ✅ Correct Model import

export async function POST(req) {
  await connectDB(); // Connect to MongoDB

  try {
    const { mobile } = await req.json();

    // Validate mobile number format
    if (!/^(\+91)?[6-9]\d{9}$/.test(mobile)) {
      return new Response(JSON.stringify({ error: "Invalid mobile number" }), { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP

    // ✅ Store or update OTP in MongoDB
    await Otp.findOneAndUpdate(
      { mobile }, // Search by mobile number
      { otp, createdAt: new Date() }, // Update OTP & reset expiry time
      { upsert: true, new: true } // If not found, create a new one
    );

    console.log(`✅ OTP Stored in MongoDB: ${otp} for Mobile: ${mobile}`);

    return new Response(JSON.stringify({ message: "OTP sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("❌ Error in send-otp:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
