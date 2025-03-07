"use client";

import {
  Before,
  Benefits,
  Difference,
  Gallery,
  MainSwiper,
  ParallaxBeforeFooter,
} from "@/app/home";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <MainSwiper />

      <Difference />

      <Before />

      <Gallery />

      <Benefits />

      <ParallaxProvider>
        <ParallaxBeforeFooter />
      </ParallaxProvider>
    </div>
  );
}
