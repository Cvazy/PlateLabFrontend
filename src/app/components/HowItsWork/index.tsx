"use client";

import { useState, useEffect } from "react";
import { HowItsWorkElement } from "@/app/components/HowItsWork/components";
import { Loader } from "@/app/components";
import { IHowItsWork, useFetchAllHowItsWorkElementsQuery } from "@/app/contact";

interface IHowItsWorkProps {
  isFAQ: boolean;
}

export const HowItsWork = ({ isFAQ }: IHowItsWorkProps) => {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  const { data, isLoading } = useFetchAllHowItsWorkElementsQuery();

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
    <div
      className={`flex flex-col ${isFAQ ? "lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-10" : "rounded-tl-lg border border-solid border-gray p-4 gap-6 w-full sm:p-6 md:p-9 lg:rounded-none lg:border-none lg:p-0 lg:gap-0"}`}
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
            isFAQ={isFAQ}
          />
        ))}
    </div>
  );
};
