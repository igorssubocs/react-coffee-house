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
            <li>
                <a href="#" className="hover:underline decoration-3 underline-offset-4">Favorite coffee</a>
            </li>
            <li>
                <a href="#" className="hover:underline decoration-3 underline-offset-4">About us</a>
            </li>
            <li>
                <a href="#" className="hover:underline decoration-3 underline-offset-4">Mobile app</a>
            </li>
            <li>
                <a href="#" className="hover:underline decoration-3 underline-offset-4">Contact us</a>
            </li>
        </ul>
        <div className="flex space-x-1 items-center hover:underline decoration-3 underline-offset-4">
            <a href="#">Menu</a>
        </div>
      </div>
    </nav>
  );
}
