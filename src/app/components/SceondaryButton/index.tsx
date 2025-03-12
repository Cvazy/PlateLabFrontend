import { useState } from "react";

interface ISceondaryButtonProps {
  height: string;
}

export const SceondaryButton = ({ height }: ISceondaryButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={"button"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center w-[115px] ${height}`}
    >
      <div
        className={
          "flex justify-center items-center relative flex-nowrap px-4 w-full h-full"
        }
      >
        <p
          className={
            "text-sm font-fancy !leading-none text-white text-center whitespace-nowrap"
          }
        >
          View Cases
        </p>

        <div className={"absolute top-0 left-0"}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.56373 1.96861C6.52216 2.00468 6.46897 2.02454 6.41394 2.02454L2.88668 2.02454C2.83165 2.02454 2.77846 2.00468 2.73689 1.96861L1.44361 0.846544C1.28383 0.707922 1.38187 0.445324 1.5934 0.445324L7.70722 0.445324C7.91875 0.445324 8.01679 0.707921 7.85702 0.846543L6.56373 1.96861Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
            <path
              d="M1.65611 3.04687C1.69218 3.08844 1.71204 3.14162 1.71204 3.19666L1.71204 6.72391C1.71204 6.77895 1.69218 6.83213 1.65611 6.8737L0.534043 8.16699C0.395421 8.32677 0.132823 8.22873 0.132823 8.0172L0.132824 1.90337C0.132824 1.69184 0.395421 1.5938 0.534043 1.75358L1.65611 3.04687Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
          </svg>
        </div>

        <div className={"absolute top-0 right-0"}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.7019 1.96861C1.74347 2.00468 1.79665 2.02454 1.85169 2.02454L5.37894 2.02454C5.43398 2.02454 5.48716 2.00468 5.52873 1.96861L6.82202 0.846544C6.98179 0.707922 6.88376 0.445324 6.67223 0.445324L0.558401 0.445324C0.346872 0.445324 0.548834 0.707921 0.40861 0.846543L1.7019 1.96861Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
            <path
              d="M6.60951 3.04687C6.57345 3.08844 6.55359 3.14162 6.55359 3.19666L6.55359 6.72391C6.55359 6.77895 6.57345 6.83213 6.60951 6.8737L7.73158 8.16699C7.8702 8.32677 8.1328 8.22873 8.1328 8.0172L8.1328 1.90337C8.1328 1.69184 7.8702 1.5938 7.73158 1.75358L6.60951 3.04687Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
          </svg>
        </div>

        <div className={"absolute bottom-0 left-0"}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.56373 6.92201C6.52216 6.88595 6.46897 6.86609 6.41394 6.86609L2.88668 6.86609C2.83165 6.86609 2.77846 6.88595 2.73689 6.92201L1.44361 8.04408C1.28383 8.1827 1.38187 8.4453 1.5934 8.4453L7.70722 8.4453C7.91875 8.4453 8.01679 8.1827 7.85702 8.04408L6.56373 6.92201Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
            <path
              d="M1.65611 5.84376C1.69218 5.80219 1.71204 5.749 1.71204 5.69397L1.71204 2.16671C1.71204 2.11168 1.69218 2.05849 1.65611 2.01692L0.534043 0.723635C0.39542 0.56386 0.132823 0.661898 0.132823 0.873427L0.132824 6.98725C0.132824 7.19878 0.395421 7.29682 0.534043 7.13705L1.65611 5.84376Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
          </svg>
        </div>

        <div className={"absolute bottom-0 right-0"}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.7019 6.92201C1.74347 6.88595 1.79665 6.86609 1.85169 6.86609L5.37894 6.86609C5.43398 6.86609 5.48716 6.88594 5.52873 6.92201L6.82202 8.04408C6.9818 8.1827 6.88376 8.4453 6.67223 8.4453L0.558401 8.4453C0.346872 8.4453 0.548834 8.1827 0.40861 8.04408L1.7019 6.92201Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
            <path
              d="M6.60951 5.84376C6.57345 5.80219 6.55359 5.749 6.55359 5.69397L6.55359 2.16671C6.55359 2.11168 6.57345 2.05849 6.60951 2.01692L7.73158 0.723635C7.8702 0.563859 8.1328 0.661897 8.1328 0.873426L8.1328 6.98725C8.1328 7.19878 7.8702 7.29682 7.73158 7.13704L6.60951 5.84376Z"
              fill="white"
              fillOpacity={isHovered ? "1.0" : "0.5"}
            />
          </svg>
        </div>
      </div>
    </button>
  );
};
