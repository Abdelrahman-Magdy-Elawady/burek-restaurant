import { Link } from "react-router-dom";

import SideBar from "./SideBar";
import Header from "./Header/Header";

//--------------------------------------------------------

export default function CoHeaderSideBar() {
  //------------------------------------------------------------
  return (
    <div className="bg-white text-black flex justify-between items-center p-4 shadow-md shadow-black h-[--coHeaderHeight] fixed top-0 left-0 right-0 z-50 isolate ">
      <SideBar className="fixed left-0 bottom-0 top-[--coHeaderHeight]  md:top-[--mdHeaderHeight]  " />

      <Link to="/home">
        <img
          width="49"
          height="50"
          src="https://burek.intexagency.com/wp-content/uploads/2022/05/logo-small.svg"
          alt="logo"
          decoding="async"
        ></img>
      </Link>

      <Header className="fixed bottom-0 right-0 top-[--coHeaderHeight]  md:bottom-auto md:top-0  w-[--sideBarWidth]" />
    </div>
  );
}
