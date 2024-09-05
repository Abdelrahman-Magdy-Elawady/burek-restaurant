import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
export default function RadioButton({
  formProperties,
  label = "label",
  name = "radio",
  required = false,
  styles = {
    box: "border-2 border-black rounded-md p-3",
    check: "text-black text-xl",
  },
  className,
  ...rest
}) {
  //---------------------------------
  const {
    register,
    formState: { errors },
  } = formProperties;

  //----------------------------------
  return (
    <label
      className={`relative block ${
        styles?.box ?? "border-2 border-black rounded-md p-3"
      } ${className}`}
    >
      <input
        type="radio"
        {...register(name, {
          required: required || false,
        })}
        className={`appearance-none absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 peer/radio `}
        {...rest}
      />
      <IoIosCheckmarkCircle
        className={`hidden peer-checked/radio:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white ${
          styles?.check ?? "text-black text-xl "
        } `}
      />
      <IoIosCheckmarkCircleOutline
        className={` peer-checked/radio:hidden absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-white ${
          styles?.check ?? "text-black text-xl "
        } `}
      />
      {label}
      {errors[name] && (
        <div className="text-red-600 text-[.75rem] md:text-base">
          {errors[name].message}
        </div>
      )}
    </label>
  );
}
