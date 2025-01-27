import React from "react";
import CustomImage from "@/app/utils/customImage";
import { CONTAINER_TYPES } from "@/app/home/components/Gallery/components/GalleryContainer/model";
import { imageLoader } from "@/app/utils";

export const ImageColumns = React.memo(({ columns }: { columns: any[] }) => {
  return (
    <>
      {columns.map((column, columnIndex) => {
        const containerType = column?.size;

        return (
          <div
            key={`column-${columnIndex}`}
            className="flex flex-col gap-4 w-fit h-fit"
          >
            {column?.images?.map((image, imageIndex) => (
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
            ))}
          </div>
        );
      })}
    </>
  );
});
