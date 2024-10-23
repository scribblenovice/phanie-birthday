import React, { useState, useEffect } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
];

const CarouselItem = ({ image, position }) => {
  // Calculate the appearance based on the position (distance from the center)
  const zIndex = 5 - Math.abs(position);
  const scale = 1 - Math.abs(position) * 0.2;
  const opacity = 1 - Math.abs(position) * 0.12;
  const rotateY = position * 30; // Adjust the angle for the waterwheel effect
  const translateX = position * 100; // Space between items

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
        zIndex,
        opacity,
        transition: "transform 0.5s ease",
      }}
    >
      <img
        src={image}
        alt="carousel-item"
        className="border-white border-8 w-full h-[320px] rounded-lg"
      />
    </div>
  );
};

const WaterwheelCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getPosition = (index) => {
    const totalItems = images.length;
    // Calculate the relative position from the current index, ensuring it wraps around
    return (
      ((index - currentIndex + totalItems) % totalItems) -
      Math.floor(totalItems / 2)
    );
  };

  return (
    <div className="relative w-[400px] h-[450px] mx-auto ">
      {/* Items */}
      <div className="relative w-full h-full perspective-1000">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            image={image}
            position={getPosition(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WaterwheelCarousel;
