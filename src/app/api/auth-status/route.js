import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  // ✅ 1️⃣ Get the token from the cookies
  const token = req.cookies.get("authToken");
  console.log("🔍 Token Received in API:", token);

  // ✅ 2️⃣ If no token is found, the user is not logged in
  if (!token) {
    return NextResponse.json({ isAuthenticated: false });
  }

  try {
    // ✅ 3️⃣ Verify the token using JWT_SECRET
    jwt.verify(token, process.env.JWT_SECRET);

    // ✅ 4️⃣ If verification is successful, return isAuthenticated: true
    return NextResponse.json({ isAuthenticated: true });
    

  } catch (error) {
    // ✅ 5️⃣ If token verification fails (expired or invalid), return isAuthenticated: false
    return NextResponse.json({ isAuthenticated: false });
  }
}
