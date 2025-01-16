import { ContactForm } from "@/app/components";

export const Contact = () => {
  return (
    <div className={"py-20 w-full"}>
      <div className={"flex flex-col items-start gap-10 w-full"}>
        <h2
          className={
            "text-[32px] text-white !leading-none sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[54px]"
          }
        >
          Contact us<span className={"text-gray"}>.</span>
        </h2>

        <ContactForm vertical={false} />
      </div>
    </div>
  );
};
