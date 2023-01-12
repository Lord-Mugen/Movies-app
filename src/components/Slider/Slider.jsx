import React, { useState } from "react";
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
  //state para la posición del slider
  const [position, setPosition] = useState(0);
  //state para la posición de cada div
  const [currentSlide, setCurrentSlide] = useState(0);
  // array de imagenes
  const images = [
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
    "https://picsum.photos/800/350",
  ];

  //crea un estilo para cada imagen
  const imageStyles = images.map((image) => ({
    backgroundImage: `url(${image})`,
  }));

  //función para la animación
  const animate = (direction) => {
    //Se guarda la posición previa
    const prevPos = currentSlide;
    //se asigna la posición siguiente
    setCurrentSlide((currentSlide + direction + images.length) % images.length);
    //si es izquierda se aumenta la posición actual
    if (direction === -1) {
      setPosition(position - 1);
    }
    //si es derecha se disminuye
    else {
      setPosition(position + 1);
    }
    //se asigna un timeout para la animación suave
    setTimeout(() => {
      //se resetea la posición previa
      setPosition((prevPos + direction + images.length) % images.length);
    }, 500);
  };

  return (
    <div className="c-slider">
      {images.map((image, index) => (
        <div
          key={image}
          className="c-slider__images-container"
          style={{
            ...imageStyles[index],
            transform: `translateX(${(index - position) * 100}%)`,
          }}
        ></div>
      ))}
      <button
        className="c-slider__btn c-slider__btn-left"
        onClick={() => animate(-1)}
      >
        {leftIcon}
      </button>
      <button
        className="c-slider__btn c-slider__btn-right"
        onClick={() => animate(1)}
      >
        {rightIcon}
      </button>
    </div>
  );
};

export default Slider;
