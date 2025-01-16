interface IButton {
  text: string;
  onClick: () => void;
  bgColor: string;
  textColor: string;
  starColor: string;
  starReverse: boolean;
  paddings: string;
  fontSize: string;
  borderRadius: string;
  height: string;
}

export const Button = ({
  text,
  onClick,
  bgColor,
  textColor,
  starColor,
  starReverse,
  paddings,
  fontSize,
  borderRadius,
  height,
}: IButton) => {
  return (
    <button
      type={"button"}
      onClick={onClick}
      className={`flex ${starReverse ? "flex-row-reverse" : ""} ${paddings} ${bgColor} ${borderRadius} ${height} items-center gap-4 justify-between w-full hover:scale-[101%]`}
    >
      <p className={`${fontSize} font-fancy !leading-none text-${textColor}`}>
        {text}
      </p>

      <svg
        width="16"
        height="16"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.71338 0H6.46338V12H5.71338V0Z" fill={`${starColor}`} />

        <path
          d="M12.0884 5.625V6.375L0.0883789 6.375L0.0883789 5.625L12.0884 5.625Z"
          fill={`${starColor}`}
        />

        <path
          d="M10.5962 9.97746L10.0659 10.5078L1.58057 2.02251L2.1109 1.49218L10.5962 9.97746Z"
          fill={`${starColor}`}
        />

        <path
          d="M2.11092 10.5078L1.58059 9.97745L10.0659 1.49217L10.5962 2.0225L2.11092 10.5078Z"
          fill={`${starColor}`}
        />
      </svg>
    </button>
  );
};
