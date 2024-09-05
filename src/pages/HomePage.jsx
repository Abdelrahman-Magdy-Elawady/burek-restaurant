import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";
import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import SplitType from "split-type";

//--------------------------------------------------
export default function HomePage() {
  const [indexs, setIndexs] = useState({
    currentIndex: 0,
    prevIndex: 2,
  });
  const homepageRef = useRef();
  const tL = useRef();
  //-----------------------------------------------------------

  //-----------------------------------------------------------
  useGSAP(
    () => {
      const boxs = gsap.utils.toArray(".box");
      const buttons = document.querySelectorAll(".button");
      tL.current = gsap
        .timeline({
          defaults: {
            duration: 1,
          },
        })
        .to(boxs[indexs.prevIndex], {
          opacity: 0,
          scale: 1.25,
          onStart: () => {
            boxs[indexs.currentIndex].classList.remove("hidden");
            buttons.forEach((button) => (button.disabled = true));
          },
          onComplete: () => {
            boxs[indexs.prevIndex].classList.add("hidden");
          },
        })
        .from(
          boxs[indexs.currentIndex],
          {
            scale: 1.5,
            opacity: 0,
            onComplete: () => {
              buttons.forEach((button) => (button.disabled = false));
            },
          },
          "<"
        )
        .to(boxs[indexs.prevIndex], {
          opacity: 1,
          scale: 1,
        });
      //--------------------------------------------
      const text1 = new SplitType(".charblock-1");
      const text2 = new SplitType(".charblock-2");
      const text3 = new SplitType(".charblock-3");
      const blocks = [text1.chars, text2.chars, text3.chars];

      gsap.from(blocks[indexs.currentIndex], {
        yPercent: 100,
        xPercent: -100,
        scaleX: -1,
        scale: 0.1,
        opacity: 0,
        stagger: {
          each: 0.05,
        },
      });
      //------------------------------------------------
    },
    { dependencies: [indexs], scope: homepageRef }
  );

  //---------------------------------------------------------
  const nextCard = () => {
    const currentIndex = (indexs.currentIndex + 1) % 3;
    const prevIndex = (currentIndex - 1 + 3) % 3;
    setIndexs({ currentIndex, prevIndex });
  };
  const prevCard = () => {
    const currentIndex = (indexs.currentIndex - 1 + 3) % 3;
    const prevIndex = indexs.currentIndex;
    setIndexs({ currentIndex, prevIndex });
  };

  //---------------------------------------------------------
  return (
    <div
      className="w-full h-screen pt-[--coHeaderHeight]  md:pl-[--sideBarWidth]  md:pt-[--mdHeaderHeight] isolate bg-primary"
      ref={homepageRef}
    >
      <div className="w-full h-full overflow-hidden relative">
        <div className="text-secondary text-5xl absolute top-[5%] md:top-auto md:bottom-[5%] left-1/2  -translate-x-1/2 z-50 flex justify-center items-center gap-8 ">
          <button
            onClick={prevCard}
            className="text-white  transition-colors duration-1000 button   
            support-hover:hover:text-secondary"
          >
            <CiCircleChevLeft />
          </button>
          <button
            onClick={nextCard}
            className="text-white support-hover:hover:text-secondary transition-colors duration-1000 button  "
          >
            <CiCircleChevRight />
          </button>
        </div>
        <div className="h-full w-full  box hidden  absolute">
          <img
            className="object-cover  h-full w-full"
            width="2560"
            height="1313"
            src="https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-scaled.jpg"
            alt="bg-burger"
            decoding="async"
            srcSet="https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-scaled.jpg 2560w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-300x154.jpg 300w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-1024x525.jpg 1024w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-768x394.jpg 768w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-1536x788.jpg 1536w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-2048x1050.jpg 2048w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-600x308.jpg 600w, https://burek.intexagency.com/wp-content/uploads/2022/05/burger-banner-recovered_main-160x82.jpg 160w"
            sizes="(max-width: 2560px) 100vw, 2560px"
          ></img>
          <div
            className="uppercase absolute inset-0 flex flex-col items-center   text-white font-bold  text-sm gap-10 justify-center  md:items-start md:pl-20 md:pt-0 md:gap-16 
            "
            style={{ textShadow: "1.5px 1.5px  black" }}
          >
            <div className="text-center charblock-1 text-xl md:text-2xl">
              hot summer offer!
            </div>
            <div className="text-3xl md:text-6xl text-center md:text-left charblock-1">
              try brand new
            </div>
            <div className="text-center md:text-left text-3xl md:text-6xl charblock-1 ">
              big mama burger!
            </div>
            <Link to="/category/Breakfast">
              <Button
                styles={{
                  button: "font-bold py-3 px-10 rounded-md",
                  bg: "bg-white ",
                  text: "text-secondary",
                  hoverBg: "bg-secondary",
                  hoverText: "text-primary",
                }}
              >
                Try now !
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full  box hidden absolute">
          <img
            className="object-cover object-center h-full w-full"
            width="2560"
            height="1313"
            src="https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-scaled.jpg"
            alt="bg"
            decoding="async"
            srcSet="https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-scaled.jpg 2560w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-300x154.jpg 300w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-1024x525.jpg 1024w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-768x394.jpg 768w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-1536x788.jpg 1536w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-2048x1050.jpg 2048w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-600x308.jpg 600w, https://burek.intexagency.com/wp-content/uploads/2022/05/icecream-banner-recovered_main-160x82.jpg 160w"
            sizes="(max-width: 2560px) 100vw, 2560px"
          ></img>
          <div
            className="uppercase absolute inset-0 flex flex-col items-center   text-white font-bold  text-sm gap-10 justify-center  md:items-start md:pl-20 md:pt-0 md:gap-16"
            style={{ textShadow: "1.5px 1.5px  black" }}
          >
            <div className="text-center charblock-2 text-xl md:text-2xl">
              cool down this summer!
            </div>
            <div className="text-center md:text-left text-3xl md:text-6xl charblock-2">
              Nasty tasty!
            </div>
            <div className="text-center md:text-left text-3xl md:text-6xl charblock-2">
              melting season started
            </div>
            <Link to="/category/Dessert">
              <Button
                styles={{
                  button: "font-bold py-3 px-10 rounded-md",
                  bg: "bg-white ",
                  text: "text-secondary",
                  hoverBg: "bg-secondary",
                  hoverText: "text-primary",
                }}
              >
                Try now !
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full absolute box hidden ">
          <img
            className="object-cover object-center h-full w-full"
            width="1920"
            height="960"
            src="https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2.jpg"
            alt="pizza-log"
            decoding="async"
            srcSet="https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2.jpg 1920w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-600x300.jpg 600w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-300x150.jpg 300w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-1024x512.jpg 1024w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-768x384.jpg 768w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-1536x768.jpg 1536w, https://burek.intexagency.com/wp-content/uploads/2021/03/burek-banner-2-160x80.jpg 160w"
            sizes="(max-width: 1920px) 100vw, 1920px"
          ></img>
          <div
            className="uppercase absolute inset-0 flex flex-col items-center   text-white font-bold  text-sm gap-10 justify-center  md:items-start md:pl-20 md:pt-0 md:gap-16"
            style={{ textShadow: "1.5px 1.5px  black" }}
          >
            <div className="text-center charblock-3 text-xl md:text-2xl">
              tuesday turkish wibe!
            </div>
            <div className="text-3xl md:text-6xl text-center md:text-left capitalize charblock-3">
              try brand new
            </div>
            <div className="text-3xl md:text-6xl text-center md:text-left charblock-3">
              beef juicy burek
            </div>
            <Link to="/category/Beef">
              <Button
                styles={{
                  button: "font-bold py-3 px-10 rounded-md",
                  bg: "bg-white ",
                  text: "text-secondary",
                  hoverBg: "bg-secondary",
                  hoverText: "text-primary",
                }}
              >
                Try now !
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
