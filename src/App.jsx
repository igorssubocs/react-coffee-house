// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Favorite from "./components/Favorite";
// import About from "./components/About";
// import MobileApp from "./components/MobileApp";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="flex justify-center min-h-screen bg-background font-sans">
//       <div className="w-full max-w-[1440px] px-10">
//         <Navbar />
//         <Hero />
//         <Favorite />
//         <About />
//         <MobileApp />
//         <Footer />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import MenuPage from "./components/pages/MenuPage";

export default function App() {
  return (
    <div className="flex justify-center min-h-screen bg-background font-sans">
      <div className="w-full max-w-[1440px] px-10">
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </div>
  );
}
