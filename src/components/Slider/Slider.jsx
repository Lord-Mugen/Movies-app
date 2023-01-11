import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Slider = () => {
  const leftIcon = (
    <Icon icon="material-symbols:chevron-left-rounded" width="20" height="20" />
  );
  const rightIcon = (
    <Icon
      icon="material-symbols:chevron-right-rounded"
      width="20"
      height="20"
    />
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  /* Dejar un maximo de 5 imagenes en el slider */
  const images = [
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
  ];

  return (
    <div className="c-slider">
      <div className="c-slider__images-container">
        {images.map((image, index) => (
          <img
            className="c-slider__image"
            src={image}
            key={index}
            style={{
              transform: `translateX(${index - currentSlide * 99.5}%)`,
            }}
          />
        ))}
      </div>
      <button
        className="c-slider__btn c-slider__btn-left"
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + images.length) % images.length)
        }
      >
        {leftIcon}
      </button>
      <button
        className="c-slider__btn c-slider__btn-right"
        onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
      >
        {rightIcon}
      </button>
    </div>
  );
};

export default Slider;
