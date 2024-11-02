import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useMediaQuery, useClickOutside } from "../../../hooks";
import { Logo } from "../../../assets";
import { useSetActiveLink } from "../../../hooks";

//-----------------------------------------------
export default function Header({ className }) {
  const { activeLinkSetter } = useSetActiveLink();
  const matchmediaRef = useRef(null);
  const { isMd } = useMediaQuery();
  const [optionBarState, setOptionBarState] = useState(isMd);
  const ref = useRef(null);
  useClickOutside(ref, () => setOptionBarState(isMd));

  //--------------------------------------------
  useEffect(() => {
    setOptionBarState(isMd);
  }, [isMd]);
  //------------------------------------------
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
          <Link
            to="/"
            className="hidden md:block pl-4 mr-auto"
            onClick={() => activeLinkSetter(-1)}
          >
            <img src={Logo} alt="BUREK" decoding="async" />
          </Link>
          <Navbar />
          <ShoppingCart onClick={() => activeLinkSetter(-1)} />
        </div>
      )}
    </div>
  );
}
