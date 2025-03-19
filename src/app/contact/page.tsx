"use client";

import { FormToConnection } from "./components";
import { HowItsWorkContact } from "@/app/components";

const ContactPage = () => {
  return (
    <div className={"flex justify-center pt-20 w-full overflow-x-hidden"}>
      <div
        className={
          "flex justify-center px-5 w-full h-full sm:px-6 md:px-8 lg:px-10"
        }
      >
        <div className={"max-w-limitation w-full"}>
          <div className={"pt-20 pb-20 w-full h-full lg:pt-[60px]"}>
            <div
              className={
                "flex flex-col gap-20 w-full h-full lg:grid lg:grid-cols-2 lg:gap-0"
              }
            >
              <div className={"w-full"}>
                <div
                  className={
                    "flex flex-col items-center gap-10 w-full sm:gap-12 md:gap-14 lg:pt-7 lg:gap-16 xl:pt-10 xl:gap-[77px]"
                  }
                >
                  <h1
                    className={
                      "hidden text-[32px] text-white text-center !leading-[normal] lg:block xl:text-4xl"
                    }
                  >
                    How it works?
                  </h1>

                  <HowItsWorkContact />
                </div>
              </div>

              <FormToConnection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
