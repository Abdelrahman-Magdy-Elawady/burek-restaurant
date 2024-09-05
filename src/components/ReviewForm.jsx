import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Buttons/Button";
import SlotCheckButton from "./Buttons/SlotCheckButton";
import Rating from "./Rating";
import { useState } from "react";
//--------------------------------------------------------
export default function ReviewForm({ className, style }) {
  const formProperties = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = formProperties;

  const [reviewSymbol, setReviewSymbol] = useState(true);
  //--------------------------------------------------------
  const submitHandler = async (data) => {
    //send data to backend ,but i don't have backend now
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(data);
    reset();
    setReviewSymbol(!reviewSymbol);
  };
  //--------------------------------------------------------
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={`bg-white flex flex-col items-stretch justify-between gap-4 ${className}`}
      style={style}
    >
      <div className="text-center font-bold text-3xl">Leave a review</div>
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

      <Rating
        formProperties={formProperties}
        name="rating"
        required="Please give us a rating"
        key={reviewSymbol}
      />

      <label className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>Comment</div>
          {errors.comment && (
            <div className="text-red-600 text-[.75rem] md:text-base">
              {errors.comment.message}
            </div>
          )}
        </div>
        <textarea
          className="p-2 resize-none  border-2 rounded-md"
          {...register("comment", {
            required: "Your comment is required",
          })}
          placeholder="Please, leave us your comment"
        />
      </label>
      <SlotCheckButton
        formProperties={formProperties}
        name="TermsAgreement"
        label="I agree to the processing of personal data"
        required="required field"
      />

      <Button
        styles={{
          button:
            "rounded-md p-2 capitalize font-bold w-40 self-center min-h-10",
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
  );
}
