import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully!" });

  // ✅ Clear the "authToken" cookie
  response.cookies.set("authToken", "", {
    httpOnly: true,  // 🔒 Security feature (prevents XSS attacks)
    secure: process.env.NODE_ENV === "production",  // 🔒 Use HTTPS in production
    expires: new Date(0),  // 🔥 Set expiration date to the past (immediate removal)
  });

  return response;
}
