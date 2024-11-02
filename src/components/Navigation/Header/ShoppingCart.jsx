import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../../../assets/vegan.gif";
import { cn } from "../../../Utils/cn";

//---------------------------------------------
export default function ShoppingCart({ className, ...rest }) {
  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <Link
      to="/cart"
      className={cn(
        " relative text-black w-20 aspect-square   rounded-xl flex flex-col justify-center items-center gap-2 p-2 font-normal border-2 ",
        className
      )}
      {...rest}
    >
      <div className="absolute top-0 -translate-y-1/2  right-0 translate-x-1/2 w-7 aspect-square rounded-full bg-primary border-2 border-white flex justify-center items-center text-sm font-bold">
        {cart.length}
      </div>
      <div className="w-12 ">
        <img src={cartIcon} alt="cart" />
      </div>
    </Link>
  );
}
