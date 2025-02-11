"use client";

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [mobile, setMobile] = useState(""); // State for storing the mobile number
  const [showotpform, setShowOtpForm] = useState(false); // State for showing OTP form
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State for OTP input
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP has been sent
  const router = useRouter();  // ✅ Initialize the router
  


  // Function to handle sending the OTP
  const handleSendOTP = async () => {
    // Validate mobile number
    if (!/^(\+91)?[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid mobile number");
      return;
    } else {
      setShowOtpForm(true); // Show OTP form when OTP is sent
      setOtpSent(true); // Mark that OTP has been sent

      console.log("📡 Sending OTP verification request...");

    }

    try {
      // Call the backend API to send OTP
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }), // Send the mobile number to the server
      });

      const data = await response.json();

      if (response.ok) {
        alert("OTP sent successfully!");
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send OTP");
    }
  };

  // Function to handle OTP input change
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  // Function to handle OTP submission
  const handleSubmitOtp = async () => {
    const enteredOtp = otp.join("");

    // Check if OTP is complete (all 6 digits entered)
    if (enteredOtp.length !== 6) {
      alert("Please enter a complete OTP");
      return;
    }

    try {
      const response = await fetch("/api/otp-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: enteredOtp, mobile }),
      });

      const data = await response.json();
      console.log("otp-verify data:",data);
      
      
      if (response.ok) {
        alert("OTP verified successfully!");
        // Redirect or perform other actions after successful verification
        // localStorage.setItem("authToken", data.token);
        // 

      // Redirect to homepage or dashboard
      router.push("/");

      } else {
        alert(data.error || "OTP verification failed");
        
      }
    } catch (err) {
      console.log(err);
      alert("Failed to verify OTP");
    }
  };

  // Function to resend the OTP
  const handleResendOtp = async () => {
    setOtp(["", "", "", "", "", ""]); // Clear OTP fields
    await handleSendOTP(); // Call handleSendOTP again to resend OTP
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <header className="absolute top-4 left-4">
        <h1 className="text-red-500 font-bold text-2xl">Pocket FM</h1>
      </header>
      <div className="w-96 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">Log in to continue</h2>
        <p className="text-gray-400 text-center mb-6">
          Login with your Pocket FM account to buy and manage your coins
        </p>
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent form submission
          className="flex flex-col gap-4"
        >
          {!showotpform && (
            <>
              <label className="text-gray-400" htmlFor="mobile">
                Mobile number
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="+91"
                value={mobile} // Two-way data binding
                onChange={(e) => setMobile(e.target.value)} // Update state when input changes
                className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="button"
                onClick={handleSendOTP} // Trigger the OTP sending function
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded mt-4"
              >
                Send OTP
              </button>
            </>
          )}

          {/* OTP Form (appears after OTP is sent) */}
          {showotpform && (
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    className="w-12 h-12 text-center border-2 border-white bg-gray-800 text-white rounded"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmitOtp} // Submit OTP
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mt-4 w-full"
              >
                Submit OTP
              </button>
              <button
                type="button"
                onClick={handleResendOtp} // Resend OTP
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded mt-4 w-full"
              >
                Resend OTP
              </button>
            </div>
          )}
        </form>
        <div className="text-center mt-4 text-green-500">
          <span>🔒 Privacy Protected</span>
        </div>
      </div>
    </div>
  );
}