import { Before, Benefits, Comparison, Gallery, MainSwiper } from "@/app/home";
import { Contact, InformationBlock } from "@/app/components";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <MainSwiper />

      <Before />

      <Gallery />

      <Benefits />

      <Comparison />

      <div className={"flex flex-col items-center w-full"}>
        <div className={"max-w-limitation w-full"}>
          <div className={"px-5 w-full sm:px-6 md:px-8 lg:px-10"}>
            <InformationBlock />

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
