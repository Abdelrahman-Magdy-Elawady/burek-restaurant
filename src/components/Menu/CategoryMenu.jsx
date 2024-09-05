import FoodLoadingpage from "../../pages/FoodLoadingPage";
import { useFetchCategoriesQuery } from "../../store/index";
import CategoryMenuListItem from "./CategoryMenuListItem";

//---------------------------------------------------
export default function MainMenu({ onClick, className }) {
  const { data, error, isFetching } = useFetchCategoriesQuery();

  //--------------------------------

  let content = null;
  if (isFetching) {
    content = <FoodLoadingpage />;
  } else if (error) {
    content = <div>Error loading Food</div>;
  } else {
    content = <CategoryMenuListItem category={data} onClick={onClick} />;
  }
  return (
    <div className={`${className} overflow-auto p-2 bg-white shadow-inner`}>
      {content}
    </div>
  );
}
