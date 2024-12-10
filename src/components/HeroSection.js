import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link"; // To create links for show navigation
import showsData from "../data"; // Adjust the path if needed

const HeroSection = () => {
  const scrollRef = useRef(null);

  // Scroll Function
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="text-white py-8 px-4">
      {/* Topics */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold underline underline-offset-4">
          New Arrivals
        </h2>
        <div className="space-x-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full hover:bg-gray-600"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full hover:bg-gray-600"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Shows */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
      >
        {showsData.map((show) => (
          <div key={show.id} className="space-x-4 overflow-x-auto scrollbar-hide hover:scale-95 transition-all transform duration-500">
            <Link href={`/shows/${show.id}`}>
              <img
                src={show.image}
                alt={show.title}
                className="rounded-t-lg mb-2 w-[300px] h-[220px] object-fill"
              />
            </Link>
            <div>
              <h3 className="text-center text-sm font-semibold">{show.title}</h3>
              <p className="text-xs text-center text-gray-400">
                {show.releaseYear}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
