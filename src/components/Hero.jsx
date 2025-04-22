import React from "react";
import video from "../assets/video.mp4"
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center text-left mb-24">
        <video autoPlay loop muted playsInline className="rounded-[40px] relative">
            <source src={video} />
        </video>
        <div className="absolute flex flex-col max-w-[530px] ml-24 text-background">
            <h1 className="font-semibold italic text-7xl">
                <span className="text-accent">Enjoy</span> premium coffee at our charming cafe
            </h1>
            <p className="my-10 text-background font-normal">
                With its inviting atmosphere and delicious coffee options, 
                the Coffee House Resource is a popular destination for coffee lovers and 
                those seeking a warm and inviting space to enjoy their favorite beverage.
            </p>

            <div className="relative flex items-center group bg-background text-dark text-base font-bold rounded-full py-5 px-20 w-[200px]">
                <Link to="/menu" className="relative z-10 flex gap-2 items-center">
                    Menu
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-out"
                    >
                        <path d="M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z" stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675" stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5" stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663" stroke="#403F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  );
}
