import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function Paypalgateway({ className, totalPrice, onApproave }) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: { value: totalPrice },
        },
      ],
    });
  };
  const approve = (data, actions) => {
    // console.log(actions.order.capture(), data);
    onApproave();
  };
  //----------------------------
  return (
    <PayPalScriptProvider
      options={{
        clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}
    >
      <div className={className}>
        <PayPalButtons
          style={{
            layout: "horizontal",
            tagline: false,
          }}
          createOrder={createOrder}
          onApprove={approve}
        />
      </div>
    </PayPalScriptProvider>
  );
}
