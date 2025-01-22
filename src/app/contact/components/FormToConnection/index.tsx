"use client";

import styles from "./FormToConnection.module.css";

import { Button, ContactForm } from "@/app/components";
import { Theme } from "@/app/types";
import { ReactNode, useState } from "react";

export const FormToConnection = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const handleSubmit = () => {};

  return (
    <div className={"bg-white rounded-lg w-full"}>
      <div className={"p-5 w-full h-full sm:p-6 md:p-7 lg:p-8 xl:p-10"}>
        <div
          className={
            "flex flex-col items-center gap-20 w-full h-full lg:justify-between"
          }
        >
          <h2
            className={
              "text-[28px] text-black text-center !leading-[normal] md:text-3xl lg:text-[32px] xl:text-4xl"
            }
          >
            Fill out the form to <br /> connect
          </h2>

          <div className={"flex flex-col items-start gap-6 w-full"}>
            <ContactForm
              vertical={true}
              theme={Theme.light}
              button={
                (
                  <Button
                    text={"Submit"}
                    onClick={handleSubmit}
                    textColor={"white"}
                    fontSize={"text-base md:text-xl"}
                    bgColor={"bg-black"}
                    paddings={"px-4 py-4 md:py-5"}
                    borderRadius={"rounded-[10px]"}
                    starReverse={false}
                    starColor={"#A0A0A0"}
                    height={"h-12 md:h-14"}
                  />
                ) as ReactNode
              }
            />

            <label
              className={
                "flex justify-start items-center text-sm font-fancy !leading-none text-light_gray w-full"
              }
            >
              <input
                type={"checkbox"}
                checked={checked}
                name={"agree"}
                className={`${styles.input}`}
                onChange={() => setChecked(!checked)}
              />
              <span
                className={`${styles.span} ${checked ? "bg-black" : "bg-white"}`}
              ></span>
              I agree with the{" "}
              <a href={"#"} className={"text-gray ml-1 hover:text-red"}>
                Terms of Conditions
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
