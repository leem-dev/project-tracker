import { useState, useEffect, useRef } from "react";
import { Images } from "../../images/images";
import { Box } from "@chakra-ui/react";

const delayTimer = 2500;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevCur) =>
          prevCur === Images.length - 1 ? 0 : prevCur + 1
        ),
      delayTimer
    );
    return () => {
      resetTimeout();
    };
  }, [current]);

  return (
    <Box>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}
        >
          {Images.map((img, index) => (
            <div
              className="slideshowSliderContainer"
              onMouseEnter={() => {
                setVisible(true);
              }}
              onMouseLeave={() => {
                setVisible(false);
              }}
            >
              <img
                src={img.src}
                className="slide"
                key={index.id}
                alt={img.description}
              />
              {isVisible && (
                <div className="blurContainer show-container">
                  <p className="blur-title">{img.title}</p>
                  <a
                    className="blur-link"
                    href={img.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here for more...
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="slideshowDots">
          {Images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${current === idx ? " active" : ""}`}
              onClick={() => {
                setCurrent(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ImageSlider;
