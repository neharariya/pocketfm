import jwt from "jsonwebtoken";
import { connectDB } from "../../../../lib/mongodb";  
import Otp from "../../../../models/Otp";  
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config({ path: "./env_local/.env.local" });

export async function POST(req) {
  await connectDB(); 

  try {
    const { mobile, otp } = await req.json();
    const storedOtp = await Otp.findOne({ mobile });

    console.log(`📩 Incoming Request - Mobile: ${mobile}, OTP: ${otp}`);
    console.log(`🔍 Stored OTP in MongoDB: ${storedOtp?.otp}`);

    if (!storedOtp || String(otp) !== String(storedOtp.otp)) {
      console.log(`❌ Invalid OTP!`);
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    await Otp.deleteOne({ mobile });

    // ✅ Generate JWT Token
    const token = jwt.sign({ mobile }, process.env.JWT_SECRET, { expiresIn: "7d" });
    

    // ✅ Store JWT in HTTP-only Cookie
    const response = NextResponse.json({ message: "OTP Verified!" });
    response.cookies.set("authToken", token, {
      httpOnly: true, // 🔒 Prevents JavaScript access (XSS-proof)
      secure: process.env.NODE_ENV === "production", // 🔒 Use `secure` in production (HTTPS)
      maxAge: 7 * 24 * 60 * 60, // 🔥 Expires in 7 days
      sameSite: "lax",
    });

    console.log("✅ Cookie Set in Response:", response.cookies.get("authToken"));

    return response;
  } catch (error) {
    console.log("❌ Error in verify-otp:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
