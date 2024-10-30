import ReviewForm from "../components/ReviewForm";
import { FaStar } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";

export default function ReviewsPage() {
  return (
    <div
      className="xl:h-screen xl:overflow-hidden pt-[--page-top-padding]  md:pl-[--md-page-left-padding]  md:pt-[--md-page-top-padding]  p-[--page-padding] grid  xl:grid-cols-2 xl:grid-rows-1
       bg-bgColor
       gap-8
       text-secondary
    "
    >
      <div className="md:overflow-y-auto">
        <h1 className=" mb-8">Reviews</h1>
        <div className="flex flex-col items-center gap-8">
          {[
            {
              name: "Evelyn Foster",
              rating: 3,
              review:
                "I ordered the unicorn steak, and let me tell you, it tasted like rainbows and stardust. The ambiance was out of this world—literally. The only downside? The invisible waitstaff kept bumping into my chair.",
            },
            {
              name: "Lucas Bennett",
              rating: 2,
              review:
                "I tried the quiche, and it simultaneously existed and didn't exist. The flavors oscillated between 'meh' and 'nonexistent.' The decor was a mix of Salvador Dalí and Schrödinger's cat. Would recommend if you're into existential dining.",
            },
            {
              name: "Sophia Mitchell",
              rating: 4,
              review:
                "The spaghetti code linguine was surprisingly well-structured. The 404 Marinara sauce was a bit elusive, but the 418 I'm a teapot tea was spot-on. The decor? Retro CRT monitors and ASCII art. A nerdy delight!",
            },
            {
              name: "Oliver Hayes",
              rating: 4,
              review:
                "The sushi rolls were like Dali paintings—melting and reassembling on the plate. The miso soup whispered existential truths. The waitstaff wore Salvador masks and served sake in hourglasses. A trippy experience!",
            },
          ].map((review, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="bg-white flex flex-col gap-4 p-4 rounded-md shadow-md">
                <div className="capitalize font-bold text-xl">
                  {review.name}
                </div>
                <div className="flex gap-2 text-xl">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i + 1 <= review.rating
                            ? "fill-primary"
                            : "fill-secondary"
                        }`}
                      />
                    ))}
                </div>
                <div>{review.review}</div>
              </div>
              <div className="flex items-center gap-4">
                <BsArrowReturnRight className="text-4xl " />
                <div className="bg-white gap-4 p-4 rounded-md shadow-md flex-1">
                  <div className="capitalize font-bold text-xl">burek</div>A
                  delicious choice! It’s always a treat to enjoy such a savory
                  pastry.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReviewForm className="p-4 border-2 md:min-h-[calc(100vh-var(--md-page-top-padding)-var(--page-padding))] md:overflow-y-auto" />
    </div>
  );
}
