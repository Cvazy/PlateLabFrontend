import styles from "./StandOutOnline.module.css";
import Image from "next/image";

export const StandOutOnline = () => {
  return (
    <div
      className={`relative rounded-[10px] border border-solid ${styles.BgContainer} border-[#212121] overflow-hidden min-h-[340px] w-full h-full xl:h-1/2 xl:min-h-60`}
    >
      <div
        className={
          "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#272727] to-transparent xl:bg-gradient-to-tr xl:from-dark_gray"
        }
      ></div>

      <div className={styles.Phone}>
        <Image
          width={527}
          height={527}
          src={"/images/phone.svg"}
          alt={"Phone"}
          loading={"lazy"}
        />
      </div>

      <div className={"relative z-10 px-4 py-5 w-full"}>
        <div className={"flex flex-col items-start gap-[30px] w-full"}>
          <div
            className={
              "flex flex-col items-start gap-2.5 w-full xl:max-w-[400px]"
            }
          >
            <h3
              className={
                "text-[28px] text-white text-left !leading-[normal] md:text-3xl lg:text-[32px] xl:text-4xl"
              }
            >
              Stand out online
            </h3>

            <p
              className={
                "text-base !leading-[normal] text-light_gray font-fancy text-left"
              }
            >
              Capture attention with photos that highlight your dishes and make
              them unforgettable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
