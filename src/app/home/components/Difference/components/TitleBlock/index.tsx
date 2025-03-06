export const TitleBlock = () => {
  return (
    <div className={"w-full"}>
      <div className={"px-5 py-6 w-full lg:p-0"}>
        <div className={"flex flex-col items-center gap-2 w-full lg:gap-0"}>
          <h2 className="text-center text-[32px] !leading-10 w-full sm:text-4xl sm:!leading-[44px] md:text-[40px] md:!leading-[54px] lg:text-5xl lg:!leading-[60px] xl:text-[54px] xl:!leading-[68px]">
            Can you spot the difference?
          </h2>

          <p
            className={
              "text-light_gray text-center text-lg !leading-[22px] md:text-xl md:!leading-[28px] lg:text-2xl lg:!leading-[30px]"
            }
          >
            Same realism, but the <span className="text-red">price</span> change
            everything
          </p>
        </div>
      </div>
    </div>
  );
};
