import SingleCategoryItem from "./SingleCategoryItem";

export default function SpecificCategoryListItem({ specificCategory }) {
  //--------------------------------------------
  const mealsList = specificCategory.meals
    .toSorted((a, b) => a.strMeal.localeCompare(b.strMeal))
    .map((meal) => {
      return (
        <SingleCategoryItem meal={meal} key={meal.idMeal} className={`w-72`} />
      );
    });
  //-----------------------------------------------------------

  return <>{mealsList}</>;
}
