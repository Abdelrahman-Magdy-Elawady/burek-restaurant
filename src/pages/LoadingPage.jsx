import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import loadingIcon from "../assets/loader1.png";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function LoadingPage() {
  const { pathname } = useLocation();
  const loadingRef = useRef();
  const isplaying = useRef(false);

  useGSAP(
    () => {
      //----------------
      if (!isplaying.current) {
        gsap
          .timeline({
            onStart: () => {
              document.body.classList.add("overflow-hidden");
              isplaying.current = true;
            },
            onComplete: () => {
              isplaying.current = false;
              document.body.classList.remove("overflow-hidden");
            },
          })
          .fromTo(
            ".loading",
            {
              clipPath: `polygon(0 0, 0 0, 0 100%, 0% 100%)`,
            },
            {
              clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
              duration: 1.5,
              delay: 0.5,
            }
          )
          .fromTo(
            ".moving-section",
            {
              left: "0%",
              autoAlpha: 1,
              skewX: "0deg",
            },
            {
              left: "-100%",
              duration: 1,
              autoAlpha: 0.85,
              ease: "expo.out",
            }
          );
      }
    },
    { dependencies: [pathname], scope: loadingRef }
  );
  return (
    <div
      className="fixed inset-0  z-[999] pointer-events-none"
      ref={loadingRef}
    >
      <LoadingSection className="absolute  moving-section left-0 top-0  bg-primary" />
    </div>
  );
}

function LoadingSection({ className }) {
  return (
    <div
      className={`flex flex-col justify-center items-center size-full ${className}`}
    >
      <div className="w-32 md:w-60 aspect-square ">
        <img
          src={loadingIcon}
          alt="logo"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative font-bold text-2xl md:text-5xl capitalize">
        <div className="opacity-50">cooking....</div>
        <div className="absolute top-0 opacity-100 loading">cooking....</div>
      </div>
    </div>
  );
}
