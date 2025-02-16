import React from 'react'
import pinMap from "../assets/footer/pinMan.svg";
import phone from "../assets/footer/phone.svg";
import clock from "../assets/footer/clock.svg";

export default function Footer() {
  return (
    <div className='flex flex-col justify-center mt-24 mb-10'>
        <div className='flex justify-start gap-[100px] p-[100px] bg-footer items-center rounded-[40px]'>
            <div className='max-w-[530px] flex flex-col gap-10'>
                <h2 className='font-semibold text-6xl text-background'>
                    Sip, Savor, Smile. <span className='text-accent italic'>It’s coffee time!</span>
                </h2>
                <div className='flex gap-3'>
                    <a href="#" className='flex p-4 rounded-full border border-background text-footer items-center hover:bg-background hover:footer'>
                        <svg width="24" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 1.01006C23 1.01006 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 23 1.01006 23 1.01006Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="#" className='flex p-4 rounded-full border border-background text-footer items-center hover:bg-background hover:footer'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-background font-semibold text-2xl mb-10'>Contact us</h3>
                <div className='space-y-4'>
                    <a href="#" className='flex gap-2 font-semibold text-base text-background'>
                        <img src={pinMap} alt="" />8558 Green Rd.,  LA
                    </a>
                    <a href="#" className='flex gap-2 font-semibold text-base text-background'>
                        <img src={phone} alt="" />+1 (603) 555-0123
                    </a>
                    <a href="#" className='flex gap-2 font-semibold text-base text-background'>
                        <img src={clock} alt="" />Mon-Sat: 9:00 AM – 23:00 PM
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
