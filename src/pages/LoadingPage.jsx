import { useGSAP } from "@gsap/react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import loadingIcon from "../assets/loader1.gif";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();
  const loadingRef = useRef();
  const tl = useRef();
  useGSAP(
    () => {
      //----------------
      tl.current = gsap
        .timeline()
        .to(".ball", {
          y: -8,
          repeat: 2,
          scale: 1.1,
          yoyo: true,
          stagger: {
            amount: 1,
            from: "end",
          },
        })
        .to(loadingRef.current, {
          duration: 1,
          onStart: () => navigate("/home"),
        });
    },
    { scope: loadingRef }
  );
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0  z-[999] flex justify-center items-center bg-primary flex-col"
      ref={loadingRef}
    >
      <div className="w-32 md:w-60 aspect-square ">
        <img
          src={loadingIcon}
          alt="logo"
          decoding="async"
          id="logo"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="font-bold text-2xl md:text-5xl flex justify-center items-center gap-1">
        {/* Cooking */}
        <div className="ball">C</div>
        <div className="ball">o</div>
        <div className="ball">o</div>
        <div className="ball">k</div>
        <div className="ball">i</div>
        <div className="ball">n</div>
        <div className="ball">g</div>
        <div className="ball">.</div>
        <div className="ball">.</div>
        <div className="ball">.</div>
      </div>
    </div>,
    document.body.querySelector("#loading")
  );
}
