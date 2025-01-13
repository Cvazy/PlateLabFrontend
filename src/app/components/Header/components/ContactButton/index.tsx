import Image from "next/image";

export const ContactButton = () => {
  return (
    <div
      role={"button"}
      className={
        "flex items-center rounded bg-dark_gray border border-solid border-gray h-full hover:scale-105"
      }
    >
      <div className={"flex items-center gap-2.5 flex-nowrap px-4"}>
        <p className={"uppercase text-white text-sm !leading-4 font-fancy"}>
          Contact
        </p>

        <Image
          width={19}
          height={18}
          src={"/images/red_logo.svg"}
          alt={"Red logo"}
        />
      </div>
    </div>
  );
};
