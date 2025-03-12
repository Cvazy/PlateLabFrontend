import { motion } from "framer-motion";

import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import Image from "next/image";

interface IImageWrapperProps {
  valuesSwitched: boolean;
  itemImageSrc: string;
  itemImageAlt: string;
  isHorizontalSwiperItem?: boolean;
}

export const ImageWrapper = ({
  valuesSwitched,
  itemImageSrc,
  itemImageAlt,
  isHorizontalSwiperItem = false,
}: IImageWrapperProps) => {
  const plugVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={`relative ${isHorizontalSwiperItem ? "min-w-[88px] min-h-[88px] max-w-[88px] max-h-[88px] lg:min-w-[120px] lg:min-h-[120px] lg:max-w-[120px] lg:max-h-[120px]" : "min-w-[75px] min-h-[75px] max-w-[75px] max-h-[75px] lg:min-w-[104px] lg:min-h-[104px] lg:max-w-[104px] lg:max-h-[104px]"}`}
    >
      <motion.div
        initial="hidden"
        exit="hidden"
        className={`absolute top-0 left-0 rounded-md lg:rounded-xl ${isHorizontalSwiperItem ? "w-[88px] h-[88px] lg:w-[120px] lg:h-[120px]" : "w-[75px] h-[75px] lg:w-[104px] lg:h-[104px]"}`}
        animate={valuesSwitched ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <CustomImage
          width={isHorizontalSwiperItem ? 88 : 75}
          height={isHorizontalSwiperItem ? 88 : 75}
          src={itemImageSrc}
          alt={itemImageAlt}
          loader={imageLoader}
          loading={"lazy"}
          className={`rounded-md lg:rounded-xl ${isHorizontalSwiperItem ? "w-[88px] h-[88px] lg:w-[120px] lg:h-[120px]" : "w-[75px] h-[75px] lg:w-[104px] lg:h-[104px]"}`}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        exit="hidden"
        animate={valuesSwitched ? "visible" : "hidden"}
        variants={plugVariants}
        className={`absolute top-0 left-0 flex items-center justify-center bg-[#303030] rounded-md lg:rounded-xl ${isHorizontalSwiperItem ? "w-[88px] h-[88px] lg:w-[120px] lg:h-[120px]" : "w-[75px] h-[75px] lg:w-[104px] lg:h-[104px]"}`}
      >
        <Image
          width={18}
          height={18}
          src={"/images/image.svg"}
          alt={"Image"}
          loading={"lazy"}
          className={"w-[18px] h-[18px] lg:w-[26px] lg:h-[26px]"}
        />
      </motion.div>
    </div>
  );
};
