import { GiKnifeFork } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Rating({
  formProperties,
  name = "radio",
  required = false,
}) {
  //--------------------------------------------
  const {
    register,
    formState: { errors },
  } = formProperties;

  const [checkedIndex, setCheckedIndex] = useState(0);
  const stars = Array(5).fill(0);
  //---------------------------------------------

  return (
    <div className="flex flex-col items-center justify-center gap-1 ">
      <div className="relative ">
        <GiKnifeFork className="text-4xl " />
        <GiKnifeFork
          className="text-4xl absolute top-0  left-0 fill-primary"
          style={{
            clipPath: `polygon(0 0,${(checkedIndex * 100) / stars.length}% 0,
            ${(checkedIndex * 100) / stars.length}% 100%,0 100%)`,
          }}
        />
      </div>
      <div className="flex flex-row-reverse gap-2 justify-center items-center ">
        {stars.map((_, index, stars) => (
          <label
            className="relative w-6 fill-slate-400 peer/previous 
              peer-has-[:checked]/previous:fill-primary  support-hover:peer-hover/previous:fill-primary support-hover:hover:fill-primary"
            key={index}
            onClick={() => setCheckedIndex(stars.length - index)}
          >
            <input
              type="radio"
              value={stars.length - index}
              className=" peer/radio appearance-none"
              {...register(name, {
                required: required ? required : false,
              })}
            />
            <FaStar className="text-xl absolute inset-0 peer-checked/radio:fill-primary fill-inherit support-hover:hover:cursor-pointer" />
          </label>
        ))}
      </div>
      {errors[name] && (
        <div className="text-red-600 flex-1 text-end text-[.75rem] md:text-base">
          {errors[name].message}
        </div>
      )}
    </div>
  );
}
