import RadioButton from "../Buttons/RadioButton";
import { useState } from "react";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import Paypalgateway from "../Paypalgateway";
import PaymentVerification from "./PaymentVerification";
//------------------------------------------------
const orderId = () => {
  return parseInt(99999 * Math.random());
};
//------------------------------------------------
export default function CheckoutForm({ totalPrice }) {
  //-----------------------------------------------------
  const [delivery, setDelivery] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationContent, setVerificationContent] = useState(null);
  const [formData, setFormData] = useState(null);
  //----------------------------------------------------------------
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;
  //--------------------------------------------------

  const submitHandler = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(data);
    if (data.deliveryMethod === "selfPickup") {
      setVerificationContent(
        <div className="flex flex-col justify-center items-center  gap-8 capitalize h-full ">
          <h1>thank you</h1>
          <div>
            You chose to
            <span className="font-bold"> self-pickup </span>your meal and to pay
            in
            <span className="font-bold"> {data.paymentMethod} </span>
          </div>
          <div>
            <span className="font-bold">your order id is : </span> {orderId()}
          </div>
          <div>Your order will be withdrawn in 2 hours</div>
        </div>
      );
    } else if (data.deliveryMethod === "delivery") {
      setVerificationContent(
        <div className="flex flex-col  justify-center gap-8 capitalize ">
          <h1>thank you</h1>
          <div>
            You chose to have your meal
            <span className="font-bold"> delivered </span>and to pay in
            <span className="font-bold">{data.paymentMethod} </span>
          </div>
          <div>
            <span className="font-bold">your order id is : </span> {orderId()}
          </div>
          <div>
            <span className="font-bold">your name is : </span> {data.name}
          </div>
          <div>
            <span className="font-bold">your phone number is : </span>
            {data.phone}
          </div>
          <div>
            <span className="font-bold">your address is : </span>
            {data.address}
          </div>
          <div>the delivery will arrive in 45 minutes</div>
        </div>
      );
    }
    setFormData(data);

    if (data?.paymentMethod === "cash") setShowVerification(true);
  };

  //---------------------------------------------
  return (
    <div className="w-full max-w-[1024px]">
      <h1 className="text-left p-2 font-bold  pb-8 capitalize">
        payment & delivery
      </h1>

      <form
        className="bg-white w-full  flex flex-col gap-4 md:p-16 p-4 py-16 rounded-xl  shadow-xl"
        onSubmit={handleSubmit(submitHandler)}
      >
        <fieldset className="w-full border-2 border-secondary rounded-md p-4 font-bold grid grid-rows-2 grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-1 ">
          <legend className="px-2">Delivery Method</legend>
          <RadioButton
            formProperties={formProperties}
            name="deliveryMethod"
            styles={{
              box: "border-2 border-primary rounded-md p-3 px-6",
              check: "text-primary text-xl",
            }}
            label="Delivery"
            value="delivery"
            onClick={() => setDelivery(true)}
          />
          <RadioButton
            formProperties={formProperties}
            name="deliveryMethod"
            styles={{
              box: "border-2 border-primary rounded-md p-3 px-6",
              check: "text-primary text-xl",
            }}
            label="Self-pickup"
            value="selfPickup"
            defaultChecked
            onClick={() => {
              setDelivery(false);
              reset();
            }}
          />
        </fieldset>
        {delivery && (
          <>
            <Input
              formProperties={formProperties}
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your name"
              required
              validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
            />
            <Input
              formProperties={formProperties}
              type="text"
              name="phone"
              label="Phone"
              placeholder="Enter your phone number"
              required
              validate={{
                pattern: /^(010|011|012)\d{8}$/,
                msg: "must start with 010 ,011 or 012 followed by 8 numbers ",
              }}
            />
            <Input
              formProperties={formProperties}
              type="text"
              name="address"
              label="Address"
              placeholder="Enter your address"
              required
            />
          </>
        )}
        <fieldset className="w-full border-2 border-secondary rounded-md p-4 font-bold grid grid-rows-2 grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-1 ">
          <legend className="px-2">Payment Method</legend>
          <RadioButton
            formProperties={formProperties}
            name="paymentMethod"
            styles={{
              box: "border-2 border-primary rounded-md p-3 px-6",
              check: "text-primary text-xl",
            }}
            label="Credit card"
            value="creditCard"
          />
          <RadioButton
            formProperties={formProperties}
            name="paymentMethod"
            defaultChecked
            styles={{
              box: "border-2 border-primary rounded-md p-3 px-6",
              check: "text-primary text-xl",
            }}
            label="Cash"
            value="cash"
            onClick={() => {
              if (formData?.paymentMethod === "creditCard") {
                setFormData(null);
              }
            }}
          />
        </fieldset>

        {formData?.paymentMethod === "creditCard" ? (
          <Paypalgateway
            className="mx-auto md:w-1/2 w-full "
            totalPrice={totalPrice}
            onApproave={() => {
              setShowVerification(true);
            }}
          />
        ) : (
          <Button
            styles={{
              button: "rounded-md p-4 capitalize font-bold w-40 self-center",
              bg: "bg-primary",
              text: "text-secondary",
              hoverBg: "bg-secondary",
              hoverText: "text-primary",
            }}
            type="submit"
          >
            {isSubmitting ? <div>Submiting ....</div> : <div>Submit</div>}
          </Button>
        )}
      </form>
      {showVerification && (
        <PaymentVerification
          onClose={() => {
            setShowVerification(false);
            setVerificationContent(null);
            setFormData(null);
          }}
        >
          {verificationContent}
        </PaymentVerification>
      )}
    </div>
  );
}
