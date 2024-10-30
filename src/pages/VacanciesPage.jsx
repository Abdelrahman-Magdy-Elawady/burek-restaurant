import Button from "../components/Buttons/Button";
import num1 from "../assets/num1.svg";
import num2 from "../assets/num2.svg";
import num3 from "../assets/num3.svg";
import num4 from "../assets/num4.svg";
import num5 from "../assets/num5.svg";
import emptyIcon from "../assets/emptyCart.svg";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useState } from "react";

//------------------------------------------
export default function VacanciesPage() {
  const [showVacancy, setShowVacancy] = useState({});

  const formProperties = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formProperties;
  //-----------------------------------------------------

  const vacancies = [
    {
      vacancy: "cashier",
      placing: "21, Sykhivska str",
      type: "Part-time",
      decribtion:
        "Сashier is a face of our company, so we are searching for the most friendly team, communication with which will bring incredible satisfaction for the customer. Ready to work really effectively? Then join our team!",
    },
    {
      vacancy: "Chef",
      placing: "Lviv",
      type: "Full-time",
      decribtion:
        "If you feel that the kitchen is your sincere hobby, you can't imagine life without chebers, you know how or want to learn how to cook - then we are waiting for you! We are looking for young and ambitious people who are passionate about the kitchen and their work!",
    },
  ];

  //-----------------------------------------------------
  const submitHandler = async (data) => {
    //send data to backend ,but i don't have backend now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(data);
    reset();
    setShowVacancy({});
  };
  //-----------------------------------------------------
  return (
    <div
      className="min-h-screen pt-[--page-top-padding]  
  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  
  p-[--page-padding]  bg-bgColor text-secondary"
    >
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 gap-4">
        <div>
          <h1 className="mb-8">Vacancies in Burek</h1>
          <div className="p-8 flex flex-col items-center gap-8 ">
            {[
              "“Burek” is more than just a delivery service for burgers, rolls, chebureks, and yantiks—it’s a lifestyle. This style embodies a grand vision and an enthusiastic team. Every day, we create, enhance, and deliver energy, bursts of flavor, and vivid emotions.",
              "If you’re passionate about helping others and spreading your positive energy, if you aim to improve and grow daily, then welcome to the “Burek” team !",
            ].map((content, index) => (
              <div key={index}>{content}</div>
            ))}
            <a href="#Vacancies">
              <Button
                styles={{
                  button: "rounded-sm py-3 w-full uppercase font-bold px-10",
                  bg: "bg-primary",
                  text: "text-secondary",
                  hoverBg: "bg-secondary",
                  hoverText: "text-primary",
                }}
              >
                Apply Now
              </Button>
            </a>
          </div>
          <div>
            <h1 className="mb-8">5 reasons to be one of us</h1>
            <div className="flex flex-col gap-8">
              {[
                {
                  imgSrc: num1,
                  title: "You become part of the Burek Family",
                  content:
                    "Burek family are young individuals who are full of thirsty for knowledge and self-development.",
                },
                {
                  imgSrc: num2,
                  title: "We encourage career growth",
                  content:
                    "We appreciate enterprising employees and offer career growth to the most active.",
                },
                {
                  imgSrc: num3,
                  title: "We welcome mutual assistance and respect each other",
                  content:
                    "Help and respect are key values ​​in our family, so don't be afraid to start your career with us.",
                },
                {
                  imgSrc: num4,
                  title: "We are actively scaling up",
                  content:
                    "We have been on the market for 3 years, but we are still flexible to changes and offer you to join the formation of the history of the big brand.",
                },
                {
                  imgSrc: num5,
                  title: "We care about corporate culture",
                  content:
                    "We know what we want, we have a main goal and we are taking big steps to achieve it. Each of our employees is an important part of the company.",
                },
              ].map((row, index) => (
                <div key={index} className="flex md:p-8 gap-4 items-center">
                  <div className="min-w-32  aspect-square">
                    <img
                      src={row.imgSrc}
                      alt={index + 1}
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-semibold text-2xl">{row.title}</div>
                    <div className="pl-4 border-l-2 border-l-primary">
                      {row.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))] md:sticky md:top-[--md-page-top-padding]">
          <img
            className="size-full object-cover object-center [border-radius:0_0_0_30px]"
            src="https://burek.intexagency.com/wp-content/uploads/2022/06/burek-bold-copy-zaklad.jpg"
          />
        </div>
      </div>
      <div id="Vacancies">
        <h1 className="my-8">Vacancies</h1>
        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-4">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="px-4 pb-4 flex flex-col  gap-4 bg-white rounded-xl shadow-md"
          >
            <div className="font-semibold text-2xl text-center my-4">
              Application Form
            </div>
            <Input
              formProperties={formProperties}
              type="text"
              name="name"
              label="Name"
              placeholder="Enter your name"
              required
              validate={{ pattern: /^[a-zA-Z]+$/, msg: "invalid name" }}
            />
            <Input
              formProperties={formProperties}
              type="text"
              name="phone"
              label="Phone"
              placeholder="Enter your phone number"
              required
              validate={{
                pattern: /^(010|011|012)\d{8}$/,
                msg: "must start with 010 ,011 or 012 followed by 8 numbers ",
              }}
            />
            <Input
              formProperties={formProperties}
              type="mail"
              name="email"
              label="Email"
              placeholder="Enter your email"
              required
              validate={{
                pattern: /\w+@[a-z]+\.[a-zA-Z]{2,}/,
                msg: "invalid mail",
              }}
            />
            <label className="flex flex-col gap-1">
              <div className="flex items-center">
                <div className="flex gap-1 items-center">
                  select a vacancy
                  <span className="text-red-700 text-xl">*</span>
                </div>
                {errors.vacancy && (
                  <div className="text-red-600 flex-1 text-end">
                    {errors.vacancy.message}
                  </div>
                )}
              </div>
              <select
                className="border-2 p-2 rounded-md border-secondary support-hover:hover:cursor-pointer"
                defaultValue=""
                {...register("vacancy", {
                  required: "please select a vacancy",
                  onChange: (e) => {
                    if (e.target.selectedIndex > 0)
                      setShowVacancy(vacancies[e.target.selectedIndex - 1]);
                    else setShowVacancy({});
                  },
                })}
              >
                <option value="" disabled></option>
                <option value="cashier">Cashier</option>
                <option value="chef">Chef</option>
              </select>
            </label>

            <Button
              styles={{
                button: "rounded-md p-2 capitalize font-bold w-40 self-center",
                bg: "bg-primary",
                text: "text-secondary",
                hoverBg: "bg-secondary",
                hoverText: "text-primary",
              }}
              type="submit"
            >
              {isSubmitting ? <div>submiting ....</div> : <div>submit</div>}
            </Button>
          </form>
          <div className="flex flex-col justify-center gap-8 p-4">
            {Object.keys(showVacancy).length > 0 ? (
              <>
                <div className="font-semibold text-2xl text-center">
                  {showVacancy?.vacancy}
                </div>
                <div>
                  <div className="mb-2 font-semibold">placing</div>
                  {showVacancy?.placing}
                </div>

                <div>
                  <div className="mb-2 font-semibold">type</div>
                  {showVacancy?.type}
                </div>

                <div className="pl-4 border-l-2 border-l-primary">
                  {showVacancy?.decribtion}
                </div>
              </>
            ) : (
              <div className=" text-2xl font-semibold flex flex-col justify-center items-center gap-2 capitalize text-center">
                <img src={emptyIcon} alt="" />
                you haven&apos;t choosed a vacancy yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
