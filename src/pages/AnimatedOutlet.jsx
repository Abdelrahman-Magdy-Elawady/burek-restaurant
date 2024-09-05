import { useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence } from "framer-motion";
const AnimatedOutlet = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};
export default AnimatedOutlet;
