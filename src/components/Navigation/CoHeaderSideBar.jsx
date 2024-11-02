import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header/Header";
import { Logo } from "../../assets";
import { useSetActiveLink } from "../../hooks";
//--------------------------------------------------------

export default function CoHeaderSideBar() {
  const { activeLinkSetter } = useSetActiveLink();

  //------------------------------------------------------------
  return (
    <div className="bg-white text-black flex justify-between items-center p-4 shadow-md shadow-black h-[--coHeaderHeight] fixed top-0 left-0 right-0 z-50 isolate ">
      <SideBar
        className="fixed left-0 bottom-0 top-[--coHeaderHeight]  md:top-[--mdHeaderHeight]"
        onClick={() => activeLinkSetter(-1)}
      />

      <Link to="/" onClick={() => activeLinkSetter(-1)}>
        <img
          width="49"
          height="50"
          src={Logo}
          alt="BUREK"
          decoding="async"
          loading="lazy"
        />
      </Link>

      <Header className="fixed bottom-0 right-0 top-[--coHeaderHeight]  md:bottom-auto md:top-0  w-[--sideBarWidth]" />
    </div>
  );
}
