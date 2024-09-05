import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Input from "./Input";
import Button from "./Buttons/Button";
//--------------------------------------------------------
export default function ApplyForm({ closeModal }) {
  const formProperties = useForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = formProperties;

  //-------------------------------------------------------
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  //--------------------------------------------------------
  const submitHandler = async (data) => {
    //send data to backend ,but i don't have backend now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //console.log(data);
    reset();
  };
  //--------------------------------------------------------
  return createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-400 opacity-80 z-[999] "
        onClick={closeModal}
      />

      <div
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      fixed md:w-[720px] w-full p-10 bg-bgColor z-[999] rounded-2xl"
      >
        <IoClose
          className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 text-4xl support-hover:hover:scale-150 support-hover:hover:cursor-pointer "
          onClick={closeModal}
        />

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col items-stretch gap-4"
        >
          <div className="text-center font-bold text-3xl">Submit request</div>
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
            type="mail"
            name="email"
            label="Email"
            placeholder="Enter your email"
            required
            validate={{
              pattern: /\w+@[a-z]+\.[a-zA-Z]{2,}/,
              msg: "invalid mail",
            }}
          />

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
            {isSubmitting ? <div>submiting ....</div> : <div>submit</div>}
          </Button>
        </form>
      </div>
    </div>,
    document.querySelector(".apply-form")
  );
}
