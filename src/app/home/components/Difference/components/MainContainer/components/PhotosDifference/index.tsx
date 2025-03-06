import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./PhotosDifference.module.css";

export const PhotosDifference = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [shift, setShift] = useState<number | string>("50%");
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const changeRef = useRef<HTMLDivElement | null>(null);

  const updateSlider = (clientX) => {
    if (!sliderRef.current || !beforeRef.current || !changeRef.current) return;

    const rect = sliderRef.current?.getBoundingClientRect();
    const maxShift = rect.width;
    const newShift = Math.max(0, Math.min(clientX - rect.left, maxShift));

    setShift(newShift);

    if (beforeRef.current) {
      if ("style" in beforeRef.current) {
        beforeRef.current.style.width = "100%";
        beforeRef.current.style.clip = `rect(0, ${newShift}px, auto, 0)`;
      }
    }

    if (changeRef.current) {
      if ("style" in changeRef.current) {
        changeRef.current.style.left = `${newShift}px`;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (isActive) {
      updateSlider(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isActive && e.touches[0]) {
      updateSlider(e.touches[0].clientX);
    }
  };

  const handleEnd = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleStart = () => setIsActive(true);

    slider.addEventListener("mousedown", handleStart);
    slider.addEventListener("touchstart", handleStart, { passive: true });
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    return () => {
      slider.removeEventListener("mousedown", handleStart);
      slider.removeEventListener("touchstart", handleStart);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center max-w-[636px] aspect-square px-6 w-full lg:px-0"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="max-w-[517px] aspect-square w-full" ref={sliderRef}>
        <div className={`z-0 relative w-full h-full`}>
          <div
            className="no-transition before w-1/2 absolute h-full left-0 top-0 z-10"
            ref={beforeRef}
          >
            <Image
              width={290}
              height={290}
              src="/images/photo.png"
              alt="Photo image"
              className="max-w-[517px] aspect-square w-full h-full overflow-hidden select-none object-cover object-left absolute top-0 block"
              loading="lazy"
            />
          </div>

          <div
            ref={changeRef}
            style={{ left: `${shift}px` }}
            className={`flex absolute justify-center top-0 z-30 h-full left-1/2 no-transition ${styles.ChangeDriver}`}
          >
            <div
              className="flex justify-center items-center absolute top-[45%] ml-1 cursor-pointer w-[115px] h-[58px] no-transition md:w-[124px] md:h-[68px]" // Устанавливаем положение ползунка
            >
              <Image
                width={124}
                height={68}
                src="/images/toddler.svg"
                alt="Toddler"
                className="w-[115px] h-[58px] select-none no-transition md:w-[124px] md:h-[68px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="no-transition after">
            <Image
              width={290}
              height={290}
              src="/images/ai.png"
              alt="AI image"
              className="max-w-[517px] aspect-square w-full absolute object-cover select-none top-0 block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
