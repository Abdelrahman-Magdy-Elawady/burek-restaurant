import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Details from "../components/Details";
import ApplyForm from "../components/ApplyForm";
import Button from "../components/Buttons/Button";
import {
  about_footer,
  about_hero_160,
  about_hero_300,
  about_hero_600,
  about_hero_768,
  about_hero_1024,
  about_hero_1040,
  about_q_113,
  about_q_243,
  about_q_600,
  about_location_sykhiv,
  about_location_frank,
  about_location_oldtown,
  about_location_city,
} from "../assets";
//------------------------------------------------------------------
const restaurants = [
  {
    img: about_location_sykhiv,
    location: "sykhiv disctrict",
    restaurantName: "Burek in King Cross leopolis",
    directions:
      "The restaurant is situated in food court in King Cross Leopolis mall",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5151.198580186347!2d24.065072!3d49.7936!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730363182974!5m2!1sen!2sus"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="size-full object-cover"
      />
    ),
    address: "Stryiska str. 183",
    detailedLocation: "2nd floor, foodcourt",
  },
  {
    img: about_location_oldtown,
    location: "old town ",
    restaurantName: "Burek Lesia Urkainka str.",
    directions:
      "The restaurant is situated in on the Lesia Ukrainka str. near Les Kurbas Theatre",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10296.25691789343!2d23.981713!3d49.822458!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730363458876!5m2!1sen!2sus"
        className="size-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    address: "8, Lesia Ukrainka str.",
    detailedLocation: "Les Kurbas Theatre bus stop",
  },
  {
    img: about_location_frank,
    location: "Frankivskiy disctrict",
    restaurantName: "Burek Forum Lviv",
    directions: "Situated in the Forum Lviv city mall in the food court",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10296.332255843921!2d24.016878!3d49.822104!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730363546582!5m2!1sen!2sus"
        className="size-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    address: "43, Dzherelna str.",
    detailedLocation: "3rd floor, food court",
  },
  {
    img: about_location_city,
    location: "City center",
    restaurantName: "Rynok sqaure Burek",
    directions:
      "Situated in the heart of city Lviv in the city center ( Old town )",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10550.432908244027!2d22.290645!3d48.617342!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730363620274!5m2!1sen!2sus"
        className="size-full object-cover"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    address: "2, Rynok sqare",
    detailedLocation: "Main entrance near the City Hall Building",
  },
];
//--------------------------------------------------------------
export default function AboutPage() {
  const [restaurantLocation, setRestaurantLocation] = useState(restaurants[0]);
  const [showModal, setShowModal] = useState(false);

  //--------------------------------------------------------
  return (
    <div
      className="min-h-screen pt-[--page-top-padding]  
      md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  
      p-[--page-padding]  bg-bgColor text-secondary"
    >
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 gap-8">
        <div className=" flex flex-col gap-8 ">
          <h1 className="">About Us</h1>
          <div className="flex-1 flex flex-col justify-evenly md:px-16 px-8 gap-8">
            <div>
              Our journey began in 2018 with the opening of our first café in
              Lviv, aiming to change people’s perceptions of chebureks.
              Traditionally, chebureks are associated with dingy eateries,
              leading many to prefer making them at home. Burek is here to break
              those stereotypes!
            </div>
            <div>
              Today, we have expanded to
              <span className="font-bold"> 27 cozy locations </span> across the
              city, from the modern Pidholosko neighborhoods to the historic
              center of ancient Lviv.
            </div>
            <div>
              We value transparency. Our chefs work in open kitchens, allowing
              you to watch the preparation of your meal.
            </div>
          </div>
        </div>
        <div className="relative xl:h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))]">
          <div className="w-full xl:h-full">
            <img
              src={about_hero_1040}
              className="size-full  object-center object-cover"
              alt=""
              decoding="async"
              loading="lazy"
              srcSet={`${about_hero_160} 160w,${about_hero_300} 300w,${about_hero_600} 600w,${about_hero_768} 768w,${about_hero_1024} 1024w,${about_hero_1040} 1040w`}
              sizes="(max-width: 1040px) 100vw, 1040px"
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
      <div className="mb-24">
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
      <div className="mb-24">
        <h1 className="capitalize mb-8">our restaurants</h1>
        <div
          className="xl:grid xl:grid-cols-2 xl:grid-rows-1 gap-4
          xl:items-center 
        "
        >
          <div className="flex flex-col gap-4 xl:h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))] overflow-auto mb-8 xl:m-0 overscroll-contain">
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
            <div className="border-2 border-red-700 h-96 ">
              {restaurantLocation?.map}
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
                content:
                  "For your convenience we devided Lviv city into 3 delivery",
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
        <div className="max-h-96 xl:max-h-[28rem]">
          <img
            className="size-full object-center object-cover [border-radius:0_0_0_30px]"
            src={about_q_600}
            alt=""
            decoding="async"
            loading="lazy"
            srcSet={`${about_q_600} 600w,${about_q_113} 113w,${about_q_243} 243w`}
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
      </div>
      <div
        className="mt-16 text-white flex flex-col justify-center gap-16  font-bold p-8 h-[640px]  md:items-start items-center text-center md:text-start"
        style={{
          backgroundImage: `url(${about_footer}), linear-gradient(90deg,orange ,transparent)`,
          backgroundPosition: "left 65% bottom 40%",
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
  );
}
