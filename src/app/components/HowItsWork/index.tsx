"use client";

import { useState, useEffect } from "react";
import {
  CallToAction,
  HowItsWorkElement,
} from "@/app/components/HowItsWork/components";
import { Loader } from "@/app/components";
import { IHowItsWork, useFetchAllHowItsWorkElementsQuery } from "@/app/contact";

interface IHowItsWorkProps {
  isHorizontal: boolean;
}

export const HowItsWork = ({ isHorizontal }: IHowItsWorkProps) => {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  const { data, isError, isLoading } = useFetchAllHowItsWorkElementsQuery();

  const howItsWorkElements: IHowItsWork[] = data || [];

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      setActiveElement(1);
    }, 0);

    const interval = setInterval(() => {
      setActiveElement((prev) => (prev === 4 ? 1 : (prev ?? 1) + 1));
    }, 3000);

    return () => {
      clearTimeout(startAnimation);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`flex flex-col ${isHorizontal ? "gap-[60px]" : ""} w-full`}>
      {isError && (
        <p
          className={
            "text-center font-fancy text-red text-sm w-full md:text-base lg:text-3xl"
          }
        >
          An error occurred during the request. Try to reload the page or come
          back later.
        </p>
      )}

      <div
        className={`flex flex-col ${isHorizontal ? "gap-6 lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-10" : "rounded-tl-lg border border-solid border-gray p-4 gap-6 sm:p-6 md:p-9 lg:rounded-none lg:border-none lg:p-0 lg:gap-0"} w-full`}
      >
        {howItsWorkElements &&
          howItsWorkElements.map(({ id, title, description }, index) => (
            <HowItsWorkElement
              key={id}
              isActive={activeElement === index + 1}
              title={title}
              description={description}
              numElement={index + 1}
              isTheFirst={index === 0}
              isTheLast={index === howItsWorkElements.length - 1}
              isHorizontal={isHorizontal}
            />
          ))}
      </div>

      {isHorizontal && <CallToAction />}
    </div>
  );
};
