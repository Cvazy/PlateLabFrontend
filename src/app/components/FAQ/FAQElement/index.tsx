import { IFaq } from "@/app/pricing";

interface IFaqElementProps extends Omit<IFaq, "id"> {
  isActive: boolean;
  onClick: () => void;
}

export const FAQElement = ({
  question,
  answer,
  isActive,
  onClick,
}: IFaqElementProps) => {
  return (
    <div
      onClick={isActive ? () => {} : onClick}
      className={`border-b border-solid ${isActive ? "border-light_gray" : "border-[#282828]"} cursor-pointer w-full`}
    >
      <div className={"flex flex-col p-4 w-full"}>
        <div className={"flex items-center justify-between gap-2.5 w-full"}>
          <p
            className={`text-left ${isActive ? "text-white" : "text-[#717171]"} text-sm !leading-none w-full md:text-base lg:text-lg xl:text-xl`}
          >
            {question}
          </p>

          <svg
            width="16"
            height="16"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.71338 0H6.46338V12H5.71338V0Z"
              fill={`${isActive ? "#F63737" : "#282828"}`}
            />

            <path
              d="M12.0884 5.625V6.375L0.0883789 6.375L0.0883789 5.625L12.0884 5.625Z"
              fill={`${isActive ? "#F63737" : "#282828"}`}
            />

            <path
              d="M10.5962 9.97746L10.0659 10.5078L1.58057 2.02251L2.1109 1.49218L10.5962 9.97746Z"
              fill={`${isActive ? "#F63737" : "#282828"}`}
            />

            <path
              d="M2.11092 10.5078L1.58059 9.97745L10.0659 1.49217L10.5962 2.0225L2.11092 10.5078Z"
              fill={`${isActive ? "#F63737" : "#282828"}`}
            />
          </svg>
        </div>

        <div
          className={`overflow-hidden ${isActive ? "max-h-screen" : "max-h-0"} h-full w-full`}
        >
          <div className={"mt-5 w-full"}>
            <p
              className={`font-fancy text-left text-white text-xs !leading-none w-full md:text-sm lg:text-base`}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
