import { RedButton } from "@/app/components";

export const CallToAction = () => {
  return (
    <div
      className={
        "flex flex-col justify-between items-start gap-6 w-full lg:flex-row lg:items-center"
      }
    >
      <p
        className={
          "font-fancy text-base text-light_gray text-left !leading-none lg:text-white lg:text-[15px]"
        }
      >
        After our first discussion, we offer you a selection of photography
        styles. You choose the one that best fits your vision.
      </p>

      <RedButton height={"h-9 lg:h-[52px]"} />
    </div>
  );
};
