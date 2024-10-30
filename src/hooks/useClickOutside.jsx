import { useEffect } from "react";

export default function useClickOutside(ref, whatToDo) {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        whatToDo();
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [whatToDo, ref]);
}
