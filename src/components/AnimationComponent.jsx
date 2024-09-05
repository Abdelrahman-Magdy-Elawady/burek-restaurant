import { motion } from "framer-motion";

export default function AnimationComponent({
  children,
  animation,
  transition,
  ...rest
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{ ...animation }}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// animation={{
//   initial: {
//     opacity: 0,
//     x: "-100%",
//   },
//   animate: {
//     opacity: 1,
//     x: "0%",
//   },
// }}
// transition={{ duration: 0.25, ease: "easeInOut" }}
// className="-z-10"
