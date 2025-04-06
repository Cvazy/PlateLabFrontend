import {
  Before,
  Benefits,
  Difference,
  Gallery,
  MainSwiper,
  ParallaxBeforeFooter,
} from "@/app/home";
import { SITE_NAME } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | " + SITE_NAME,
};

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <MainSwiper />

      <Difference />

      <Before />

      <Gallery />

      <Benefits />

      <ParallaxBeforeFooter />
    </div>
  );
}
