import { useEffect, useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export default function Details({ summary, content, className }) {
  const [showDetails, setShowDetails] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!elementRef.current) {
        return;
      }
      if (!elementRef.current.contains(e.target)) {
        setShowDetails(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div
      ref={elementRef}
      className={`divide-y-2 bg-white shadow-sm ${className}`}
    >
      <div
        onClick={() => setShowDetails(!showDetails)}
        className={`support-hover:hover:cursor-pointer flex justify-between items-center p-4 pl-2 font-bold rounded-md `}
      >
        {summary}
        {showDetails ? (
          <IoIosArrowDown className="text-3xl" />
        ) : (
          <IoIosArrowForward className="text-3xl" />
        )}
      </div>
      {showDetails && <div className="p-2 rounded-md ">{content}</div>}
    </div>
  );
}
