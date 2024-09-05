import { useFetchSpecificCategoryQuery } from "../store";
import { useParams } from "react-router-dom";
import FoodLoadingpage from "./FoodLoadingPage";
import SpecificCategoryListItem from "../components/SpecificCategoryListItem";
import AnimatedPageWrapper from "./AnimatedPageWrapper";
//------------------------------------------

export default function CategoryPage() {
  const { name } = useParams();
  const { data, isFetching, error } = useFetchSpecificCategoryQuery(name);

  //--------------------------------------------
  let content = null;
  if (isFetching) {
    content = (
      <div className="w-1/2">
        <FoodLoadingpage />
      </div>
    );
  } else if (error) {
    content = <div>Error loading Food</div>;
  } else {
    content = <SpecificCategoryListItem specificCategory={data} />;
  }
  return (
    <AnimatedPageWrapper>
      <div className="p-[--page-padding] flex flex-wrap gap-12 text-center justify-center items-center w-full min-h-screen pt-[--page-top-padding]  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  relative bg-bgColor">
        {content}
      </div>
    </AnimatedPageWrapper>
  );
}
