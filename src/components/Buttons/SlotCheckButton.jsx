export default function SlotCheckButton({
  formProperties,
  label = "label",
  name = "radio",
  required = false,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = formProperties;
  //--------------------------

  //--------------------------
  return (
    <label className="w-full flex justify-between">
      <div className="flex gap-2 items-center">
        {/*------------------Slot-----------------------*/}
        <div className="w-10 h-5 rounded-full relative bg-slate-100 has-[:checked]:bg-secondary">
          <input
            className="peer appearance-none"
            {...rest}
            type="checkbox"
            {...register(name, {
              required: required ? required : false,
            })}
          />
          <div className="h-full aspect-square rounded-full absolute top-0 left-0  peer-checked:right-0 peer-checked:left-auto bg-white border-2" />
        </div>
        <div className="flex items-center gap-1">
          <div>{label}</div>
          {required && <div className="text-red-700 text-xl">*</div>}
        </div>
      </div>
      {errors[name] && (
        <div className="text-red-600 text-[.75rem] md:text-base ">
          {errors[name].message}
        </div>
      )}
    </label>
  );
}
