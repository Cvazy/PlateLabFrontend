import Image from "next/image";
import { MainSwiper } from "@/app/home";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <MainSwiper />
    </div>
  );
}
