"use client";

import { Button } from "@/app/components";
import { Input, Textarea } from "./components";
import { Theme } from "@/app/types";

interface IContactForm {
  vertical: boolean;
}

export const ContactForm = ({ vertical }: IContactForm) => {
  const handleChangeName = () => {};

  const handleChangeEmail = () => {};

  const handleChangePhone = () => {};

  const handleChangeCompanyName = () => {};

  const handleChangeMessage = () => {};

  const handleSubmit = () => {};

  return (
    <div className={"flex flex-col items-center gap-6 w-full"}>
      <div className={"flex flex-col w-full"}>
        <div
          className={`${vertical ? "flex flex-col" : "grid lg:grid-cols-2"} w-full`}
        >
          <Input
            type={"text"}
            onChange={handleChangeName}
            placeholder={"name"}
            label={"Name"}
            theme={Theme.dark}
            index={0}
          />

          <Input
            type={"email"}
            onChange={handleChangeEmail}
            placeholder={"name@gmail.com"}
            label={"E-mail"}
            theme={Theme.dark}
            index={1}
          />

          <Input
            type={"tel"}
            onChange={handleChangePhone}
            placeholder={"+7 (999) 999 99 99"}
            label={"Phone"}
            theme={Theme.dark}
            index={2}
          />

          <Input
            type={"text"}
            onChange={handleChangeCompanyName}
            placeholder={"company name"}
            label={"Company"}
            theme={Theme.dark}
            index={3}
          />
        </div>

        <Textarea
          onChange={handleChangeMessage}
          placeholder={"optional"}
          label={"Message"}
          theme={Theme.dark}
        />
      </div>

      <Button
        text={"Submit"}
        onClick={handleSubmit}
        textColor={"black"}
        fontSize={"text-xl"}
        bgColor={"bg-white"}
        paddings={"px-4 py-[19px] md:py-[21px]"}
        borderRadius={"rounded-[10px]"}
        starReverse={false}
        starColor={"black"}
        height={"h-[52px] md:h-14"}
      />
    </div>
  );
};
