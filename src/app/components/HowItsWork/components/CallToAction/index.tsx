import { Button } from "@/app/components";

export const CallToAction = () => {
  const handleClickScroll = () => {
    const contactBlock = document.getElementById("contact");
    if (contactBlock) {
      window.scrollTo({ top: contactBlock.offsetTop - 40, behavior: "smooth" });
    } else {
      console.warn("Element with ID 'contact' not found");
    }
  };

  return (
    <div className={"border border-solid border-gray rounded w-full"}>
      <div className={"p-4 w-full lg:px-5 lg:py-2.5 xl:px-6"}>
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

          <div className={"w-[148px] lg:w-[138px]"}>
            <Button
              text={"Contacts us"}
              textColor={"black"}
              fontSize={"text-[15px] lg:text-sm"}
              bgColor={"bg-white"}
              paddings={"px-4 py-3 lg:py-2"}
              borderRadius={"rounded"}
              onClick={handleClickScroll}
              starReverse={true}
              starColor={"black"}
              height={"h-10 lg:h-8"}
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
