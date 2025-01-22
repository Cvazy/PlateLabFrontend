"use client";

import { Button, ContactForm } from "@/app/components";
import { Theme } from "@/app/types";
import { ReactNode } from "react";

export const Contact = () => {
  const handleSubmit = () => {};

  return (
    <div className={"py-20 w-full"}>
      <div className={"flex flex-col items-start gap-10 w-full"}>
        <h2
          className={
            "text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
          }
        >
          Contact us<span className={"text-gray"}>.</span>
        </h2>

        <ContactForm
          vertical={false}
          theme={Theme.dark}
          button={
            (
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
            ) as ReactNode
          }
        />
      </div>
    </div>
  );
};
