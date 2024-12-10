"use client";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/footer";
import Link from "next/link";


export default function Home() {
  
  return (
    <div className="bg-black text-white">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
