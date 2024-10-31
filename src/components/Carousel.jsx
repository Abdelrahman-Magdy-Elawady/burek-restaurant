import { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowLeft,
  MdPauseCircle,
  MdOutlineArrowRight,
} from "react-icons/md";
import { IoPlayCircle } from "react-icons/io5";

export default function Carousel({
  children,
  className,
  autoplay = false,
  styles = {
    arrows: "",
    playButton: "",
  },
}) {
  const [trans_x, setTrans_x] = useState(0);
  const autoplayRef = useRef();
  const [pauseAutoplay, setPauseAutoplay] = useState(!autoplay);

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
    setTrans_x((prev) => (prev + 1) % children.length);
  };

  const toRight = () => {
    setTrans_x((prev) => (prev - 1 + children.length) % children.length);
  };

  const toggleAutoplay = () => {
    setPauseAutoplay(!pauseAutoplay);
  };
  return (
    <div className={`${className}  relative  overflow-hidden`}>
      <div
        className="h-full flex transition-transform duration-500 ease-in-out"
        style={{
          width: `calc(${children.length}*100%)`,
          transform: `translate(calc(-${trans_x * 100}%/${
            children.length
          }),0%)`,
        }}
      >
        {children}
      </div>

      <button
        onClick={() => toLeft()}
        disabled={!pauseAutoplay}
        className={`support-hover:hover:cursor-pointer text-6xl text-white support-hover:hover:text-secondary ${styles?.arrows}`}
      >
        <MdOutlineArrowLeft className="absolute top-1/2 -translate-y-1/2" />
      </button>

      <button
        onClick={() => toRight()}
        disabled={!pauseAutoplay}
        className={`support-hover:hover:cursor-pointer text-6xl text-white support-hover:hover:text-secondary ${styles?.arrows}`}
      >
        <MdOutlineArrowRight className="absolute top-1/2 -translate-y-1/2 right-0" />
      </button>
      <button
        className={`absolute bottom-5 right-5 text-3xl  text-white support-hover:hover:text-secondary support-hover:hover:cursor-pointer ${styles?.playButton}`}
        onClick={() => toggleAutoplay()}
      >
        {pauseAutoplay ? <MdPauseCircle /> : <IoPlayCircle />}
      </button>
    </div>
  );
}
