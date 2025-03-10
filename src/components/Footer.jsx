import React from 'react';
import santaclaus from "../assets/img/footer/santaclaus.svg";
import christmastree from "../assets/img/footer/christmastree.svg";
import snake from "../assets/img/footer/snake.svg";
import facebook from "../assets/img/social/facebook.svg";
import telegram from "../assets/img/social/telegram.svg";
import X from "../assets/img/social/X.svg";
import instagram from "../assets/img/social/instagram.svg";

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="info-cards-container">
                <ul className="info-cards">
                    <li className="info-card">
                        <img src={santaclaus} alt="Santaclaus" className="info-card-image" />
                        <h2 className="info-card-title">+375 (29) 111-22-33</h2>
                        <h3 className="info-card-description">Call Us</h3>
                    </li>
                    <li className="info-card">
                        <img src={christmastree} alt="Christmas Tree" className="info-card-image" />
                        <h2 className="info-card-title">Magic forest</h2>
                        <h3 className="info-card-description">meet us</h3>
                    </li>
                    <li className="info-card">
                        <img src={snake} alt="Snake" className="info-card-image" />
                        <h2 className="info-card-title">gifts@magic.com</h2>
                        <h3 className="info-card-description">write us</h3>
                    </li>
                </ul>
            </div>
            <div className="info-container">
                <div className="socials">
                    <a href="#">
                        <img src={telegram} alt="Telegram" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src={X} alt="X" />
                    </a>
                </div>
                <p className='copyright'>&copy; Copyright 2025, All Rights Reserved</p>
                <span className='slogan'>Made in Rolling Scopes School</span>
            </div>
        </div>
    </footer>
  );
}
