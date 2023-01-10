import React from "react";
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

  return (
    <div className="c-slider">
      <button className="c-slider__btn c-slider__left">{leftIcon}</button>
      <div className="c-slider__images-container">
        <div>
          <img src="https://picsum.photos/280/200" alt="imgSlider" />
        </div>
        <div>
          <img src="https://picsum.photos/280/200" alt="imgSlider" />
        </div>
        <div>
          <img src="https://picsum.photos/280/200" alt="imgSlider" />
        </div>
        <div>
          <img src="https://picsum.photos/280/200" alt="imgSlider" />
        </div>
        <div>
          <img src="https://picsum.photos/280/200" alt="imgSlider" />
        </div>
      </div>
      <button className="c-slider__btn c-slider__right">{rightIcon}</button>
    </div>
  );
};

export default Slider;
