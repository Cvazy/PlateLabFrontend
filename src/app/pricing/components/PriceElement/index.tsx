import { IPrice } from "@/app/pricing";
import { SpotlightCard } from "@/app/ReactBitsComponents";

export const PriceElement = ({
  price,
  is_the_best_price,
  min_photo_qnt,
  max_photo_qnt,
}: Omit<IPrice, "id">) => {
  return (
    <SpotlightCard
      className={"!border-gray"}
      spotlightColor={"rgba(61,61,61,0.5)"}
    >
      <div className={"border border-solid border-gray rounded-[10px] w-full"}>
        <div className={"flex flex-col gap-[30px] md:gap-9 w-full lg:gap-10"}>
          <div
            className={`h-[30px] ${is_the_best_price ? "bg-red" : "bg-transparent"} rounded-t-[10px] w-full`}
          >
            <div
              className={
                "flex items-center justify-center px-3.5 w-full h-full"
              }
            >
              {is_the_best_price && (
                <p
                  className={
                    "font-fancy text-center text-base !leading-none text-white"
                  }
                >
                  Most Popular
                </p>
              )}
            </div>
          </div>

          <div
            className={
              "pb-[50px] w-full sm:pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]"
            }
          >
            <div
              className={
                "flex flex-col items-center gap-5 w-full sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10"
              }
            >
              <p
                className={
                  "font-fancy text-lg text-center !leading-[14px] text-light_gray lg:text-xl"
                }
              >
                {min_photo_qnt +
                  `${max_photo_qnt ? ` - ${max_photo_qnt}` : "+"}` +
                  " photos"}
              </p>

              <div className={"flex flex-col items-center gap-2.5 w-full"}>
                <div className={"w-[150px] h-[89px] relative"}>
                  <div
                    className={"flex items-center justify-center w-full h-full"}
                  >
                    <p
                      className={`font-fancy !leading-[57px] text-[80px] text-center text-white`}
                    >
                      ${price}
                    </p>
                  </div>

                  <div className={"textEffect"}></div>
                </div>

                <p
                  className={
                    "text-[15px] text-white text-center font-light !leading-none md:text-sm"
                  }
                >
                  per photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
