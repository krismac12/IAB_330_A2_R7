import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
//import { getImages } from "../../../imagesApi";

import Arrows from "./Arrows";

import Slide from "./Slide";

export const SliderContext = createContext();

const Slider = function ({graphData, width, height, autoPlay, autoPlayTime }) {
  
  const [slide, setSlide] = useState(0);
  const [animation, setAnimation] = useState(true);

  const changeSlide = (direction = 1) => {
    setAnimation(false);
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = graphData.length - 1;
    } else {
      slideNumber = (slide + direction) % graphData.length;
    }

    setSlide(slideNumber);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout)
    }
  };

  const goToSlide = (number) => {
    setAnimation(false);
    setSlide(number % graphData.length);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout)
    }
  };

  return (
    <div style={{ width, height }} className="slider">
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: graphData.length,
          slideNumber: slide,
        }}
      >
        <Arrows />
        {
          graphData.length ? (
            <Slide data={graphData[slide]} animation={animation} />
          ) : null
        }
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};

export default Slider;