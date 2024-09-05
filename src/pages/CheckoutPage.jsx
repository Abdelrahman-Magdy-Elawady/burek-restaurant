import { useSelector } from "react-redux";
import Table from "../components/Table";
import CheckoutForm from "../components/checkout/CheckoutForm";
import emptyCartIcon from "../assets/emptyCart.png";
import AnimatedPageWrapper from "./AnimatedPageWrapper";
//-----------------------------------------------------
export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const header = ["meal", "unit Price", "Qty", "Ext Price"];
  const orderSummary = cart.map((meal) => {
    return {
      name: meal.name,
      price: meal.price,
      count: meal.count,
      totalPrice: meal.count * meal.price,
    };
  });
  const totalPrice = orderSummary.reduce(
    (prev, current) => prev + current.totalPrice,
    0
  );
  const footer = [
    {
      content: "TotalPrice",
      spans: {
        row: 1,
        col: 3,
      },
    },
    {
      content: totalPrice + " $",
      spans: {
        row: 1,
        col: 1,
      },
    },
  ];

  //---------------------------------------------------------
  return (
    <AnimatedPageWrapper>
      <div className=" w-full min-h-screen pt-[--page-top-padding]  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  p-[--page-padding] bg-bgColor flex flex-col items-center gap-8 justify-center text-secondary">
        {cart.length ? (
          <>
            <Table
              caption={"Order Summary"}
              header={header}
              body={orderSummary}
              footer={footer}
              styles={{
                caption: "text-left p-2  border-b-4 border-black pb-8",
                table:
                  "w-full text-center table-auto border-2 border-black bg-white max-w-[1024px]",
                body: "p-2 border-2 border-black",
                header: "border-b-2 border-black p-2",
                footer: "font-bold p-2 text-xl border-2 border-black",
              }}
            />

            <CheckoutForm totalPrice={totalPrice} />
          </>
        ) : (
          <div className="flex flex-col items-center text-center gap-8">
            <div className="w-1/2">
              <img src={emptyCartIcon} alt="" />
            </div>
            <div className="font-bold text-2xl capitalize">
              Oops ... no items have been added to the cart yet
            </div>
          </div>
        )}
      </div>
    </AnimatedPageWrapper>
  );
}
