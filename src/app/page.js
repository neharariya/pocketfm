"use client";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/footer"; // Make sure the casing is consistent with your file name

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar /> {/* Navigation bar with search functionality */}
      <div className="container mx-auto p-4">
        {/* <h1 className="text-3xl font-bold mb-4">Welcome to Pocket FM Clone</h1> */}
        {/* Removed SearchBar from here, as it will now be handled by the NavBar */}
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
