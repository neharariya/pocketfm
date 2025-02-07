"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import showsData from "../../data"; // Import the data file

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [topSearches, setTopSearches] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const searchParams = useSearchParams();

  // Fetch the query from the URL when the page loads
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      handleSearch(q);
    }
  }, [searchParams]);

  // Set top searches based on most plays
  useEffect(() => {
    const sortedShows = [...showsData].sort((a, b) => b.plays - a.plays);
    setTopSearches(sortedShows.slice(0, 4)); // Top 4 most played shows
  }, []);

  // Handle search logic
  const handleSearch = (searchTerm) => {
    setLoading(true); // Set loading to true
    if (!searchTerm) {
      setSearchResults([]);
      setLoading(false); // Stop loading if the search is empty
      return;
    }

    setTimeout(() => {
      const filteredResults = showsData.filter((show) =>
        show.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setLoading(false); // Stop loading after search
    }, 1000); // Simulate network delay
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div>
        {/* Search Bar */}
        <div className="w-full h-11 mt-0 relative">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder="Search for shows, podcasts, or more..."
            className="w-full pl-16 pr-4 py-2 h-12 mt-0 rounded bg-[#18181a] text-sm text-white"
          />
          <FaTimes
            className="absolute top-1/2 right-10 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => {
              setQuery("");
              setSearchResults([]); // Clear search results
            }}
          />
        </div>

        {/* Display Loading */}
{loading && (
  <div className="flex justify-center items-center mt-4">
    <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}


        {/* Top Searches or Search Results */}
        {!loading && (
          <div className="mb-6 mt-6 ml-10 mr-10 bg-gray-950">
            <h2 className="text-xl font-semibold mb-2">
              {query ? `Results for "${query}"` : "Top Searches"}
            </h2>
            <div>
              {(query ? searchResults : topSearches).map((show) => (
                <div
                  key={show.id}
                  className="flex flex-row items-center p-4 border-b-[1px] border-solid border-zinc-700"
                >
                  <img
                    src={show.image}
                    alt={show.title}
                    className="mr-6 w-12 h-25 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-sm font-medium">{show.title}</h3>
                </div>
              ))}
            </div>
            {/* No results found */}
            {query && searchResults.length === 0 && (
              <p className="text-gray-400 mt-4">
                No results found for "{query}". Try searching for something else.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
