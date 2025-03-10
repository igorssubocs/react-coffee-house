import React from "react";
import video from "../assets/video.mp4"

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
            <a href="#" className="py-5 px-20 bg-background text-dark text-base font-bold rounded-full max-w-[200px]">Menu</a>
        </div>
    </div>
  );
}
