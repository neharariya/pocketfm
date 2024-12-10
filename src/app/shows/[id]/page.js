import React from 'react'

function page() {
  return (
    <div>Hello World</div>
  )
}

export default page


// // app/shows/[id]/page.js
// import { notFound } from "next/navigation";
// import showsData from "../../../data"; // Adjust the path to your data file

// export default function ShowDetails({ params }) {
//   const { id } = params; // Extract the dynamic route parameter `id`

//   // Find the specific show based on the ID
//   const show = showsData.find((item) => item.id === parseInt(id, 10));

//   // If the show is not found, return a 404 page
//   if (!show) {
//     notFound();
//     return null;
//   }

//   // Render the show details
//   return (
//     <div className="text-white p-8">
//       <div className="flex flex-col md:flex-row">
//         <img
//           src={show.image}
//           alt={show.title}
//           className="w-full md:w-1/3 h-auto rounded-lg"
//         />
//         <div className="ml-0 md:ml-8 mt-4 md:mt-0">
//           <h1 className="text-3xl font-bold mb-4">{show.title}</h1>
//           <p className="text-sm text-gray-400 mb-2">
//             Release Year: {show.releaseYear}
//           </p>
//           <p className="text-gray-300 mb-4">{show.description}</p>
//           <h2 className="text-xl font-semibold mt-6 mb-2">Cast:</h2>
//           <ul className="list-disc list-inside text-gray-300">
//             {show.cast.map((member, index) => (
//               <li key={index}>{member}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
