import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
//-------------------------------------------------
export default function CategoryMenuListItem({ category, onClick }) {
  //---------------------------------------------
  const containerRef = useRef();
  useGSAP(
    () => {
      //----------------
      gsap.from(".category", {
        xPercent: -100,
        stagger: {
          amount: 1,
          from: "start",
        },
      });
    },
    { scope: containerRef }
  );

  //----------------------------------------
  const categoryList = category.categories
    .toSorted((a, b) => a.strCategory.localeCompare(b.strCategory))
    .map((category) => {
      if (category.strCategory === "Pork") return;

      return (
        <Link
          to={`/category/${category.strCategory}`}
          key={category.idCategory}
          className="category flex flex-col justify-center items-center  p-4 gap-4  group support-hover:hover:cursor-pointer  bg-white shadow-sm"
          onClick={onClick}
        >
          <div className="relative rounded-xl  overflow-hidden support-hover:group-hover:scale-75 transition-transform duration-500 h-28 w-full">
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="size-full object-contain"
            />
          </div>
          <div className="font-bold">{category.strCategory}</div>
        </Link>
      );
    });
  return (
    <div className="w-full flex flex-col divide-y-2 " ref={containerRef}>
      {categoryList}
    </div>
  );
}
