import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdPauseCircle } from "react-icons/md";
import { IoPlayCircle } from "react-icons/io5";

export default function Carousel({ children, className }) {
  const [trans_x, setTrans_x] = useState(0);
  const autoplayRef = useRef();
  const [pauseAutoplay, setPauseAutoplay] = useState(true);

  useEffect(() => {
    if (!pauseAutoplay) {
      autoplayRef.current = setInterval(() => {
        toLeft();
      }, 2000);
    } else {
      clearInterval(autoplayRef.current);
    }
    return () => clearInterval(autoplayRef.current);
  }, [pauseAutoplay]);

  const toLeft = () => {
    setTrans_x((trans_x) => {
      if (trans_x + 1 < children.length) {
        return trans_x + 1;
      }
      return 0;
    });
  };
  const toRight = () => {
    setTrans_x((trans_x) => {
      if (trans_x - 1 >= 0) {
        return trans_x - 1;
      }
      return children.length - 1;
    });
  };

  const toggleAutoplay = () => {
    setPauseAutoplay(!pauseAutoplay);
  };
  return (
    <div className={`${className}  relative  overflow-hidden`}>
      <div
        className="h-full flex transition-transform duration-300"
        style={{
          width: `calc(${children.length}*100%)`,
          transform: `translate(calc(-${trans_x * 100}%/${
            children.length
          }),0%)`,
        }}
      >
        {children}
      </div>

      <MdOutlineArrowLeft
        className="support-hover:hover:cursor-pointer text-6xl absolute top-1/2 -translate-y-1/2 fill-white support-hover:hover:fill-secondary"
        onClick={() => toLeft()}
      />
      <MdOutlineArrowRight
        className="support-hover:hover:cursor-pointer text-6xl absolute top-1/2 -translate-y-1/2 right-0 fill-white support-hover:hover:fill-secondary"
        onClick={() => toRight()}
      />
      <div
        className="absolute bottom-5 right-5 text-3xl  text-white support-hover:hover:text-secondary"
        onClick={() => toggleAutoplay()}
      >
        {pauseAutoplay ? <MdPauseCircle /> : <IoPlayCircle />}
      </div>
    </div>
  );
}
