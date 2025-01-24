import { IInputProps } from "../../model/types";
import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  IInputProps & { type: string }
>(
  (
    { type, label, placeholder, theme, vertical, isError, index, ...props },
    ref,
  ) => {
    return (
      <label
        className={`flex flex-col items-start gap-1 font-fancy !leading-none text-[14px] py-6 w-full border-t ${index !== undefined && index % 2 === 0 && theme === 1 && !vertical ? "lg:border-r" : vertical ? "" : "lg:pl-4"} border-solid ${theme === 1 ? "text-light_gray border-gray" : "text-gray border-light_gray"} ${isError ? "text-[#f24848]" : ""} lg:py-2.5`}
      >
        {label}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...props}
          className={`${theme === 1 ? `!text-gray text-xl !leading-none ${isError ? "placeholder:text-[#f24848]" : "placeholder:text-gray"}` : `!text-light_gray ${isError ? "placeholder:text-[#f24848]" : "placeholder:text-light_gray"}`} bg-transparent w-full h-7`}
        />
      </label>
    );
  },
);

Input.displayName = "Input";
