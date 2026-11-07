import React from "react";
import { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
  ];

  // const images = [
  //   "https://images.pexels.com/photos/34950/pexels-photo.jpg",         // Beach & sea
  //   "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg", // Mountains landscape
  //   "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg", // City skyline
  //   "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg", // Forest road
  // ];
  

  const handlePrevClick = () => {
    if(activeIndex === 0){
        setActiveIndex((prev) => images.length - 1)
    }else{
        setActiveIndex((prev) => prev - 1)
    }
  }

  const handleNextClick = () => {
    if(activeIndex === images.length -1){
        setActiveIndex((prev) => 0)
    }else{
        setActiveIndex((prev) => prev + 1)
    }
  }

  console.log('activeIndex', activeIndex)

  return (
    <div className="componentContainer">
      <div className="imageContainer">
        <img src={images[activeIndex]} />
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
        <div className="textContainer">
          <span className="text">{`${activeIndex+1} of ${images.length}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
