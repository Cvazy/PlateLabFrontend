import { IInputProps } from "../../types";

export const Input = ({
  type,
  label,
  onChange,
  placeholder,
  theme,
  index,
}: IInputProps & { type: string }) => {
  return (
    <label
      className={`flex flex-col items-start gap-1 font-fancy !leading-none text-[14px] py-6 w-full border-t ${index % 2 === 0 && theme === 1 ? "lg:border-r" : "lg:pl-4"} border-solid ${theme === 1 ? "text-light_gray border-gray" : "text-gray border-light_gray"} lg:py-2.5`}
    >
      {label}

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`${theme === 1 ? "text-gray text-xl !leading-none placeholder:text-gray" : "text-light_gray placeholder:text-light_gray"} bg-transparent w-full h-7`}
      />
    </label>
  );
};
