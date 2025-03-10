import React, {useState} from 'react';
import Slider from "react-slick";
import slider1 from "../assets/slides/slider1.png";
import slider2 from "../assets/slides/slider2.png";
import slider3 from "../assets/slides/slider3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    img: slider1,
    name: "S’mores Frappuccino",
    desc: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50"
  },
  {
    img: slider2,
    name: "Caramel Macchiato",
    desc: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00"
  },
  {
    img: slider3,
    name: "Ice coffee",
    desc: "A popular summer drink that tones and invigorates. Prepared from coffee, milk, and ice.",
    price: "$4.50"
  }
];

function CustomArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${direction === "next" ? "right-4" : "left-4"} translate-y-1/2 px-6 py-5 border border-dark rounded-full hover:bg-dark hover:text-background hover:transition-all delay-150 duration-300 ease-in`}
      style={{ zIndex: 10 }}
    >
      {direction === "next" ? "→" : "←"}
    </button>
  );
}

export default function Favorite() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    beforeChange: (_, next) => setActiveIndex(next),
    appendDots: dots => (
      <div>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`w-10 h-1 rounded-full ${
          activeIndex === i ? "bg-dark animate-progress" : "bg-[#C1B6AD]"
        } transition-all cursor-pointer`}
      />
    )
  };

  return (
    <div className="flex flex-col py-5 justify-center" id='favorite-coffee-section'>
      <div className="mb-1">
        <h2 className="text-dark font-semibold italic text-[60px] text-center">
          Choose your <span className="text-accent">favorite</span> coffee
        </h2>
      </div>

      <div className="relative w-full text-dark">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
              <img 
                src={slide.img} 
                alt={slide.name} 
                className="mx-auto mb-4 rounded-lg max-w-full h-[300px] sm:h-[380px] lg:h-[480px] object-contain" 
              />
              <h3 className="text-[24px] font-semibold mb-4">{slide.name}</h3>
              <p className="font-normal text-[16px] text-center max-w-[480px] mx-auto">{slide.desc}</p>
              <p className="text-[24px] font-semibold mt-4">{slide.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
