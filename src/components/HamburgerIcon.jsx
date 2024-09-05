import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useRef } from "react";

export default function HamburgerIcon({
  width = "2rem",
  color = "black",
  childHeigth = "4px",
  autoplay = false,
}) {
  const [handlerchoose, setHandlerChoose] = useState(false);

  const container = useRef(null);
  //------------------------------------------------------
  const parentStyles = {
    width,
  };

  const childStyles = {
    backgroundColor: color,
    height: childHeigth,
  };

  //----------------------------------------------------------
  const { context, contextSafe } = useGSAP(() => {}, { scope: container });
  const timeL = gsap.timeline({
    defaults: {
      // children inherit these defaults
      duration: 0.1,
      ease: "none",
    },
  });

  const onAnimation = contextSafe(() => {
    timeL
      .to("#mid", {
        opacity: 0,
      })
      .to("#top", {
        position: "absolute",
        top: "50%",
        rotate: -45,
      })
      .to(
        "#bottom",
        {
          position: "absolute",
          top: "50%",
          rotate: 45,
        },
        "<"
      );
  });
  const offAnimation = contextSafe(() => {
    context.revert();
  });

  let clickFun = () => {
    handlerchoose ? offAnimation() : onAnimation();
    setHandlerChoose(!handlerchoose);
  };
  //------------------------------------------------------------
  useGSAP(
    () => {
      if (autoplay) {
        //------------------------------
        const timeL2 = gsap.timeline({
          defaults: {
            // children inherit these defaults
            duration: 0.5,
            ease: "none",
          },
        });
        //--------------------------
        timeL2
          .to("#mid", {
            opacity: 0,
          })
          .to("#top", {
            position: "absolute",
            top: "50%",
            rotate: -45,
          })
          .to(
            "#bottom",
            {
              position: "absolute",
              top: "50%",
              rotate: 45,
            },
            "<"
          );
      }
    },

    { scope: container }
  );

  //-------------------------------------------------------------
  return (
    <div
      ref={container}
      onClick={clickFun}
      className=" relative aspect-square flex flex-col justify-between support-hover:hover:cursor-pointer"
      style={parentStyles}
    >
      <div id="top" style={childStyles} className="w-full rounded-full"></div>
      <div id="mid" style={childStyles} className="w-full rounded-full"></div>
      <div
        id="bottom"
        style={childStyles}
        className="w-full rounded-full"
      ></div>
    </div>
  );
}
