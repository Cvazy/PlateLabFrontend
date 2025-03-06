"use client";

import {
  Before,
  Benefits,
  Comparison,
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

      <Comparison />

      <ParallaxProvider>
        <ParallaxBeforeFooter />
      </ParallaxProvider>
    </div>
  );
}
