// "use client";

// import { useRouter, useParams, notFound } from "next/navigation";
// import { useState } from "react";
// import showsData from "../../../data";
// import Footer from "../../../components/footer";
// import { FaArrowLeft } from "react-icons/fa";

// let audioInstance = null; // Global variable to hold the audio instance

// export default function ShowDetails() {
//   const { id } = useParams();
//   const router = useRouter();

//   const show = showsData.find((item) => item.id === parseInt(id, 10));
//   if (!show) {
//     notFound();
//     return null;
//   }

//   const [activeTab, setActiveTab] = useState("episodes");
//   const [currentEpisode, setCurrentEpisode] = useState(null);

//   // Function to play audio
//   const playAudio = (episode) => {
//     // Stop any existing audio before playing a new one
//     if (audioInstance) {
//       audioInstance.pause();
//       audioInstance.currentTime = 0; // Reset the audio
//     }

//     audioInstance = new Audio(episode.audioUrl);

//     const playPromise = audioInstance.play();

//     if (playPromise !== undefined) {
//       playPromise
//         .then(() => {
//           console.log("Audio is playing successfully");
//           setCurrentEpisode(episode); // Update the left section to show current episode
//         })
//         .catch((error) => {
//           console.warn("Error playing audio:", error);
//         });
//     }
//   };

//   // Tab Navigation Buttons
//   const renderTabButton = (tab, label) => (
//     <button
//       onClick={() => setActiveTab(tab)}
//       className={`text-lg font-semibold ${
//         activeTab === tab
//           ? "text-red-600 border-b-2 border-red-600"
//           : "text-gray-400"
//       }`}
//     >
//       {label}
//     </button>
//   );

//   // Episodes Tab Content
//   const renderEpisodes = () => (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-semibold mb-6">Episodes</h2>
//       {show.episodes.map((episode, index) => (
//         <div
//           key={index}
//           className="rounded-lg p-4 flex items-start hover:bg-gray-700 transition-colors"
//         >
//           <div className="bg-red-600 text-white font-bold text-xl h-12 w-12 flex items-center justify-center rounded-lg mr-4">
//             {index + 1}
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold">{episode.title}</h3>
//             <p className="text-gray-400 text-sm">{episode.duration}</p>
//           </div>
//           <button
//             onClick={() => playAudio(episode)}
//             className="ml-4 bg-red-600 px-4 py-2 rounded text-white"
//           >
//             Play
//           </button>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* Header Section */}
//       <div className="flex items-center p-4 bg-[#18191a]">
//         <button
//           onClick={() => router.back()}
//           className="mr-4 text-gray-400 hover:text-gray-200 transition-colors"
//         >
//           <FaArrowLeft size={20} />
//         </button>
//         <h1 className="text-xl font-bold">{show.title}</h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col md:flex-row p-8 space-y-6 md:space-y-0 md:space-x-6">
//         {/* Left: Current Playing Episode */}
//         <div className="flex-1">
//           <img
//             src={show.image}
//             alt={show.title}
//             className="md:w-1/3 md:h-auto rounded-lg mb-6"
//           />
//           <h1 className="text-xl mb-4">{show.title}</h1>

//           {/* Currently Playing Episode */}
//           {currentEpisode ? (
//             <>
//               <h3 className="text-lg font-semibold mb-2">Now Playing</h3>
//               <p className="text-red-600 text-xl font-bold">
//                 {currentEpisode.title}
//               </p>
//               <p className="text-gray-400">{currentEpisode.duration}</p>
//             </>
//           ) : (
//             <p className="text-gray-500">Select an episode to play</p>
//           )}
//         </div>

//         {/* Right: Tabs and Content */}
//         <div className="flex-1">
//           {/* Tab Navigation */}
//           <div className="flex space-x-4 pb-2 mb-4">
//             {renderTabButton("episodes", "Episodes")}
//           </div>

//           {/* Tab Content */}
//           <div>{activeTab === "episodes" && renderEpisodes()}</div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }


import React from "react";

function App() {
  const episodes = [
    { title: "Nakli Dulhan", duration: "16:53" },
    { title: "You Are Mine", duration: "12:56" },
    { title: "Kaun Hai Mr. Pranav Malhotra", duration: "14:22" },
    { title: "Khushi Wala Din", duration: "15:51" },
    { title: "Panga", duration: "14:02" },
    { title: "Kapoor vs Kapoor", duration: "15:03" },
  ];

  const reviews = [
    "Amazing storyline! I couldn't stop listening.",
    "The characters feel so real. Highly recommend!",
    "A must-listen for romance lovers!",
  ];

  const moreLikeThis = [
    "The Untold Secrets",
    "Forever Yours",
    "Love Unfolds",
    "Heartstrings",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-3">
          {/* Header Section */}
          <header className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center">
            <img
              src="/poster.png"
              alt="You Are Mine Poster"
              className="w-32 h-32 rounded-md"
            />
            <div className="ml-6">
              <h1 className="text-2xl font-bold text-gray-800">You Are Mine</h1>
              <p className="text-gray-600">⭐ 4.6 | 32.5M Plays | 67 hrs 41 mins</p>
              <p className="mt-2 text-gray-700">
                This story revolves around Sameera Kapoor, who was posing as a
                fake bride, wearing her boss Tanisha's wedding dress but things
                took a turn for the worse...
              </p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                Play EP - 1
              </button>
            </div>
          </header>

          {/* Episodes Section */}
          {/* <main>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Episodes
            </h2> */}
            {/* <ul className="space-y-4">
              {episodes.map((episode, index) => (
                <li
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="text-gray-800 font-medium">
                    EP {index + 1} - {episode.title}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {episode.duration}
                  </span>
                </li>
              ))}
            </ul>
          </main> */}
        </div>

        {/* Right Sidebar */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="mb-6">
            {/* Tab Headers */}
            <div className="flex space-x-4 border-b pb-2">
              <button className="text-blue-500 font-medium border-b-2 border-blue-500">
                Episodes
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-500">
                Reviews
              </button>
              <button className="text-gray-600 font-medium hover:text-blue-500">
                More Like This
              </button>
            </div>
          </div>

          {/* Episodes Tab */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Episodes</h3>
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="text-gray-800 font-medium">
                  EP {index + 1} - {episode.title}
                </span>
                <span className="text-gray-600 text-sm">{episode.duration}</span>
              </div>
            ))}
          </div>

          {/* Reviews Tab */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Reviews</h3>
            <ul className="space-y-2">
              {reviews.map((review, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-sm border-b pb-2"
                >
                  {review}
                </li>
              ))}
            </ul>
          </div>

          {/* More Like This Tab */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              More Like This
            </h3>
            <ul className="space-y-2">
              {moreLikeThis.map((title, index) => (
                <li
                  key={index}
                  className="text-blue-500 text-sm hover:underline cursor-pointer"
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
