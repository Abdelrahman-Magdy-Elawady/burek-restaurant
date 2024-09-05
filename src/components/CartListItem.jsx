import { RiDeleteBin5Fill } from "react-icons/ri";
import CountingButton from "./Buttons/CountingButton";
import { modifyCart, removeFromCart } from "../store";
import { useDispatch } from "react-redux";
import Button from "./Buttons/Button";

export default function CartListItem({ cart, className }) {
  const dispatch = useDispatch();
  const countPlus = (meal) => {
    dispatch(
      modifyCart({
        meal,
        type: "plus",
      })
    );
  };
  const countMinus = (meal) => {
    dispatch(
      modifyCart({
        meal,
        type: "minus",
      })
    );
  };
  const deleteHandler = (meal) => {
    dispatch(removeFromCart(meal));
  };
  //--------------------------------------------------------------

  const listItems = cart.map((meal) => {
    return (
      <div
        key={meal.id}
        className={`bg-white rounded-md shadow-lg  flex flex-col items-center   w-64   relative overflow-hidden  shadow-secondary text-center md:flex-row md:flex-[1_1_500px]`}
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-1/3
          md:bottom-1/3 md:right-0
          
          bg-secondary z-0 
       
      "
        ></div>

        <div
          className="p-4 bg-secondary  [border-radius:5px_5px_30px_0] 
      "
        >
          <div className=" overflow-hidden [border-radius:5px_5px_30px_5px] z-10  relative md:w-40 ">
            <img src={meal.img} alt="" />
          </div>
        </div>

        <div className=" p-4 w-full  [border-radius:50px_5px_5px_5px]  relative z-10 bg-white flex flex-col gap-4 md:self-stretch md:justify-center items-center">
          <div className="font-bold line-clamp-1"> {meal.name}</div>
          <div className="flex justify-between w-full  items-center gap-4 ">
            <div className=" font-bold flex items-center md:gap-2 gap-1">
              <div> ${meal.price * meal.count} =</div>
              <div>{meal.price} x</div>
            </div>
            <CountingButton
              count={meal.count}
              countMinus={() => countMinus(meal)}
              countPlus={() => countPlus(meal)}
            />
          </div>
          <Button
            onClick={() => deleteHandler(meal)}
            styles={{
              button: "w-full md:w-40 p-1 py-2 rounded-md text-2xl",
              bg: "bg-secondary",
              text: "text-primary",
              hoverBg: "bg-primary",
              hoverText: "text-secondary",
            }}
          >
            <RiDeleteBin5Fill />
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`${className} w-full  flex  items-center justify-center gap-4 flex-wrap`}
    >
      {listItems}
    </div>
  );
}
