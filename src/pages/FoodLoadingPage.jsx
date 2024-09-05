import loaderImg from "../assets/loader2.gif";

export default function FoodLoadingpage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <img src={loaderImg} alt="food is Loading......." />
    </div>
  );
}
