export default function Button({
  children,
  styles = {
    button: "rounded-md p-2 capitalize font-bold ",
    bg: "bg-black",
    text: "text-white",
    hoverBg: "bg-white",
    hoverText: "text-black",
  },
  ...rest
}) {
  const onHovertxt = `support-hover:hover:${styles?.hoverText ?? "text-black"}`;

  return (
    <button
      className={`relative group/button overflow-hidden  flex justify-evenly items-center z-10  ${
        styles?.text ?? "text-white"
      } ${styles?.bg ?? "bg-black"} ${onHovertxt} ${styles?.button}`}
      {...rest}
    >
      {children}
      <span
        className={`absolute  w-0 aspect-square top-0 left-0  rounded-full -translate-x-1/2 -translate-y-1/2  support-hover:group-hover/button:w-[250%] transition-all duration-700 -z-10 ${
          styles.hoverBg ?? "bg-white"
        }`}
      ></span>
    </button>
  );
}
