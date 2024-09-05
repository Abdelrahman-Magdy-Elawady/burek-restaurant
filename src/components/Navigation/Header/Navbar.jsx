import { LiaFacebookF } from "react-icons/lia";

import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { label: "Franchise", path: "/franchise", type: "navLink" },
    { label: "Reviews", path: "/reviews", type: "navLink" },
    { label: "About us", path: "/aboutUs", type: "navLink" },
    { label: "Vacancies", path: "/vacancies", type: "navLink" },
    {
      label: <LiaFacebookF />,
      path: "https://www.facebook.com/bureklviv",
      type: "socialLink",
    },
  ];

  //-------------------------------------------------------------
  const navLinks = links.map((link) => {
    if (link.type === "navLink") {
      return (
        <Link
          to={link.path}
          key={link.label}
          className=" support-hover:hover:text-primary"
        >
          {link.label}
        </Link>
      );
    } else if (link.type === "socialLink") {
      return (
        <Link
          target="_blanck"
          to={link.path}
          key={link.label.type.name}
          className=" text-2xl support-hover:hover:text-primary"
        >
          {link.label}
        </Link>
      );
    }
  });

  return <>{navLinks}</>;
}
