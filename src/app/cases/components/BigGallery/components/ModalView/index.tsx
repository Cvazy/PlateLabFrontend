import { AnimatePresence, motion } from "framer-motion";
import CustomImage from "@/app/utils/customImage";
import { imageLoader } from "@/app/utils";
import { useEffect, useRef } from "react";
import { ICaseImage } from "@/app/cases";

interface IModalViewProps {
  selected: number | null;
  selectedIndex: number;
  images: ICaseImage[];
  setSelected: (
    value: ((prevState: number | null) => number | null) | number | null,
  ) => void;
  setSelectedIndex: (value: ((prevState: number) => number) | number) => void;
}

export const ModalView = ({
  images,
  selectedIndex,
  selected,
  setSelected,
  setSelectedIndex,
}: IModalViewProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  return (
    <AnimatePresence mode="wait">
      {selected !== null && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-[#05050557] p-4 backdrop-blur-md flex items-center justify-center no-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            if (!imageRef.current.contains(e.target)) {
              setSelected(null);
            }
          }}
        >
          <motion.div
            className="relative flex items-center justify-center w-full h-full no-transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <button
              className="absolute z-[999] left-4 flex justify-center items-center text-white text-3xl bg-light_gray rounded-full w-10 h-10 flex items-center justify-center no-transition hover:bg-white 2xl:left-40"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev > 0 ? prev - 1 : images.length - 1,
                );
              }}
            >
              <svg
                id={"arrow-mask"}
                enableBackground="new 0 0 2000 2000"
                viewBox="0 0 2000 2000"
                xmlns="http://www.w3.org/2000/svg"
                className={"rotate-180 w-6 h-6"}
              >
                <g>
                  <g>
                    <path
                      d="m628 1808c-16.4 0-32.8-6.2-45.3-18.7-25-25-25-65.5 0-90.5l698.7-698.7-698.7-698.8c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l744 744c25 25 25 65.5 0 90.5l-744 744c-12.4 12.5-28.8 18.7-45.2 18.7z"
                      fill="#1B1B1B"
                      stroke="#1B1B1B"
                      strokeWidth="24"
                    />
                  </g>
                </g>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                ref={imageRef}
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={"no-transition"}
              >
                <CustomImage
                  width={800}
                  height={800}
                  src={images[selectedIndex].image}
                  alt={images[selectedIndex].caption}
                  loading={"lazy"}
                  loader={imageLoader}
                  className={`rounded-lg no-transition w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] lg:w-[640px] lg:h-[640px] xl:w-[800px] xl:h-[800px]`}
                />
              </motion.div>
            </AnimatePresence>

            <button
              className="absolute z-[999] right-4 flex justify-center items-center text-white text-3xl bg-light_gray rounded-full w-10 h-10 flex items-center justify-center no-transition hover:bg-white 2xl:right-40"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev < images.length - 1 ? prev + 1 : 0,
                );
              }}
            >
              <svg
                id="Layer_1"
                enableBackground="new 0 0 2000 2000"
                viewBox="0 0 2000 2000"
                xmlns="http://www.w3.org/2000/svg"
                className={"w-6 h-6"}
              >
                <g>
                  <g>
                    <path
                      d="m628 1808c-16.4 0-32.8-6.2-45.3-18.7-25-25-25-65.5 0-90.5l698.7-698.7-698.7-698.8c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l744 744c25 25 25 65.5 0 90.5l-744 744c-12.4 12.5-28.8 18.7-45.2 18.7z"
                      fill="#1B1B1B"
                      stroke="#1B1B1B"
                      strokeWidth="24"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
