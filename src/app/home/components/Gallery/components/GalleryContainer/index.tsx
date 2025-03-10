import React, { useEffect, useRef, useState, useMemo } from "react";
import { IGallery, useFetchAllGalleryQuery } from "@/app/home";
import {
  distributeColumnsRandomly,
  distributeImagesAcrossColumns,
  shuffleArray,
} from "./model";
import { ImageColumns } from "./components";

export const GalleryContainer = () => {
  const { data } = useFetchAllGalleryQuery();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scale, setScale] = useState(0.78);

  const gallery: IGallery[] = data || [];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const currentScrollY = window.scrollY;
      lastScrollY.current = currentScrollY;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;

      if (rect.top < 1000 && rect.bottom > 100) {
        setScale((currentScrollY / containerHeight) * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const arrangedColumns = useMemo(() => {
    if (!gallery.length) return [];

    try {
      const shuffledImages = [...gallery];
      shuffleArray(shuffledImages);

      const columns = distributeImagesAcrossColumns(shuffledImages, 9, 8, 10);
      return distributeColumnsRandomly(columns);
    } catch (error) {
      console.error("Ошибка при распределении изображений по колонкам:", error);
      return [];
    }
  }, [gallery]);

  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-20 w-full h-full">
      <div className="flex justify-center overflow-hidden w-full h-full">
        <div
          ref={containerRef}
          className="flex justify-center items-start min-w-max w-full h-full gap-4"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            transition: "transform 0.6s ease-out",
          }}
        >
          <ImageColumns columns={arrangedColumns} />
        </div>
      </div>
    </div>
  );
};
