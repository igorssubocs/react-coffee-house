import React from 'react'
import image1 from "../assets/img/best-gifts/image1.png";
import image2 from "../assets/img/best-gifts/image2.png";
import image3 from "../assets/img/best-gifts/image3.png";
import image4 from "../assets/img/best-gifts/image4.png";

const gifts = [
  { image: image1, destiny: "For work", description: "Console.log Guru" },
  { image: image2, destiny: "For health", description: "Hydration Bot" },
  { image: image3, destiny: "For work", description: "Merge Master" },
  { image: image4, destiny: "For harmony", description: "Spontaneous Coding Philosopher" },
];

export default function Card() {
  return (
    <div className="card-container">
      {gifts.map((gift, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={gift.image} alt={gift.description} />
          </div>
          <div className="card-text">
            <h4 className="card-head">{gift.destiny}</h4>
            <h3>{gift.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

