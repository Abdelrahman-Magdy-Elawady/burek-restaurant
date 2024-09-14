import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Toaster({ children, time, className, close }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timeRef = setTimeout(() => {
      close();
    }, time);
    const intervalRef = setInterval(() => {
      setProgress((progress) => progress + 1);
    }, time / 100);

    return () => {
      clearTimeout(timeRef);
      clearInterval(intervalRef);
    };
  }, [time, close]);

  return createPortal(
    <div
      className={`${className} fixed inset-0 pt-[--page-top-padding]  
      md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  
      p-[--page-padding]  bg-gray-400 bg-opacity-25 text-secondary z-[999999] flex justify-center items-start text-sm sm:text-base text-center`}
    >
      <div className="bg-white p-4 rounded-md flex justify-center items-center gap-2 relative overflow-hidden">
        {children}
        <RiCheckboxCircleFill className="text-2xl fill-primary" />
        <div
          className="absolute left-0 bottom-0 h-1 bg-secondary"
          style={{
            right: `${100 - progress}%`,
          }}
        ></div>
      </div>
    </div>,
    document.querySelector("#toaster")
  );
}
