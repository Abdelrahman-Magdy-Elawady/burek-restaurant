import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import formBg from "../../assets/form-bg.jpg";
import { useEffect } from "react";

export default function PaymentVerification({ onClose, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  return createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-400 opacity-80 z-[999] "
        onClick={onClose}
      />
      <div
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    fixed md:w-[720px] w-full p-16  z-[999] rounded-2xl"
        style={{
          backgroundImage: `url(${formBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <IoClose
          className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2 text-4xl support-hover:hover:scale-150 support-hover:hover:cursor-pointer "
          onClick={onClose}
        />
        {children}
      </div>
    </div>,
    document.querySelector("#verification-payment")
  );
}
