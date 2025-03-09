"use client";

import { useState, useEffect, useRef } from "react";
import { HowItsWorkElement } from "@/app/components/HowItsWorkContact/components";
import { IHowItsWork, useFetchAllHowItsWorkElementsQuery } from "@/app/contact";

export const HowItsWorkContact = () => {
  const [activeElement, setActiveElement] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  const { data, isError } = useFetchAllHowItsWorkElementsQuery();

  const howItsWorkElements: IHowItsWork[] = data || [];

  const lastStartTime = useRef<number | null>(null);
  const elapsedTime = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      elapsedTime.current += Date.now() - (lastStartTime.current ?? Date.now());
      if (intervalRef.current)
        clearInterval(intervalRef.current as unknown as number);
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current as unknown as number);
      return;
    }

    lastStartTime.current = Date.now();

    timeoutRef.current = setTimeout(() => {
      setActiveElement((prev) => (prev === 4 ? 1 : (prev ?? 1) + 1));
      elapsedTime.current = 0;
      lastStartTime.current = Date.now();

      intervalRef.current = setInterval(() => {
        setActiveElement((prev) => (prev === 4 ? 1 : (prev ?? 1) + 1));
        elapsedTime.current = 0;
        lastStartTime.current = Date.now();
      }, 5000);
    }, 5000 - elapsedTime.current);

    return () => {
      if (intervalRef.current)
        clearInterval(intervalRef.current as unknown as number);
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current as unknown as number);
    };
  }, [isPaused]);

  return (
    <div className={`flex flex-col w-full`}>
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
        className={`flex flex-col rounded-tl-lg border border-solid border-gray p-4 gap-6 w-full sm:p-6 md:p-9 lg:rounded-none lg:border-none lg:p-0 lg:gap-0`}
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
              setIsPaused={setIsPaused}
              isPaused={isPaused}
            />
          ))}
      </div>

      {/*{isHorizontal && <CallToAction />}*/}
    </div>
  );
};
