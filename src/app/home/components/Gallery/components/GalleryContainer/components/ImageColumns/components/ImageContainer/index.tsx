import { CONTAINER_TYPES } from "@/app/home/components/Gallery/components/GalleryContainer/model";
import { imageLoader } from "@/app/utils";
import CustomImage from "@/app/utils/customImage";
import React, { useState } from "react";
import { IGallery } from "@/app/home";

interface IImageContainerProps {
  image: IGallery;
  imageIndex: number;
  containerType: any;
}

export const ImageContainer = ({
  image,
  imageIndex,
  containerType,
}: IImageContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-fit h-fit ${isHovered ? "opacity-100" : "opacity-50"}`}
    >
      <CustomImage
        key={`${image.id}-${imageIndex}`}
        width={CONTAINER_TYPES[containerType]?.width || 100}
        height={CONTAINER_TYPES[containerType]?.height || 100}
        src={image.image}
        alt={image.description}
        loader={imageLoader}
        loading={"lazy"}
        className={CONTAINER_TYPES[containerType]?.className || ""}
      />
    </div>
  );
};
