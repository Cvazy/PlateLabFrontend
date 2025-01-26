import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import { IGallery, useFetchAllGalleryQuery } from "@/app/home";
import { Loader } from "@/app/components";
import {
  CONTAINER_TYPES,
  distributeColumnsRandomly,
  distributeImagesAcrossColumns,
  shuffleArray,
} from "./model";

export const GalleryContainer = () => {
  const { data, isLoading } = useFetchAllGalleryQuery();

  const gallery: IGallery[] = data || [];

  if (isLoading) return <Loader />;

  const shuffledImages = [...gallery];
  shuffleArray(shuffledImages);

  const columns = distributeImagesAcrossColumns(shuffledImages, 7, 8, 10);

  const arrangedColumns = distributeColumnsRandomly(columns);

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-20 w-full h-full">
      <div className="flex justify-center overflow-hidden w-full h-full">
        <div className="flex justify-center items-center min-w-max w-full h-full gap-4">
          {arrangedColumns.map((column, columnIndex) => {
            const containerType = column?.size;

            return (
              <div
                key={`column-${columnIndex}`}
                className="flex flex-col gap-4 w-fit h-fit"
              >
                {column?.images?.map((image, imageIndex) => (
                  <CustomImage
                    key={`${image.id}-${imageIndex}`}
                    width={CONTAINER_TYPES[containerType].width}
                    height={CONTAINER_TYPES[containerType].height}
                    src={image.image}
                    alt={image.description}
                    loader={imageLoader}
                    loading={"lazy"}
                    className={CONTAINER_TYPES[containerType].className}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
