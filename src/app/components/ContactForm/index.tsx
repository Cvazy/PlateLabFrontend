"use client";

import { Input, Textarea } from "./components";
import { Theme } from "@/app/types";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components";
import { IButton } from "@/app/components/Button/model";

interface IContactForm extends IButton {
  vertical: boolean;
  theme: Theme;
}

export const ContactForm = ({
  vertical,
  theme,
  text,
  bgColor,
  textColor,
  starColor,
  starReverse,
  paddings,
  fontSize,
  borderRadius,
  height,
  disabled,
  type,
}: IContactForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    message: string;
  }) => {
    console.log("Data", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col items-center gap-6 w-full"}
    >
      {!!Object.keys(errors).length && (
        <div className={"flex gap-2 w-full flex-wrap"}>
          <p className={"text-left font-fancy text-red text-xs mr-[-5px]"}>
            Errors list:
          </p>

          {errors.name && (
            <p className={"text-left font-fancy text-red text-xs"}>
              {errors.name?.message}
            </p>
          )}

          {errors.eMail && (
            <p className={"text-left font-fancy text-red text-xs"}>
              {errors.eMail?.message}
            </p>
          )}

          {errors.phone && (
            <p className={"text-left font-fancy text-red text-xs"}>
              {errors.phone?.message}
            </p>
          )}

          {errors.companyName && (
            <p className={"text-left font-fancy text-red text-xs"}>
              {errors.companyName?.message}
            </p>
          )}
        </div>
      )}

      <div className={"flex flex-col w-full"}>
        <div
          className={`${vertical ? "flex flex-col" : "grid lg:grid-cols-2"} w-full`}
        >
          <Input
            type={"text"}
            placeholder={"name"}
            label={"Name"}
            theme={theme}
            index={0}
            vertical={vertical}
            {...register("name", { required: "Name is required" })}
            isError={errors.name !== undefined}
          />

          <Input
            type={"email"}
            placeholder={"name@gmail.com"}
            label={"E-mail"}
            theme={theme}
            index={1}
            vertical={vertical}
            {...register("eMail", {
              required: "E-mail is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email format",
              },
            })}
            isError={errors.eMail !== undefined}
          />

          <Input
            type={"tel"}
            placeholder={"+7 (999) 999 99 99"}
            label={"Phone"}
            theme={theme}
            index={2}
            vertical={vertical}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value:
                  /^\+?[1-9]{1,3}[-\s\.]?\(?\d{1,4}\)?[-\s\.]?\d{1,4}[-\s\.]?\d{1,4}$/im,
                message: "Invalid phone number format",
              },
            })}
            isError={errors.phone !== undefined}
          />

          <Input
            type={"text"}
            placeholder={"company name"}
            label={"Company"}
            theme={theme}
            index={3}
            vertical={vertical}
            {...register("companyName", {
              required: "Company name is required",
            })}
            isError={errors.companyName !== undefined}
          />
        </div>

        <Textarea
          placeholder={"optional"}
          label={"Message"}
          theme={theme}
          vertical={vertical}
          {...register("message")}
        />
      </div>

      <Button
        text={text}
        textColor={textColor}
        fontSize={fontSize}
        bgColor={bgColor}
        paddings={paddings}
        borderRadius={borderRadius}
        starReverse={starReverse}
        starColor={starColor}
        height={height}
        disabled={disabled}
        type={type}
      />
    </form>
  );
};
