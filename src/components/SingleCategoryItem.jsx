import { useDispatch } from "react-redux";
import { addToCart } from "../store";
import { useEffect, useState } from "react";
import { GiCookingPot } from "react-icons/gi";
import CountingButton from "./Buttons/CountingButton";
import Button from "./Buttons/Button";
import Toaster from "./Toaster";

//---------------------------------------------

const generatePrice = () => {
  return parseInt(5 + Math.random() * 10);
};
var countTemp = 0;

export default function SingleCategoryItem({ meal, className }) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [showToaster, setShowToaster] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (!count) return;
    dispatch(
      addToCart({
        id: meal.idMeal,
        name: meal.strMeal,
        img: meal.strMealThumb,
        price,
        count,
      })
    );
    countTemp = count;
    setShowToaster(true);
    setCount(0);
  };
  useEffect(() => {
    setPrice(generatePrice());
  }, []);

  //-------------------------------------------
  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    count ? setCount(count - 1) : null;
  };
  //-------------------------------------------

  return (
    <div
      className={`flex flex-col items-center bg-white rounded-md shadow-lg relative overflow-hidden  shadow-secondary ${className}
      `}
    >
      <div
        className="absolute top-0 left-0 bottom-0 right-1/3 bg-secondary z-0 
      "
      />

      <div className="p-4 bg-secondary  [border-radius:5px_5px_30px_0]  overflow-hidden  z-10  relative w-full h-72">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="size-full object-cover [border-radius:5px_5px_30px_0]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        className={`p-4 w-full  [border-radius:50px_5px_5px_5px]  relative z-10 bg-white flex flex-col justify-center gap-4
       `}
      >
        <div className="font-bold line-clamp-1">{meal.strMeal}</div>
        <div className="flex justify-between w-full  items-center gap-4 ">
          <div className="font-bold">$ {price} </div>
          <CountingButton
            count={count}
            countPlus={countPlus}
            countMinus={countMinus}
          />
        </div>
        <Button
          onClick={addToCartHandler}
          styles={{
            button: "py-2 rounded-md capitalize font-bold",
            bg: "bg-secondary",
            text: "text-primary",
            hoverBg: "bg-primary ",
            hoverText: "text-secondary",
          }}
        >
          add to cart
          <div className="text-3xl pb-1">
            <GiCookingPot />
          </div>
        </Button>
      </div>

      {showToaster && (
        <Toaster close={() => setShowToaster(false)} time={2000}>
          <span className="font-bold">{countTemp} x </span>
          {meal.strMeal}
          <span className="font-bold">Added Successfully </span>
        </Toaster>
      )}
    </div>
  );
}
