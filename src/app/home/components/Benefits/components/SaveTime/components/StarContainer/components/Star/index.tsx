import React, { useEffect, useState } from "react";
import styles from "./Star.module.css";

export const Star = () => {
  const [rotationHour, setRotationHour] = useState(0);
  const [rotationMinute, setRotationMinute] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollFactor = 0.5;

    const hourRotation = ((scrollPosition * scrollFactor) / 12) % 360;
    const minuteRotation = (scrollPosition * scrollFactor) % 360;

    setRotationHour(hourRotation);
    setRotationMinute(minuteRotation);

    setLastScroll(scrollPosition);
  };

  useEffect(() => {
    const scrollHandler = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <svg
      width="135"
      height="134"
      viewBox="0 0 135 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_744_7896)">
        <rect
          width="1.4"
          height="60"
          transform="translate(66.4329)"
          fill="#393939"
        />
      </g>
      <g clipPath="url(#clip1_744_7896)">
        <rect
          width="1.4"
          height="60"
          transform="translate(114.014 19.1289) rotate(45)"
          fill="#393939"
        />
      </g>
      <g clipPath="url(#clip2_744_7896)">
        <rect
          width="1.4"
          height="60"
          transform="translate(0.132812 67.6992) rotate(-90)"
          fill="#393939"
        />
      </g>
      <g clipPath="url(#clip3_744_7896)">
        <rect
          width="1.4"
          height="60"
          transform="translate(19.2623 20.1191) rotate(-45)"
          fill="#393939"
        />
      </g>
      <rect
        width="1.4"
        height="60"
        transform="translate(66.4329 74)"
        fill="#393939"
      />
      <g clipPath="url(#clip4_744_7896)">
        <rect
          width="1.4"
          height="60"
          transform="translate(61.6884 71.4551) rotate(45)"
          fill="#393939"
        />
      </g>
      <rect
        width="1.4"
        height="60"
        transform="translate(74.1328 67.6992) rotate(-90)"
        fill="#393939"
      />
      <rect
        width="1.4"
        height="60"
        transform="translate(71.5883 72.4453) rotate(-45)"
        fill="#393939"
      />

      <line
        x1="66.4329"
        y1="60"
        x2="66.4329"
        y2="20"
        stroke="white"
        strokeWidth="1.4"
        className={styles.hourHand}
        transform={`rotate(${rotationHour})`}
      />

      <line
        x1="66.4329"
        y1="60"
        x2="66.4329"
        y2="0"
        stroke="white"
        strokeWidth="1.4"
        className={styles.minuteHand}
        transform={`rotate(${rotationMinute})`}
      />

      <defs>
        <clipPath id="clip0_744_7896">
          <rect
            width="1.4"
            height="60"
            fill="white"
            transform="translate(66.4329)"
          />
        </clipPath>
        <clipPath id="clip1_744_7896">
          <rect
            width="1.4"
            height="60"
            fill="white"
            transform="translate(114.014 19.1289) rotate(45)"
          />
        </clipPath>
        <clipPath id="clip2_744_7896">
          <rect
            width="1.4"
            height="60"
            fill="white"
            transform="translate(0.132812 67.6992) rotate(-90)"
          />
        </clipPath>
        <clipPath id="clip3_744_7896">
          <rect
            width="1.4"
            height="60"
            fill="white"
            transform="translate(19.2623 20.1191) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip4_744_7896">
          <rect
            width="1.4"
            height="60"
            fill="white"
            transform="translate(61.6884 71.4551) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
