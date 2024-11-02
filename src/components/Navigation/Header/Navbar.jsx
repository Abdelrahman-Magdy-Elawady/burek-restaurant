import { LiaFacebookF } from "react-icons/lia";
import { Link } from "react-router-dom";

import { cn } from "../../../Utils/cn";

export default function Navbar({ activeIndex, activeIndexSetter }) {
  const links = [
    { label: "Franchise", path: "/franchise" },
    { label: "Reviews", path: "/reviews" },
    { label: "About us", path: "/aboutUs" },
    { label: "Vacancies", path: "/vacancies" },
    {
      label: <LiaFacebookF />,
      path: "https://www.facebook.com/bureklviv",
      config: {
        target: "_blanck",
        className: "text-2xl",
        type: "social",
      },
    },
  ];

  //-------------------------------------------------------------
  const navLinks = links.map((link, index) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        {...link?.config}
        className={cn("group/link  relative", link?.config?.className)}
        onClick={() => activeIndexSetter(index)}
      >
        <div>{link.label}</div>
        <div
          className={cn(
            "absolute top-0 left-0 text-primary support-hover:group-hover/link:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] [clip-path:polygon(0_0,0_0,0_100%,0_100%)] duration-500 transition-[clip-path]",
            {
              "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]":
                index === activeIndex,
            }
          )}
        >
          {link.label}
        </div>
        <div
          className={cn(
            "absolute right-0 top-full w-0 h-[.125rem] bg-primary support-hover:group-hover/link:w-full transition-[width] duration-500",
            {
              "w-full": index === activeIndex,
            }
          )}
        />
      </Link>
    );
  });

  return <>{navLinks}</>;
}
