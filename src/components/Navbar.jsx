import React from "react";
import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1440px]">
      <div className="mx-auto flex justify-between items-center py-4 text-dark font-semibold text-base mb-5">
        <a href="#">
          <img src={logo} className="" alt="Coffee House Logo" />
        </a>
        <ul className="flex space-x-10">
          {["Favorite coffee", "About us", "Mobile app", "Contact us"].map((item, index) => {
            const href =
              item === "Favorite coffee" ? "#favorite-coffee-section" :
              item === "About us" ? "#about-us-section" :
              item === "Contact us" ? "#footer" :
              item === "Mobile app" ? "#mobile-app-section" : "#";
            return (
              <li key={index} className="relative group">
                <a href={href} className="relative z-10">{item}</a>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-dark transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>  
              </li>
            );
          })}
        </ul>
        <div className="relative flex items-center group">
          <a href="#" className="relative z-10">Menu</a>
          <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-dark transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div> 
        </div>
      </div>
    </nav>
  );
}
