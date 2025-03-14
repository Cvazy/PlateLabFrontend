import { StartProjectButton } from "@/app/components";

export const CallToAction = () => {
  return (
    <div className={"flex justify-center w-full"}>
      <div className={"w-[167px]"}>
        <StartProjectButton
          height={"h-9 lg:h-[52px]"}
          bgColor={"bg-red"}
          textColor={"text-white"}
        />
      </div>
    </div>
  );
};
