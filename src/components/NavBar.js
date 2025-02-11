"use client";

import { useState,useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
  FaSignOutAlt,
  FaDownload,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [loading, setLoading] = useState(false); // Loading spinner state
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false); // Modal state
  const [path, setPath] = useState(null);
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth-status"); // Call auth-status API
        const data = await response.json();
        console.log("🔍 Auth Status Response:", data); // Debugging Log

        if (data.isAuthenticated) {
          setIsLoggedIn(true);
          // router.push("/"); // ✅ Redirect if logged in
        }
      } catch (error) {
        console.error("Error checking auth:", error);
      }
    }

    checkAuth();
  }, [isLoggedIn]);



  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const handleNavigation = (newPath) => {
    // Always set the target path and start loading
    setPath(newPath);
    setLoading(true); // Start loading effect
    setProgress(0); // Reset progress bar
  };


  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval); // Stop the interval when progress reaches 100
            
            // Delay the navigation to avoid rendering issues
            setTimeout(() => {
              router.push(path); // Safely navigate
              setLoading(false); // Reset loading state
            }, 0);
  
            return 100; // Ensure progress reaches 100
          }
          return prev + 10; // Increment progress
        });
      }, 100); // Adjust the interval duration (e.g., 100ms)
  
      // Cleanup the interval if the component unmounts or loading stops
      return () => clearInterval(interval);
    }
  }, [loading, path, router]);
  
  
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="text-2xl text-white">
          <FaBars />
        </button>

        {/* Brand Name with Logo */}
        <div className="flex items-center">
          <Image
            src="/Pocket-fm-seeklogo.svg"
            alt="PocketFM Logo"
            width={120}
            height={50}
          />
        </div>

        {/* Search Input */}
        <div className="relative flex-grow max-w-6xl lg:max-w-4xl">
          <FaSearch
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => handleNavigation("/search")}
          />
          <input
            type="text"
            placeholder="Search for Shows, Audiobooks..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => handleNavigation("/search")}
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://x.com/PocketFM_App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/company/pocket-fm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700" />
          </a>
          <a
            href="https://www.instagram.com/pocketfm_india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          </a>
          <a
            href="https://www.youtube.com/@PocketFM_India_Hindi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl cursor-pointer hover:text-red-600" />
          </a>
        </div>
      </nav>

      {/* "For You" and Links Section */}
      <div className="bg-black text-white px-6 py-2">
        <div className="flex items-center justify-between">
          {/* "For You" */}
          <a
            href="#"
            className="text-white text-sm font-medium underline underline-offset-8"
          >
            For You
          </a>

          {/* Links */}
          <div className="space-x-6">
            <a
              href="/about-us"
              className="text-gray-400 text-sm hover:text-white"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="text-gray-400 text-sm hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t-2 border-gray-800 mt-1" />
      </div>

      {/* Dimmed Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-60"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        {/* Sidebar Content */}
        <div className="relative h-full flex flex-col py-6 px-4 space-y-6">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-2xl text-white"
          >
            <FaTimes />
          </button>

          {/* Sidebar Items */}
          {/* <div
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => {
              handleNavigation("/"); // Start the loading effect and navigation
              toggleSidebar();       // Close the sidebar
            }}
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => handleNavigation("/store")}
          >
            <FaStore className="text-lg" />
            <span>Store</span>
          </div> */}
          {/* <div
            className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => handleNavigation("/logout")}
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </div> */}

{!isLoggedIn ? (
            <>
              {/* Login / Signup Button */}
              <div
                className="flex items-center justify-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
                onClick={() => router.push("/registration/login")}
              >
                <span className="bg-red-500 text-white px-4 py-2 rounded">Login / Sign Up</span>
              </div>
            </>
          ) : (
            <>
              {/* Home & Store (Visible Only If Logged In) */}
              <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push("/")}>
                <FaHome className="text-lg" />
                <span>Home</span>
              </div>
              <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={() => router.push("/store")}>
                <FaStore className="text-lg" />
                <span>Store</span>
              </div>
              {/* Logout */}
              <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={()=> router.push("/registration/logout")}>
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </div>
            </>
          )}

          {/* Install App with Modal */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => setShowModal(true)}
          >
            <FaDownload className="text-lg" />
            <span>Install App</span>
            <span className="text-sm bg-green-500 text-white px-2 py-1 rounded">
              Free episodes everyday
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#09080a] p-6 rounded-lg text-center">
            <h2 className="text-lg font-bold">Download the Pocket FM App</h2>
            <p className="text-sm text-gray-400">
              Entertainment Anytime Anywhere
            </p>
            <div className="mt-4">
              <img
                src="/qr-6865526_640.png" // Replace with actual QR code
                alt="QR Code"
                className="w-40 h-40 mx-auto"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Scan this code to download the app
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
  <div className="fixed top-0 left-0 w-full h-1 bg-white z-50">
    <div
      className="h-full bg-red-500"
      style={{
        width: `${progress}%`,
        transition: 'width 0.2s ease-in-out',
      }}
    />
  </div>
)}

    </div>
  );
};

export default NavBar;
