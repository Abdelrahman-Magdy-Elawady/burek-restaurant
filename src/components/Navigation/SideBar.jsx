import { FaPhoneAlt } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import CategoryMenu from "../Menu/CategoryMenu";
import HamburgerIcon from "../HamburgerIcon";
import { IoFastFood } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "../../hooks";

//-----------------------------------------------
export default function SideBar({ className, ...rest }) {
  const ref = useRef(null);
  const { isMd } = useMediaQuery();
  const [menuBarState, setMenuBarState] = useState(isMd);
  const [showCategoryMenu, setshowCategoryMenu] = useState(false);
  /*--- close categorymenu ,reset menubar ------------------*/

  useClickOutside(ref, () => {
    setMenuBarState(isMd);
    setshowCategoryMenu(false);
  });

  // /*---------------- respond to resize --------------------*/
  useEffect(() => {
    setMenuBarState(isMd);
  }, [isMd]);
  //---------------------------------------------------
  useGSAP(
    () => {
      //----------------
      if (menuBarState) {
        gsap.from(".menu", {
          xPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [menuBarState], scope: ref }
  );
  //---------------------------------------------------
  return (
    <div ref={ref} className="overscroll-contain">
      <div
        onClick={() => {
          setMenuBarState(!menuBarState);
          setshowCategoryMenu(false);
        }}
        className="support-hover:hover:cursor-pointer md:hidden "
      >
        {menuBarState ? (
          <IoFastFood className="text-5xl fill-primary origin-bottom-right rotate-12 scale-75 transition-transform duration-500 ease-in-out" />
        ) : (
          <IoFastFood className="text-5xl fill-primary" />
        )}
      </div>

      {menuBarState && (
        <div
          className={`menu ${className} flex ${
            showCategoryMenu && "w-full"
          }  md:w-auto `}
        >
          <div
            className={` flex flex-col justify-between items-center px-4 py-8 bg-white shadow-md shadow-black w-[--sideBarWidth]`}
          >
            <div className="flex flex-col justify-center items-center relative pb-4 gap-1 border-2 p-2 rounded-lg ">
              <div className="font-bold">10:00</div>
              <div className="text-sm">to</div>
              <div className="font-bold">20:30</div>
              <div className="absolute  top-full -translate-y-1/2 text-xl">
                <LuClock />
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-center font-bold  text-lg absolute top-1/2 -translate-y-1/2 support-hover:hover:cursor-pointer"
              onClick={() => {
                setshowCategoryMenu(!showCategoryMenu);
              }}
            >
              {showCategoryMenu ? (
                <HamburgerIcon autoplay={true} />
              ) : (
                <div className="flex  flex-col justify-center items-center">
                  <div>OUR</div>
                  <div>MENU</div>
                </div>
              )}
            </div>
            <div className="text-xl border-2 p-2 rounded-lg  relative group">
              <Link to="tel:+380 98 334 3344">
                <FaPhoneAlt className="text-black" />
                <div className="border-2  absolute left-full top-0 w-max h-full  items-center support-hover:group-hover:flex hidden bg-white rounded-lg p-2 text-sm font-bold">
                  +380 98 334 3344
                </div>
              </Link>
            </div>
          </div>

          {showCategoryMenu && (
            <CategoryMenu
              onClick={() => {
                setMenuBarState(window.innerWidth > 768);
                setshowCategoryMenu(false);
                rest?.onClick();
              }}
              className={`w-full md:w-60`}
            />
          )}
        </div>
      )}
    </div>
  );
}
