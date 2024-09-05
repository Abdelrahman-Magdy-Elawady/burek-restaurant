export default function Input({
  formProperties,
  label = "label",
  name = "name",
  required = false,
  validate = false,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = formProperties;
  //--------------------------

  //--------------------------
  return (
    <label className="flex flex-col gap-1 mb-1">
      <div className="flex items-center gap-1">
        <div>{label}</div>
        {required && <div className="text-red-700 text-xl">*</div>}
        {errors[name] && (
          <div className="text-red-600 flex-1 text-end text-[.75rem] md:text-base">
            {errors[name].message}
          </div>
        )}
      </div>
      <input
        className="w-full border-2 border-secondary rounded-md p-2"
        {...rest}
        {...register(name, {
          required: required ? `${label} is required` : false,
          validate: validate
            ? (value) => {
                if (!value.match(validate?.pattern)) {
                  return validate?.msg ?? true;
                }
                return true;
              }
            : false,
        })}
      />
    </label>
  );
}
