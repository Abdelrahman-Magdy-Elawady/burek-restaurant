import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//-----------------------------------------------
export default function Header({ className }) {
  const matchmediaRef = useRef(null);
  const [optionBarState, setOptionBarState] = useState(window.innerWidth > 768);
  const ref = useRef(null);

  //--------------------------------------------
  useEffect(() => {
    const updateMedia = () => {
      setOptionBarState(window.innerWidth > 768);
    };
    window.addEventListener("resize", updateMedia);
    const Handler = (e) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(e.target)) {
        setOptionBarState(window.innerWidth > 768);
      }
    };
    document.addEventListener("click", Handler, true);

    return () => {
      document.removeEventListener("click", Handler);
      window.removeEventListener("resize", updateMedia);
    };
  }, []);
  //--------------------------------------------------

  useGSAP(
    () => {
      //----------------
      matchmediaRef.current = gsap.matchMedia();
      matchmediaRef.current.add("(max-width: 768px)", () => {
        if (optionBarState) {
          gsap.from(".menu", {
            xPercent: 100,
            opacity: 0,
            duration: 0.75,
            ease: "power3.inOut",
          });
        }
      });
    },
    { dependencies: [optionBarState], scope: ref }
  );

  //--------------------------------------------------
  return (
    <div ref={ref}>
      <div
        className="md:hidden text-4xl support-hover:hover:cursor-pointer"
        onClick={() => {
          setOptionBarState(!optionBarState);
        }}
      >
        {optionBarState ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </div>

      {optionBarState && (
        <div
          className={`${className} menu flex flex-col-reverse justify-evenly   items-center p-3 md:flex-row  md:justify-end md:px-6 md:pt-6 md:gap-8 md:w-full text-black font-bold bg-white shadow-md shadow-black 
          md:shadow-sm `}
        >
          <Navbar />
          <ShoppingCart />
        </div>
      )}
    </div>
  );
}