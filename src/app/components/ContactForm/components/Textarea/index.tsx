import { IInputProps } from "../../types";

export const Textarea = ({
  label,
  onChange,
  placeholder,
  theme,
}: IInputProps) => {
  return (
    <label
      className={`flex flex-col items-start gap-2 font-fancy !leading-none text-[14px] py-6 w-full border-y border-solid ${theme === 1 ? "text-light_gray border-gray" : "text-gray border-light_gray"} lg:py-2.5`}
    >
      {label}

      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className={`${theme === 1 ? "text-gray text-xl !leading-none h-7 placeholder:text-gray" : "text-light_gray placeholder:text-light_gray"} bg-transparent w-full`}
      />
    </label>
  );
};
