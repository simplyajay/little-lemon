import React from "react";
import { useState, useEffect, useRef } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const CustomSlider = ({ children, cardsPerSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalChildren = React.Children.count(children);
  const totalSlides = Math.ceil(totalChildren / cardsPerSlide);
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % totalSlides;
      scrollToSlide(newSlide);
      return newSlide;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + totalSlides) % totalSlides;
      scrollToSlide(newSlide);
      return newSlide;
    });
  };

  const scrollToSlide = (slideIndex) => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.children[0].offsetWidth;
      const newScrollPosition = itemWidth * slideIndex * cardsPerSlide;
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex items-center px-2">
          <button
            className="flex items-center justify-center max-h-[4rem] max-w-[4rem] hover:bg-gray-200 rounded-full text-4xl"
            onClick={handleNextSlide}
          >
            <MdNavigateBefore />
          </button>
        </div>

        <div
          className="slider-card-container flex flex-1 max-w-full justify-evenly gap-1 overflow-x-auto"
          ref={sliderRef}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className=" flex flex-shrink-0 justify-center w-full md:w-1/3"
            >
              {child}
            </div>
          ))}
        </div>

        <div className="flex items-center px-2">
          <button
            className="flex items-center justify-center max-h-[4rem] max-w-[4rem] hover:bg-gray-200 rounded-full text-4xl"
            onClick={handlePrevSlide}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomSlider;
