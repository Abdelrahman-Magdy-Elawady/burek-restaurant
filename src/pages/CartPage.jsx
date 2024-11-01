import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../assets";
import CartListItem from "../components/CartListItem";
import Button from "../components/Buttons/Button";
import { CgDanger } from "react-icons/cg";
import { cleanCart } from "../store";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

//----------------------------------------------------
export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cleanCartHandler = () => {
    dispatch(cleanCart());
  };

  let content = null;
  if (!cart.length) {
    content = (
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <div className="w-60 md:w-96">
          <img
            src={emptyCart}
            alt="empty-cart"
            role="presentation"
            loading="lazy"
            decoding="async"
            className="object-center object-cover"
          />
        </div>
        <div className="font-bold text-xl md:text-2xl capitalize">
          Oops ... no items have been added to the cart yet
        </div>
      </div>
    );
  } else {
    content = <CartListItem cart={cart} className="flex-grow" />;
  }
  //-------------------------------------
  const totalCost = cart.reduce(
    (prev, current) => prev + current.count * current.price,
    0
  );
  //---------------------------------------------
  return (
    <div className="w-full min-h-screen pt-[--page-top-padding]  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  p-[--page-padding] bg-bgColor flex flex-col justify-center">
      {!!cart.length && (
        <div className=" w-full flex flex-col justify-between items-center gap-4 md:flex-row p-1  mb-8 ">
          <Button
            styles={{
              button: "p-4 rounded-md font-bold self-start md:self-center",
              bg: "bg-secondary",
              text: "text-primary",
              hoverBg: "bg-primary",
              hoverText: "text-secondary",
            }}
          >
            <Link
              to="/checkout"
              className="flex justify-center items-center gap-2"
            >
              Check Out <MdOutlineShoppingCartCheckout className="text-2xl" />
            </Link>
          </Button>
          <div className="font-bold text-2xl">TotalCost : {totalCost} $</div>
          <Button
            styles={{
              button: "self-end p-4 rounded-md font-bold",
              bg: "bg-red-500",
              text: "text-black",
              hoverBg: "bg-red-700",
              hoverText: "text-black",
            }}
            onClick={cleanCartHandler}
          >
            <div className="flex justify-center items-center gap-2">
              <div>Clean Cart</div>
              <CgDanger className="text-2xl" />
            </div>
          </Button>
        </div>
      )}
      {content}
    </div>
  );
}
