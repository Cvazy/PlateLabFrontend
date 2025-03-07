import { useState, useEffect, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import styles from "./PhotosDifference.module.css";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";

interface IPhotosDifferenceProps {
  onOpacityChange: (left: number, right: number) => void;
  setShiftPercentage: (value: ((prevState: number) => number) | number) => void;
  DefaultPhotoPath: string;
  AIPhotoPath: string;
}

export const PhotosDifference = ({
  onOpacityChange,
  setShiftPercentage,
  DefaultPhotoPath,
  AIPhotoPath,
}: IPhotosDifferenceProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [shift, setShift] = useState<number | string>("50%");
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const changeRef = useRef<HTMLDivElement | null>(null);

  const updateSlider = (clientX: number) => {
    if (!sliderRef.current || !beforeRef.current || !changeRef.current) return;

    const rect = sliderRef.current?.getBoundingClientRect();
    const maxShift = rect.width;
    const newShift = Math.max(0, Math.min(clientX - rect.left, maxShift));
    const shiftPercentage = (newShift / maxShift) * 100;

    setShift(newShift);
    setShiftPercentage(shiftPercentage);

    const leftOpacity = 0.2 + 0.9 * (1 - shiftPercentage / 100);
    const rightOpacity = 0.2 + 0.9 * (shiftPercentage / 100);

    onOpacityChange(leftOpacity, rightOpacity);

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

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isActive) {
      updateSlider(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
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
      className="flex items-center justify-center max-w-[636px] aspect-square w-full"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="max-w-[517px] aspect-square w-full" ref={sliderRef}>
        <div className={`z-0 relative w-full h-full`}>
          <div
            className="no-transition before w-1/2 absolute h-full left-0 top-0 z-10"
            ref={beforeRef}
          >
            {DefaultPhotoPath.length > 0 && (
              <CustomImage
                width={290}
                height={290}
                src={DefaultPhotoPath}
                alt={"Photo Image"}
                loading={"lazy"}
                loader={imageLoader}
                className={
                  "max-w-[517px] aspect-square w-full h-full overflow-hidden select-none object-cover object-left absolute top-0 block rounded-l-full"
                }
              />
            )}
          </div>

          <div
            ref={changeRef}
            style={{ left: `${shift}px` }}
            className={`flex absolute justify-center top-0 z-30 h-full left-1/2 no-transition ${styles.ChangeDriver}`}
          >
            <div
              className="flex justify-center items-center absolute top-[43.5%] ml-1 cursor-pointer w-[115px] h-[58px] no-transition md:w-[124px] md:h-[68px]" // Устанавливаем положение ползунка
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
            {AIPhotoPath.length > 0 && (
              <CustomImage
                width={290}
                height={290}
                src={AIPhotoPath}
                alt={"AI Image"}
                loading={"lazy"}
                loader={imageLoader}
                className={
                  "max-w-[517px] aspect-square w-full absolute object-cover select-none top-0 block rounded-r-full"
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
