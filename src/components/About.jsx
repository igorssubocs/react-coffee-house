import React from 'react'
import about1 from "../assets/about/about1.jpg"
import about2 from "../assets/about/about2.jpg"
import about3 from "../assets/about/about3.jpg"
import about4 from "../assets/about/about4.jpg"

export default function About() {
  return (
    <div className='flex flex-col justify-center mt-24 mb-24' id='about-us-section'>
        <div className='text-6xl font-semibold text-dark'>
            <h2>
                Resource is <span className='italic text-accent'>the perfect and cozy place </span> 
                where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.
            </h2>
        </div>
        <div className="flex gap-10 mt-10">
            <div className="flex flex-col gap-10">
                <div className="w-[660px] h-[590px] overflow-hidden rounded-[20px]">
                    <img 
                        src={about1}
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-[600ms] ease-in-out hover:scale-105 hover:opacity-90"
                        alt=""
                    />
                </div>
                <div className="w-[660px] h-[430px] overflow-hidden rounded-[20px]">
                    <img 
                        src={about2}
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-[600ms] ease-in-out hover:scale-105 hover:opacity-90"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="w-[660px] h-[430px] overflow-hidden rounded-[20px]">
                    <img 
                        src={about3}
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-[600ms] ease-in-out hover:scale-105 hover:opacity-90"
                        alt=""
                    />
                </div>
                <div className="w-[660px] h-[590px] overflow-hidden rounded-[20px]">
                    <img 
                        src={about4}
                        className="w-full h-full object-cover rounded-[20px] transition-transform duration-[600ms] ease-in-out hover:scale-105 hover:opacity-90"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
  );
}
