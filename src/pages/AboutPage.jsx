import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Details from "../components/Details";
import ApplyForm from "../components/ApplyForm";
import Button from "../components/Buttons/Button";
import footerbgImg from "../assets/franchisepageImgs/footer-bg.jpg";
import AnimatedPageWrapper from "./AnimatedPageWrapper";

//--------------------------------------------------------------
export default function AboutPage() {
  const [restaurantLocation, setRestaurantLocation] = useState({});
  const [showModal, setShowModal] = useState(false);
  //-------------------------------------------------------
  const restaurants = [
    {
      img: "https://burek.intexagency.com/wp-content/uploads/2022/06/burek-bold-copy-zaklad-200x144.jpg",
      location: "sykhiv disctrict",
      restaurantName: "Burek in King Cross leopolis",
      directions:
        "The restaurant is situated in food court in King Cross Leopolis mall",
      map: {
        src: "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884.png",
        srcSet:
          "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884.png 1263w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-300x194.png 300w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-1024x661.png 1024w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-768x496.png 768w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-600x387.png 600w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-160x103.png 160w",
      },
      address: "Stryiska str. 183",
      detailedLocation: "2nd floor, foodcourt",
    },
    {
      img: "https://burek.intexagency.com/wp-content/uploads/2022/06/letnee-kafe-3-200x144.jpeg",
      location: "old town ",
      restaurantName: "Burek Lesia Urkainka str.",
      directions:
        "The restaurant is situated in on the Lesia Ukrainka str. near Les Kurbas Theatre",
      map: {
        src: "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843.png",
        srcSet:
          "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843.png 1419w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-300x181.png 300w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-1024x618.png 1024w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-768x464.png 768w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-600x362.png 600w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-160x97.png 160w",
      },
      address: "8, Lesia Ukrainka str.",
      detailedLocation: "Les Kurbas Theatre bus stop",
    },
    {
      img: "https://burek.intexagency.com/wp-content/uploads/2022/06/704568eebeb49c347cb9bacc371cbefc-200x144.jpeg",
      location: "Frankivskiy disctrict",
      restaurantName: "Burek Forum Lviv",
      directions: "Situated in the Forum Lviv city mall in the food court",
      map: {
        src: "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884.png",
        srcSet:
          "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884.png 1263w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-300x194.png 300w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-1024x661.png 1024w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-768x496.png 768w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-600x387.png 600w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_16-58-57-e1618927670884-160x103.png 160w",
      },
      address: "43, Dzherelna str.",
      detailedLocation: "3rd floor, food court",
    },
    {
      img: "https://burek.intexagency.com/wp-content/uploads/2022/06/bien-eleve-facade-david_grimbert-200x144.jpeg",
      location: "City center",
      restaurantName: "Rynok sqaure Burek",
      directions:
        "Situated in the heart of city Lviv in the city center ( Old town )",
      map: {
        src: "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843.png",
        srcSet:
          "https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843.png 1419w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-300x181.png 300w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-1024x618.png 1024w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-768x464.png 768w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-600x362.png 600w, https://burek.intexagency.com/wp-content/uploads/2021/04/2021-04-20_17-03-03-e1618927629843-160x97.png 160w",
      },
      address: "2, Rynok sqare",
      detailedLocation: "Main entrance near the City Hall Building",
    },
  ];

  useEffect(() => {
    setRestaurantLocation(restaurants[0]);
  }, []);

  //--------------------------------------------------------
  return (
    <AnimatedPageWrapper>
      <div
        className="min-h-screen pt-[--page-top-padding]  
      md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  
      p-[--page-padding]  bg-bgColor text-secondary"
      >
        <div className="grid xl:grid-cols-2 xl:grid-rows-1 xl:min-h-[660px]">
          <div>
            <h1 className=" mb-8">About Us</h1>
            <div className="flex flex-col gap-8 md:px-16 px-8 my-8">
              <div>
                Our journey began in 2018 with the opening of our first café in
                Lviv, aiming to change people’s perceptions of chebureks.
                Traditionally, chebureks are associated with dingy eateries,
                leading many to prefer making them at home. Burek is here to
                break those stereotypes!
              </div>
              <div>
                Today, we have expanded to
                <span className="font-bold"> 27 cozy locations </span> across
                the city, from the modern Pidholosko neighborhoods to the
                historic center of ancient Lviv.
              </div>
              <div>
                We value transparency. Our chefs work in open kitchens, allowing
                you to watch the preparation of your meal.
              </div>
            </div>
          </div>
          <div className="relative h-full xl:max-h-[660px]">
            <div className="w-full xl:h-full">
              <img
                src="https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337.jpg"
                className="size-full  object-center object-cover"
                alt=""
                decoding="async"
                srcSet="https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337.jpg 1071w, https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337-300x185.jpg 300w, https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337-1024x631.jpg 1024w, https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337-768x473.jpg 768w, https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337-600x370.jpg 600w, https://burek.intexagency.com/wp-content/uploads/2022/05/4659865_burek-small-e1653672880337-160x99.jpg 160w"
                sizes="(max-width: 1071px) 100vw, 1071px"
              />
            </div>
            <div className="md:absolute md:bottom-0 p-6">
              <FaQuoteLeft className="text-primary md:text-5xl -scale-y-[1]" />
              <div className="md:text-white font-bold  italic md:text-xl xl:pl-14 pr-1">
                Our journey began in 2018 with the opening of our first café in
                Lviv, aiming to transform people&apos;s perceptions of craft
                streetfood.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="my-8">Our Product</h1>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
            {[
              "Burek is a delivery of burgers, rolls, chebureks and yantiks. We care for you to receive your order of chebureks and yantiks as quick as possible.",
              "Burek is just that one cheburek, back in fashion!",
              "Chebureks “Burek” are prepared specifically for each order, so you can be sure in quality of the cooked dish.",
              "If you want to stay at home – order fast and tasty delivery of chebureks and yantiks from Burek in Lviv. We will make sure that you are full and satisfied, as well as we will save your time and money.",
            ].map((content, index) => (
              <div
                key={index}
                className="p-4 md:border-l-2 md:border-l-primary flex items-center"
              >
                {content}
              </div>
            ))}
          </div>
        </div>
        {/*----------------------Restaurants-------------------*/}
        <div className="mb-8">
          <h1 className="capitalize mb-8">our restaurants</h1>
          <div
            className="xl:grid xl:grid-cols-2 xl:grid-rows-1 gap-4
          xl:items-center 
        "
          >
            <div className="flex flex-col gap-4 xl:h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))] overflow-auto mb-8 xl:m-0">
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row  p-4 gap-4 items-center rounded-md bg-white support-hover:hover:cursor-pointer shadow-md support-hover:hover:bg-gray-300"
                  onClick={() => setRestaurantLocation(restaurant)}
                >
                  <div className="w-[200px] h-[144px]">
                    <img src={restaurant.img} alt="" className="rounded-lg" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between self-stretch text-center md:text-left gap-2">
                    <div className="font-bold flex items-center gap-2 justify-center md:justify-start">
                      <FaMapMarkerAlt />
                      {restaurant.location}
                    </div>
                    <div className="font-semibold">
                      {restaurant.restaurantName}
                    </div>
                    <div>{restaurant.directions}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <h1>{restaurantLocation.restaurantName}</h1>
              <div className="font-bold flex items-center gap-2 capitalize">
                <FaMapMarkerAlt />
                {restaurantLocation.location}
              </div>
              <div className="border-2 border-red-700 h-96">
                <img
                  className=" size-full object-cover object-center"
                  src={restaurantLocation?.map?.src}
                  alt=""
                  srcSet={restaurantLocation?.map?.srcSet}
                />
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <div className="flex items-center gap-2 font-semibold">
                  <FaMapMarkerAlt />
                  Address
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <FaMapMarkerAlt /> Location
                </div>
                <div> {restaurantLocation.address}</div>
                <div>{restaurantLocation.detailedLocation}</div>
              </div>
            </div>
          </div>
        </div>
        {/*-----------Frequently asked questions--------------*/}
        <div className=" grid xl:grid-cols-2 xl:grid-rows-1 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="capitalize">frequently asked questions</h1>
            <div className="flex flex-col flex-1 justify-center gap-2 px-2">
              {[
                {
                  summary: "How to order from Burek?",
                  content:
                    "You can order delivery of chebureks and yantiks from Burek on our website or via telephone.",
                },
                {
                  summary: "What is delivery cost?",
                  content: (
                    <div>
                      For your convenience we devided Lviv city into 3 delivery
                      {/* zones: green, yellow and red. Details of each one you can find
                  <a href="https://burek.intexagency.com/payment-delivery/">
                    here
                  </a> */}
                    </div>
                  ),
                },
                {
                  summary: "Can i pay with card?",
                  content: "Yes, you can pay with cash as well with card",
                },
                {
                  summary: "How long do I need to wait for the order?",
                  content: (
                    <>
                      <p>Delivery time depends on your address:</p>
                      <p>Green zone up to 29 minutes</p>
                      <p>Yellow zone up to 39 minutes</p>
                      <p>Red zone up to 59 minutes</p>
                    </>
                  ),
                },
              ].map((details, index) => (
                <Details
                  key={index}
                  summary={details.summary}
                  content={details.content}
                />
              ))}
            </div>
          </div>
          <div>
            <img
              className="size-full object-center object-cover [border-radius:0_0_0_30px]"
              src="https://burek.intexagency.com/wp-content/uploads/2022/06/75beeb6bf3293b36b4dcf833b464e381.jpeg"
              alt=""
            />
          </div>
        </div>
        <div
          className="mt-16 text-white flex flex-col justify-center gap-16  font-bold p-8 h-[640px]  md:items-start items-center text-center"
          style={{
            backgroundImage: `url(${footerbgImg}), linear-gradient(90deg,orange ,transparent)`,
            backgroundPosition: "left 10% bottom 20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="uppercase">welcome to burek!</div>
          <div className="text-5xl capitalize">become part of burek family</div>
          <div>start working in our friendly team of professionals</div>
          <Button
            styles={{
              button: "rounded-sm py-3 w-full uppercase font-bold max-w-60",
              bg: "bg-secondary",
              text: "text-primary",
              hoverBg: "bg-white",
              hoverText: "text-secondary",
            }}
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </Button>
        </div>
        {showModal && <ApplyForm closeModal={() => setShowModal(false)} />}
      </div>
    </AnimatedPageWrapper>
  );
}
