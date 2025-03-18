import { IHowItsWork } from "@/app/contact";

export const HowItsWorkElementMobile = ({
  title,
  description,
  numElement,
}: Omit<IHowItsWork, "id"> & {
  numElement: number;
}) => {
  return (
    <div
      className={`flex items-start gap-5 w-full sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10`}
    >
      <div className={`flex flex-col items-center gap-5 w-8`}>
        <p className={"text-2xl text-red text-center"}>0{numElement}</p>
      </div>

      <div className={`flex flex-col items-start gap-2.5 w-full`}>
        <p className={`text-white !leading-[normal] text-2xl`}>{title}:</p>

        <p
          className={`font-fancy text-base text-light_gray !leading-[normal] lg:text-[15px]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
