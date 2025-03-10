import React from 'react'
import snowflake from "../assets/img/snowflake.svg";

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <a href="#" className='logo-link'>
                    <img src={snowflake} width={24} height={24} alt="Logo" />
                    <h4>The gifts</h4>
                </a>
            </div>
            <nav>
                <ul className="links">
                    <li className='link'>
                        <a href="#">Gifts</a>
                    </li>
                    <li className='link'>
                        <a href="#">About</a>
                    </li>
                    <li className='link'>
                        <a href="#">Best</a>
                    </li>
                    <li className='link'>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
