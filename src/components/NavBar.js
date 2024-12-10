import { useState } from "react";
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
import Image from "next/image"; // Use for importing logo image in Next.js
import logo from "../assests/Pocket-fm-seeklogo.svg"; // Replace with your actual logo file path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
          {/* Logo */}
          <Image src={logo} alt="PocketFM Logo" width={120} height={50} />
        </div>

        {/* Search Input */}
        <div className="relative flex-grow max-w-6xl lg:max-w-4xl">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for Shows, Audiobooks..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-500" />
          <FaLinkedin className="text-xl cursor-pointer hover:text-blue-700" />
          <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          <FaYoutube className="text-xl cursor-pointer hover:text-red-600" />
        </div>
      </nav>

      <div className="bg-black text-white px-6 py-2">
  {/* "For You" and Links Section */}
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


      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "250px" }}
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
          <div className="flex items-center space-x-4">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaStore className="text-lg" />
            <span>My Store</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaDownload className="text-lg" />
            <span>Install App</span>
            <span className="text-sm bg-green-500 text-white px-2 py-1 rounded">
              Free episodes everyday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
