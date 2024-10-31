import { LiaFacebookF } from "react-icons/lia";

import { Link } from "react-router-dom";

export default function Navbar() {
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
        className: "support-hover:hover:text-primary text-2xl",
      },
    },
  ];

  //-------------------------------------------------------------
  const navLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className=" support-hover:hover:text-primary"
        {...link?.config}
      >
        {link.label}
      </Link>
    );
  });

  return <>{navLinks}</>;
}
