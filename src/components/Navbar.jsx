import React from "react";
import logo from "../assets/logo.svg"
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1440px]">
      <div className="mx-auto flex justify-between items-center py-4 text-dark font-semibold text-base mb-5">
        <Link to="/main">
          <img src={logo} className="hover:rotate-1" alt="Coffee House Logo" />
        </Link>
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
          <Link to="/menu" className="relative z-10 flex gap-2">
            Menu
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="#403F3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
          <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-dark transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div> 
        </div>
      </div>
    </nav>
  );
}
