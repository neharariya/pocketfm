// "use client";

// import { useState,useEffect } from "react";

// export default function Logout() {
//   const [isLoggingOut, setIsLoggingOut] = useState(false); // State to track logging out status
//     const [loading, setLoading] = useState(false); // Loading spinner state
//     const [progress, setProgress] = useState(0);
//     // Check if the user is logged in when the component mounts

//     useEffect(() => {
//       const token = localStorage.getItem("authToken"); // Get the token from localStorage
//       if (token) {
//         setIsLoggedIn(true); // User is logged in
//       } else {
//         setIsLoggedIn(false); // User is not logged in
//       }
//     }, []);
  

//   const handleLogout = async () => {
//     setIsLoggingOut(true); // Set the state to true to show the loading spinner and text

//     try {

//       setLoading(true); // Start loading effect
//       setProgress(0);

//       useEffect(() => {
//         if (loading) {
//           const interval = setInterval(() => {
//             setProgress((prev) => {
//               if (prev >= 100) {
//                 clearInterval(interval);
//                 localStorage.removeItem("authToken"); // Stop the interval when progress reaches 100
                
//                 // Delay the navigation to avoid rendering issues
//                 setTimeout(() => {
//                   router.push("/"); // Safely navigate
//                   setLoading(false); // Reset loading state
//                 }, 0);
      
//                 return 100; // Ensure progress reaches 100
//               }
//               return prev + 10; // Increment progress
//             });
//           }, 100); // Adjust the interval duration (e.g., 100ms)
      
//           // Cleanup the interval if the component unmounts or loading stops
//           return () => clearInterval(interval);
//         }
//       }, [loading,router]);
  
//       // Clear the stored token or password (e.g., from localStorage or sessionStorage)
//        // Replace with the appropriate storage key for your app

//       // Optionally, make an API call to the backend to invalidate the session
//       // await fetch('/api/logout', { method: 'POST' });

//       // After clearing the token, redirect to the login page
//       router.push("/"); // Redirect to the login page
//     } catch (error) {
//       console.error("Error logging out:", error);
//       // Handle any error that may occur
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
//       {/* Dim the background */}
//       <div className={`absolute inset-0 bg-black opacity-50 ${isLoggingOut ? "" : "hidden"}`}></div>

//       <div className="z-10 flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-bold mb-4">Logging out...</h2>
//             {handleLogout}
//             className="text-white font-bold py-2 px-4"
//       </div>
//       {loading && (
//   <div className="fixed top-0 left-0 w-full h-1 bg-white z-50">
//     <div
//       className="h-full bg-red-500"
//       style={{
//         width: `${progress}%`,
//         transition: 'width 0.2s ease-in-out',
//       }}
//     />
//   </div>
// )}
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Logout() {
//   const [isLoggingOut, setIsLoggingOut] = useState(false); 
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Define the missing state
//   const router = useRouter(); // ✅ Initialize router

//   // ✅ Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   // ✅ Corrected `handleLogout` function
//   const handleLogout = async () => {
//     setIsLoggingOut(true);
//     setLoading(true);
//     setProgress(0);

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           localStorage.removeItem("authToken"); // ✅ Clear the auth token
          
//           setTimeout(() => {
//             router.push("/"); // ✅ Redirect after logout
//             setLoading(false);
//           }, 500);

//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 100);

//     // ✅ Cleanup interval when component unmounts
//     return () => clearInterval(interval);
//   };

//   // ✅ Automatically log out when the page is opened
//   useEffect(() => {
//     handleLogout();
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
//       {/* Dim the background */}
//       {isLoggingOut && (
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//       )}

//       <div className="z-10 flex flex-col items-center justify-center">
//         <h2 className="text-2xl font-bold mb-4">Logging out...</h2>
//       </div>

//       {/* ✅ Progress Bar Animation */}
//       {loading && (
//         <div className="fixed top-0 left-0 w-full h-1 bg-white z-50">
//           <div
//             className="h-full bg-red-500"
//             style={{
//               width: `${progress}%`,
//               transition: "width 0.2s ease-in-out",
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function logoutUser() {
      try {
        const response = await fetch("/api/logout", { method: "POST" });

        if (response.ok) {
          console.log("✅ Successfully logged out");

          // ✅ Redirect after a short delay
          setTimeout(() => {
            router.push("/"); // Redirect to home page
          }, 500);
        }
      } catch (error) {
        console.error("❌ Logout failed:", error);
      }
    }

    logoutUser();

    // 🔄 Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Logging out...</h2>
      </div>

      {/* ✅ Progress Bar */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-white z-50">
          <div
            className="h-full bg-red-500"
            style={{
              width: `${progress}%`,
              transition: "width 0.2s ease-in-out",
            }}
          />
        </div>
      )}
    </div>
  );
}
