import { motion } from "framer-motion";

export default function AnimatedPageWrapper({ children }) {
  const variants = {
    hidden: { y: "-10%" },
    enter: { y: 0 },
    exit: { y: "-10%" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}
