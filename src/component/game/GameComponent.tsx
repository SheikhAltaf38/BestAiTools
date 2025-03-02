"use client";
import { useState } from "react";
import Image from "next/image";

export default function GameComponent() {
  const [clicks, setClicks] = useState(0);
  const maxClicks = 5;

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks(clicks + 1);
    }
  };

  // Determine the theme based on clicks
  const getTheme = () => {
    if (clicks >= maxClicks) {
      return "celebratory"; // Queen is saved
    } else if (clicks >= 2) {
      return "afterTwoClicks"; // After 2 clicks
    } else {
      return "initial"; // Initial theme
    }
  };

  // Calculate responsive translation and rope length
  const calculateTransform = () => {
    const screenWidth = window.innerWidth;
    const baseDistance = screenWidth < 768 ? 100 : 200; // Adjust base distance for small screens
    return `translateX(-${(clicks / maxClicks) * baseDistance}px) translateY(${
      clicks >= maxClicks ? "-50px" : "0"
    })`;
  };

  const calculateRopeLength = () => {
    return clicks < maxClicks ? "120px" : "60px";
  };

  // Theme styles
  const themes = {
    initial: "bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900",
    afterTwoClicks: "bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900",
    celebratory: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600",
  };

  return (
    <div
      className={`w-full flex items-center justify-center p-4 animate-gradient-background ${
        themes[getTheme()]
      }`}
    >
      {/* Game Container */}
      <div className="flex flex-col md:flex-row items-center justify-center p-3 pb-1 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl w-full max-w-3xl mx-auto relative overflow-hidden border border-white/20">
        {/* Moogli on the Left */}
        <div className="relative flex flex-col items-center w-24 mb-4 md:mb-0">
          <Image
            src="/game/moogli.png"
            alt="Moogli character"
            width={80}
            height={80}
            priority
          />
          <div className="w-1  h-10 "></div> {/* Rope */}
        </div>

        {/* Game Area */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Rope from Moogli to Queen */}
          <div
            className="absolute bg-brown-700 w-1 transition-all duration-500 ease-in-out"
            style={{
              height: calculateRopeLength(), // Rope shortens when Queen reaches Moogli
              left: `calc(50% - ${(clicks / maxClicks) * 100}px)`,
              top: "50%",
            }}
            aria-hidden="true"
          ></div>

          {/* Queen Moving from Right to Left and Up when Saved */}
          <div
            className="relative transition-all duration-500 ease-in-out"
            style={{
              transform: calculateTransform(),
            }}
          >
            <Image
              src="/game/queen.jpg"
              alt="Queen character"
              width={60}
              height={60}
              priority
            />
          </div>

          {/* Zombie on the Right */}
          <div className="relative w-24 flex flex-col items-center mt-4 md:mt-0">
            <Image
              src="/game/zombie.jpg"
              alt="Zombie character"
              width={80}
              height={80}
              priority
            />
          </div>

          {/* Click Button */}
          <button
            onClick={handleClick}
            className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={clicks >= maxClicks}
            aria-label={clicks < maxClicks ? "Save the Queen" : "Queen is Safe"}
          >
            {clicks < maxClicks ? "Save the Queen!" : "Queen is Safe!"}
          </button>
        </div>
      </div>
    </div>
  );
}
// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function GameComponent() {
//   const [clicks, setClicks] = useState(0);
//   const maxClicks = 5;

//   const handleClick = () => {
//     if (clicks < maxClicks) {
//       setClicks(clicks + 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
//       {/* Game Area */}
//       <div className="relative w-64 h-96 flex flex-col items-center">
//         {/* Moogli at the Top */}
//         <div className="absolute top-0 flex flex-col items-center">
//           <Image src="/game/moogli.png" alt="Moogli" width={80} height={80} />
//           <div className="w-1 h-64 bg-brown-700"></div> {/* Rope */}
//         </div>

//         {/* Queen Moving Up Based on Clicks */}
//         <div
//           className="absolute transition-all duration-300"
//           style={{ top: `${80 + (maxClicks - clicks) * 50}px` }}
//         >
//           <Image src="/game/queen.jpg" alt="Queen" width={60} height={60} />
//         </div>

//         {/* Fire at the Bottom */}
//         <div className="absolute bottom-0">
//           <Image src="/game/fire.png" alt="Fire" width={80} height={80} />
//         </div>
//       </div>

//       {/* Click Button */}
//       <button
//         onClick={handleClick}
//         className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
//         disabled={clicks >= maxClicks}
//       >
//         {clicks < maxClicks ? "Pull Queen Up" : "Queen is Saved!"}
//       </button>
//     </div>
//   );
// }
