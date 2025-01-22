"use client";

import { Button } from "@/app/components";
import { Input, Textarea } from "./components";
import { Theme } from "@/app/types";
import { ReactNode } from "react";

interface IContactForm {
  vertical: boolean;
  theme: Theme;
  button: ReactNode;
}

export const ContactForm = ({ vertical, theme, button }: IContactForm) => {
  const handleChangeName = () => {};

  const handleChangeEmail = () => {};

  const handleChangePhone = () => {};

  const handleChangeCompanyName = () => {};

  const handleChangeMessage = () => {};

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
            theme={theme}
            index={0}
            vertical={vertical}
          />

          <Input
            type={"email"}
            onChange={handleChangeEmail}
            placeholder={"name@gmail.com"}
            label={"E-mail"}
            theme={theme}
            index={1}
            vertical={vertical}
          />

          <Input
            type={"tel"}
            onChange={handleChangePhone}
            placeholder={"+7 (999) 999 99 99"}
            label={"Phone"}
            theme={theme}
            index={2}
            vertical={vertical}
          />

          <Input
            type={"text"}
            onChange={handleChangeCompanyName}
            placeholder={"company name"}
            label={"Company"}
            theme={theme}
            index={3}
            vertical={vertical}
          />
        </div>

        <Textarea
          onChange={handleChangeMessage}
          placeholder={"optional"}
          label={"Message"}
          theme={theme}
          vertical={vertical}
        />
      </div>

      {button}
    </div>
  );
};
