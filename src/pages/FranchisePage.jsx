import Button from "../components/Buttons/Button";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
//----------------------------------------------------
import benefit1Img from "../assets/franchisepageImgs/benefit-1.svg";
import benefit2Img from "../assets/franchisepageImgs/benefit-2.svg";
import benefit3Img from "../assets/franchisepageImgs/benefit-3.svg";
import benefit4Img from "../assets/franchisepageImgs/benefit-4.svg";
import benefit5Img from "../assets/franchisepageImgs/benefit-5.svg";
import benefit6Img from "../assets/franchisepageImgs/benefit-6.svg";
import _3yearsImg from "../assets/franchisepageImgs/3years.svg";
import _100KImg from "../assets/franchisepageImgs/100K.svg";
import footerbgImg from "../assets/franchisepageImgs/footer-bg.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import ApplyForm from "../components/ApplyForm";
import Carousel from "../components/Carousel";
//----------------------------------------------------
export default function FranchisePage() {
  const [showModal, setShowModal] = useState(false);
  //--------------------------------------------------
  return (
    <div className="w-full min-h-screen pt-[--page-top-padding]  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  p-[--page-padding] pb-0 text-secondary bg-bgColor">
      <div className=" grid  lg:grid-cols-2 gap-2">
        <div className="mb-16">
          <div className="mb-16 flex flex-col items-center gap-12 ">
            <h1 className=" w-full"> Start business</h1>
            <div className="w-full px-8 grid grid-cols-2 grid-rows-3  items-center  md:text-2xl font-semibold gap-8  lg:text-left">
              {[
                {
                  benefit: "Initial investment",
                  duration: "from 20,000$",
                },
                {
                  benefit: "Payback period",
                  duration: "9 - 12 months",
                },
                {
                  benefit: "Profitability",
                  duration: "from 6th month",
                },
              ].map((row) => (
                <Fragment key={row.benefit}>
                  <div className="even:text-primary">{row.benefit}</div>
                  <div className="even:text-primary">{row.duration}</div>
                </Fragment>
              ))}
            </div>
            <div className="px-8 flex flex-col items-center gap-16 text-pretty">
              <div>
                Our history began in 2018 with the first institution in Lviv as
                a grand plan to reform people’s thinking about food culture. At
                this time, we have already opened 17 cozy locations in different
                parts of Lviv and are open to the expansion of our chain through
                franchise agreements.
              </div>
              <Button
                styles={{
                  button: "rounded-sm py-3 w-full uppercase font-bold max-w-60",
                  bg: "bg-primary",
                  text: "text-secondary",
                  hoverBg: "bg-secondary",
                  hoverText: "text-primary",
                }}
                onClick={() => setShowModal(true)}
              >
                Apply
              </Button>
              {showModal && (
                <ApplyForm closeModal={() => setShowModal(false)} />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-12">
            <h1 className="  w-full">Our success</h1>
            <div className="grid grid-cols-2 grid-rows-3 gap-y-12 items-center justify-items-center">
              {[
                {
                  number: 1,
                  category: "Technology",
                  paragraph:
                    "The perfect product is created. It guarantees constant product turnover and a minimum percentage of write-offs.",
                  benefit: "Write-offs",
                  benefitPercentage: "1%",
                },
                {
                  number: 2,
                  category: "System",
                  paragraph:
                    "We have developed and tested a business model and taken into account all details related to suppliers and consumers.",
                  benefit: "Profitability",
                  benefitPercentage: "up to 20%",
                },
                {
                  number: 3,
                  category: "Experience",
                  paragraph:
                    "Our experience will help you use only proven methods of work. And the more experience - the less risk.",
                  benefit: "Experience",
                  benefitPercentage: "3 years",
                },
              ].map((row) => (
                <Fragment key={row.benefit}>
                  <div className="font-bold text-5xl text-primary">
                    {row.number}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="font-bold text-xl">{row.category}</div>
                    <div className="px-2 border-l-2 border-slate-300">
                      {row.paragraph}
                      <div className="mt-2 font-bold">
                        {row.benefit}
                        <span className="text-primary ml-2">
                          {row.benefitPercentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div>
              Monthly orders amount growth
              <span className="text-primary font-bold"> - 10%</span>
            </div>
          </div>
        </div>
        <div className="md:h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))] md:sticky md:top-[--md-page-top-padding] mb-16">
          <div className="md:h-full  overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src="https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1.jpg"
              alt=""
              loading="lazy"
              srcSet="https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1.jpg 1061w, https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1-236x300.jpg 236w, https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1-806x1024.jpg 806w, https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1-768x976.jpg 768w, https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1-600x762.jpg 600w, https://burek.com.ua/wp-content/uploads/2021/04/img_5305-1-1-110x140.jpg 110w"
              sizes="(max-width: 1061px) 100vw, 1061px"
            ></img>
          </div>
        </div>
      </div>

      {/*------------------------ Key benefits -----------------------------*/}
      <div className="w-full flex flex-col gap-12 items-center">
        <h1 className=" w-full">Key benefits</h1>
        <div className=" flex flex-wrap justify-center gap-8">
          {[
            {
              img: benefit1Img,
              benefit: "Modern website",
              paragraph:
                "We launch a fully working site, constantly maintain and update it",
            },
            {
              img: benefit2Img,
              benefit: "Order with smartphone",
              paragraph:
                "70% of customers order from mobile devices, so we took care of the convenience of ordering from phones.",
            },
            {
              img: benefit3Img,
              benefit: "Brand advertising",
              paragraph:
                "Everything has already been tested and configured. We launch the most effective promotion models",
            },
            {
              img: benefit4Img,
              benefit: "Personnel training",
              paragraph:
                "During 3 years thousands of people came to us for various vacancies. We have experience to share with",
            },
            {
              img: benefit5Img,
              benefit: "Call-center",
              paragraph:
                "Professional operators quickly serve a large number of customers from all cities and industries",
            },
            {
              img: benefit6Img,
              benefit: "Working system",
              paragraph:
                "All orders are placed through the CRM-system and in a convenient format are transferred to the administrator of the institution",
            },
          ].map((card) => (
            <div
              className="flex flex-col items-center justify-center w-72 md:w-96 gap-4 p-4 text-center "
              key={card.benefit}
            >
              <div>
                <img src={card.img} alt="" />
              </div>
              <div className="font-semibold text-2xl">{card.benefit}</div>
              <div>{card.paragraph}</div>
            </div>
          ))}
        </div>
        <Carousel className=" w-full md:w-2/3 h-[500px]">
          {[
            {
              img: _3yearsImg,
              paragraph: "of successfull business",
            },
            {
              img: _100KImg,
              paragraph: "satisfied customers",
            },
          ].map((row) => (
            <div
              key={row.paragraph}
              className="flex flex-col items-center justify-evenly  text-center px-4 h-full w-full relative"
              style={{
                backgroundImage: "linear-gradient(90deg,orange,white,orange)",
                clipPath:
                  "polygon(10% 0,90% 0,100% 10%,100% 100%,10% 100%,0 90%,0 10%)",
              }}
            >
              <div className="w-1/2 ">
                <img src={row.img} alt="" className="size-full object-cover" />
              </div>
              <div className="font-bold text-3xl capitalize">
                {row.paragraph}
              </div>
              <div
                className="absolute top-0 right-0 w-[10%] h-[10%]"
                style={{
                  backgroundImage: "linear-gradient(90deg,orange,white,orange)",
                  clipPath: "polygon(0 0,0 100%,100% 100%)",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-[10%] h-[10%] "
                style={{
                  backgroundImage: "linear-gradient(90deg,orange,white,orange)",
                  clipPath: "polygon(0 0,100% 0%,100% 100%)",
                }}
              ></div>
              <div
                className="absolute top-0 left-0 w-[10%] h-[10%] "
                style={{
                  backgroundImage: "linear-gradient(90deg,orange,white,orange)",
                  clipPath: "polygon(100% 0%,100% 100%,0 100%)",
                }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
      {/*--------------------------- Footer --------------------------------*/}
      <div>
        <div
          className="mt-16 text-white flex flex-col justify-center gap-16  font-bold p-8 h-[640px]  md:items-start items-center text-center"
          style={{
            backgroundImage: `url(${footerbgImg})`,
            backgroundPosition: "left 10% bottom 20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="uppercase">burek franchise</div>
          <div className="text-5xl capitalize">{"burek - it's..."}</div>
          <div>
            Your opportunity to gain from
            <span className="text-secondary"> $ 2000</span> per month
          </div>
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
            Apply
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 min-h-52  justify-evenly items-center font-bold text-secondary p-4">
          {[
            {
              logo: <FaPhoneAlt />,
              text: "+380 98 334 3344",
              linkPath: "tel:+380 98 334 3344",
            },
            {
              logo: <TbMessages />,
              text: "burek.lviv@gmail.com",
              linkPath: "mailto:burek.lviv@gmail.com",
            },

            {
              logo: <FaFacebookF />,
              text: "Facebook",
              linkPath: "https://www.facebook.com/bureklviv",
            },
          ].map((contact) => (
            <Link
              target="_blank"
              key={contact.text}
              to={contact.linkPath}
              className="flex gap-2 justify-between items-center support-hover:hover:text-primary"
            >
              <div className="text-xl">{contact.logo}</div>
              <div>{contact.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
