import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store";

export default function useSetActiveLink() {
  const activeLink = useSelector((state) => state.activeLink);
  const dispatch = useDispatch();
  const activeLinkSetter = (index) => {
    dispatch(setActiveLink(index));
  };
  return { activeLink, activeLinkSetter };
}
