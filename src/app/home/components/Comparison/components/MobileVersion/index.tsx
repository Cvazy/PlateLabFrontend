import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { ITransformComparisons } from "../../model";
import { Decorations } from "./components";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

interface MobileVersionProps {
  comparisons: ITransformComparisons[];
}

export const MobileVersion = ({ comparisons }: MobileVersionProps) => {
  const [isActiveSlideIndex, setIsActiveSlideIndex] = useState<number | null>(
    null,
  );
  const [isScrollBlock, setIsScrollBlock] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);

  const uniqueElementNames = useMemo(
    () => comparisons[0]?.elements.map((el) => el.name) || [],
    [comparisons[0]?.elements],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current?.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (isActiveSlideIndex === 0 && scrollDelta <= 0 && rect.top >= 0) {
        setIsScrollBlock(true);
      } else if (isScrollBlock && scrollDelta > 0) {
        setIsScrollBlock(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActiveSlideIndex, isScrollBlock]);

  return (
    <div className={"w-full h-full"}>
      <div className={"p-10 w-full h-full"}>
        <div ref={containerRef} className={"relative w-full h-full"}>
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
            onSlideChange={({ isEnd, activeIndex }) => {
              setIsActiveSlideIndex(activeIndex);
              setIsScrollBlock(isEnd);
            }}
            modules={[Mousewheel, Pagination]}
            className={`comparison_swiper h-full ${
              isScrollBlock ? "swiper-disable-scroll pointer-events-none" : ""
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
