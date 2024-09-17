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
