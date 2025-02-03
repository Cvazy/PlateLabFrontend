"use client";

import {
  Before,
  Benefits,
  Comparison,
  Gallery,
  MainSwiper,
  ParallaxBeforeFooter,
} from "@/app/home";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <MainSwiper />

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
