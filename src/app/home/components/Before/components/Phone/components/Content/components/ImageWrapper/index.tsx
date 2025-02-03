import { motion } from "framer-motion";

import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import Image from "next/image";

interface IImageWrapperProps {
  valuesSwitched: boolean;
  itemWidth: number;
  itemHeight: number;
  itemImageSrc: string;
  itemImageAlt: string;
}

export const ImageWrapper = ({
  valuesSwitched,
  itemImageSrc,
  itemImageAlt,
  itemWidth,
  itemHeight,
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
      className={"relative"}
      style={{
        minWidth: itemWidth,
        minHeight: itemHeight,
        maxWidth: itemWidth,
        maxHeight: itemHeight,
      }}
    >
      <motion.div
        initial="hidden"
        exit="hidden"
        className={"absolute top-0 left-0 rounded-md"}
        style={{ width: itemWidth, height: itemHeight }}
        animate={valuesSwitched ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <CustomImage
          width={itemWidth}
          height={itemHeight}
          src={itemImageSrc}
          alt={itemImageAlt}
          loader={imageLoader}
          loading={"lazy"}
          className={"rounded-md"}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        exit="hidden"
        animate={valuesSwitched ? "visible" : "hidden"}
        variants={plugVariants}
        className={
          "absolute top-0 left-0 flex items-center justify-center bg-[#303030] rounded-md"
        }
        style={{ width: itemWidth, height: itemHeight }}
      >
        <Image
          width={18}
          height={18}
          src={"/images/image.svg"}
          alt={"Image"}
          loading={"lazy"}
        />
      </motion.div>
    </div>
  );
};
