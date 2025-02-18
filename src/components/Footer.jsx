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
                    <a href="#" className='flex p-4 rounded-full border border-background text-footer items-center hover:bg-background c'>
                        <svg width="24" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 1.01006C23 1.01006 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 23 1.01006 23 1.01006Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="#" className='flex p-4 rounded-full border border-background text-footer items-center hover:bg-background hover:transition delay-150 duration-300 ease-in'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#E1D4C9" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-background font-semibold text-2xl mb-10'>Contact us</h3>
                <ul className='space-y-4     font-semibold text-base text-background'>
                    <li className='group hover:underline decoration-3 underline-offset-4'>
                        <a href="https://www.google.com/maps/search/8558+green+road+LA/@34.0594521,-118.4052184,11.28z?entry=ttu" target='_blank' className='flex gap-3 items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="#E1D4C9" strokeWidth="1.5"/>
                                <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            8558 Green Rd., LA
                        </a>
                    </li>
                    <li className='flex gap-3 items-center group hover:underline decoration-3 underline-offset-4'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_128681_1731)">
                                <path d="M18.1181 14.702L13.9998 15.5C11.2181 14.1038 9.49985 12.5 8.49985 10L9.2698 5.8699L7.81436 2L4.06344 2C2.9359 2 2.04799 2.93178 2.21639 4.04668C2.63679 6.83 3.87638 11.8765 7.49985 15.5C11.305 19.3052 16.7856 20.9564 19.8019 21.6127C20.9666 21.8662 21.9998 20.9575 21.9998 19.7655L21.9998 16.1812L18.1181 14.702Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_128681_1731">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>+1 (603) 555-0123
                    </li>
                    <li className='flex gap-3 items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_217_1736)">
                                <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_217_1736">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>Mon-Sat: 9:00 AM – 23:00 PM
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
