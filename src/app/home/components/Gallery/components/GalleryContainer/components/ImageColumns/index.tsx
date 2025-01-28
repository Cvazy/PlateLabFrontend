import React from "react";
import { ImageContainer } from "./components";

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
              <ImageContainer
                key={imageIndex}
                imageIndex={imageIndex}
                containerType={containerType}
                image={image}
              />
            ))}
          </div>
        );
      })}
    </>
  );
});
