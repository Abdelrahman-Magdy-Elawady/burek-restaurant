import { Outlet } from "react-router-dom";
import CoHeaderSideBar from "../components/Navigation/CoHeaderSideBar";
import { ScrollRestoration } from "react-router-dom";
import LoadingPage from "./LoadingPage";

export default function Root() {
  return (
    <div>
      <LoadingPage />
      <ScrollRestoration />
      <CoHeaderSideBar />
      <Outlet />
    </div>
  );
}
