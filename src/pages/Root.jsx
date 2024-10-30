import { Outlet } from "react-router-dom";
import CoHeaderSideBar from "../components/Navigation/CoHeaderSideBar";
import { ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <ScrollRestoration />
      <CoHeaderSideBar />
      <Outlet />
    </div>
  );
}
