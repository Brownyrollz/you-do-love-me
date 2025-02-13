// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Home() {
//   const [noPosition, setNoPosition] = useState({ left: "80%", top: "50%" });
//   const [showAccepted, setShowAccepted] = useState(false);
//   const [showDenied, setShowDenied] = useState(false);

//   const handleMouseEnter = () => {
//     const newLeft = Math.random() * 200 + 100;
//     const newTop = Math.random() * 200 + 100;
//     setNoPosition({ left: `${newLeft}%`, top: `${newTop}%` });
//   };

//   const handleNoClick = () => setShowDenied(true);
//   const handleYesClick = () => {
//     setShowAccepted(true);
//     alert("I love you too!");
//   };

//   return (
//     <main className="relative flex flex-col items-center justify-center h-screen bg-pink-100 overflow-hidden">
//       <img src="/grass.gif" alt="grass background" className="absolute bottom-0 left-0 w-full" />
//       <motion.img
//         src="/bear-walk.gif"
//         alt="walking bear"
//         className="absolute bottom-0"
//         animate={{ x: [0, 1000] }}
//         transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//       />
//       {!showAccepted && !showDenied && (
//         <div className="text-center">
//           <h1 className="text-2xl font-bold mb-6">Do you love me?</h1>
//           <div className="flex gap-6 relative justify-center">
//             <motion.button
//               className="bg-red-400 text-white px-6 py-2 mr-5 rounded-lg text-lg shadow-md hover:bg-red-500 transition"
//               onClick={handleYesClick}
//             >Yes</motion.button>
//             <motion.button
//               className="bg-green-500 text-white px-6 ml-5 py-2 rounded-lg text-lg shadow-md absolute"
//               onMouseEnter={handleMouseEnter}
//               onClick={handleNoClick}
//               animate={{ left: noPosition.left, top: noPosition.top }}
//               transition={{ type: "spring", stiffness: 200, damping: 5 }}
//               style={{ transform: "translate(-50%, -50%)" }}
//             >No</motion.button>
//           </div>
//         </div>
//       )}
//       {showAccepted && (
//         <div className="text-center">
//           <img src="/accepted-image.jpg" alt="accepted" className="w-48 mx-auto" />
//           <p className="text-lg font-semibold mt-4 text-green-600">คุณตอบ Yes แล้ว! ❤️</p>
//         </div>
//       )}
//       {showDenied && (
//         <div className="text-center">
//           <img src="/denied-image.jpg" alt="denied" className="w-48 mx-auto" />
//           <p className="text-lg font-semibold mt-4 text-red-600">ทำไมต้องปฏิเสธล่ะ! 😢</p>
//         </div>
//       )}
//       <footer className="footer text-gray-600 py-4 absolute bottom-0 w-full text-center">
//       </footer>
//     </main>
//   );
// }

"use client";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Home() {
  const acceptedImages = [
    "/bear/accepted/1.gif",
    "/bear/accepted/2.gif",
    "/bear/accepted/3.gif",
    "/bear/accepted/4.gif"
  ];
  const deniedImages = [
    "/bear/denied/1.gif",
    "/bear/denied/2.gif",
    "/bear/denied/3.gif"
  ];
  const randomAcceptedImage = acceptedImages[Math.floor(Math.random() * acceptedImages.length)];
  const randomDeniedImage = deniedImages[Math.floor(Math.random() * deniedImages.length)];

  const [noPosition, setNoPosition] = useState({ left: "80%", top: "50%" });
  const [showAccepted, setShowAccepted] = useState(false);
  const [showDenied, setShowDenied] = useState(false);

  const handleMouseEnter = () => {
    const newLeft = Math.random() * 200 + 100;
    const newTop = Math.random() * 200 + 100;
    setNoPosition({ left: `${newLeft}%`, top: `${newTop}%` });
  };

  const handleNoClick = () => setShowDenied(true);
  const handleYesClick = () => {
    setShowAccepted(true);
  };
  console.log("Code Devaloper by Brownyrollz (BBamz Kittisak Udomsri)");
  console.log("Website Soure Code: https://github.com/Brownyrollz/you-do-love-me");
  return (
    <main className="relative flex flex-col items-center justify-center h-screen bg-pink-100 overflow-hidden">

  <div className="pink-grass">  
        <div className="flower flower-1" />
        <div className="flower flower-2" />
        <div className="flower flower-3" />
      </div>

      <motion.img
        src="/bear/bubududu.gif"
        alt="walking bear"
        className="absolute bottom-10 left-0 w-32"
        animate={{ x: [0, 2500] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      {!showAccepted && !showDenied && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">Do you love me?</h1>
          <img src="/bear/main.gif" alt="Do you love me"></img>
          <div className="flex gap-6 relative justify-center mr-10 mt-5">
            <motion.button
              className="bg-red-400 text-white px-6 py-2 rounded-lg text-lg mr-12 shadow-md  hover:bg-red-500 transition"
              onClick={handleYesClick}
            >
              Yes
            </motion.button>
            <motion.button
              className="bg-red-400 text-white px-6 py-2 rounded-lg text-lg ml-2 shadow-md absolute"
              onMouseEnter={handleMouseEnter}
              onClick={handleNoClick}
              animate={{ left: noPosition.left, top: noPosition.top }}
              transition={{ type: "spring", stiffness: 200, damping: 5 }}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              No
            </motion.button>
          </div>
        </div>
      )}
      {showAccepted && (
        <div className="text-center">
          <img src={randomAcceptedImage} alt="accepted" className="w-48 mx-auto" />
          <p className="text-lg font-semibold mt-4 text-green-600">I love you too! ❤️</p>
        </div>
      )}
      {showDenied && (
        <div className="text-center">
          <img src={randomDeniedImage} alt="denied" className="w-48 mx-auto" />
          <p className="text-lg font-semibold mt-4 text-red-600">You Dont love me! 😢</p>
        </div>
      )}
    </main>
  );
}
