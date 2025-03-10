import React from 'react';
import santa from '../assets/img/santa.jpg';

export default function About() {
  return (
    <section className="about">
        <div className="container">
            <div className="about-content">
                <span className="slogan">About</span>
                <h2 className="about-title">Unleash your inner superhero!</h2>
                <p className="about-description">This New Year marks the beginning of your journey to inner harmony and new strengths. 
                    We offer unique gifts that will help you improve your life.</p>
            </div>
            <div className="about-image">
                <img src={santa} width={628} height={528} alt="Santa" />
            </div>
        </div>
    </section>
  );
}
