import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { ITransformComparisons } from "../../model";
import { Decorations } from "./components";
import { ReactNode, useState } from "react";

interface MobileVersionProps {
  comparisons: ITransformComparisons[];
}

export const MobileVersion = ({ comparisons }: MobileVersionProps) => {
  const [isLastSlide, setIsLastSlide] = useState(false);

  const uniqueElementNames =
    comparisons[0]?.elements.map((el) => el.name) || [];

  return (
    <div className={"w-full h-full"}>
      <div className={"p-10 w-full h-full"}>
        <div className={"relative w-full h-full"}>
          <Decorations />

          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={{
              releaseOnEdges: true,
            }}
            pagination={{
              clickable: true,
            }}
            onReachEnd={() => setIsLastSlide(true)}
            onSlideChange={({ isEnd }) => setIsLastSlide(isEnd)}
            modules={[Mousewheel, Pagination]}
            className={`comparison_swiper h-full ${
              isLastSlide ? "swiper-disable-scroll" : ""
            }`}
          >
            {uniqueElementNames &&
              uniqueElementNames.map(
                (name, index) =>
                  (
                    <SwiperSlide key={index}>
                      <div
                        className={
                          "flex items-center justify-center relative w-full h-full"
                        }
                      >
                        <div
                          className={"flex flex-col items-center gap-10 w-full"}
                        >
                          <div
                            className={
                              "flex flex-col items-center gap-2 w-full"
                            }
                          >
                            <p
                              className={
                                "text-center text-[32px] text-white leading-[40px] sm:text-4xl md:text-5xl"
                              }
                            >
                              {comparisons[0].title}
                            </p>
                            <p
                              className={
                                "text-center font-fancy text-lg text-white sm:text-xl md:text-2xl"
                              }
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html:
                                    comparisons[0].elements.find(
                                      (el) => el.name === name,
                                    )?.value || "",
                                }}
                              />
                            </p>
                          </div>

                          <div className={"w-10 h-px bg-gray"}></div>

                          <div
                            className={
                              "flex flex-col items-center gap-2 w-full"
                            }
                          >
                            <p
                              className={
                                "text-center text-[32px] text-red leading-[40px] sm:text-4xl md:text-5xl"
                              }
                            >
                              {comparisons[1].title}
                            </p>
                            <p
                              className={
                                "text-center font-fancy text-lg text-white sm:text-xl md:text-2xl"
                              }
                            >
                              <span
                                dangerouslySetInnerHTML={{
                                  __html:
                                    comparisons[1].elements.find(
                                      (el) => el.name === name,
                                    )?.value || "",
                                }}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ) as ReactNode,
              )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
