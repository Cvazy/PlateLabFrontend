"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  paths,
  logoRotate,
  logoVariants,
  blockVariantsLeft,
  blockVariantsRight,
} from "./model";
import { useAppDispatch } from "@/app/utils/hooks";
import { allowNavigation } from "@/app/utils/NavigationState";

export const Loader = React.memo(() => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const [logoCompleted, setLogoCompleted] = useState<boolean>(false);
  const [logoRotateCompleted, setLogoRotateCompleted] =
    useState<boolean>(false);
  const [divsV3Completed, setDivsV3Completed] = useState<boolean>(false);
  const [divsV4Completed, setDivsV4Completed] = useState<boolean>(false);

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [hasNavigated, setHasNavigated] = useState<boolean>(false);

  useEffect(() => {
    setDivsV3Completed(false);
    setDivsV4Completed(false);
    setLogoCompleted(false);

    if (!hasNavigated) {
      setHasNavigated(true);
      return;
    }

    setIsFirstVisit(false);
  }, [pathname]);

  const blockVariantsLeftV2 = {
    hidden: { x: 0 },
    visible: () => ({
      x: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    }),
  };

  const blockVariantsRightV2 = {
    hidden: { x: 0 },
    visible: () => ({
      x: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    }),
  };

  const handleCompleteFirstlyAnimate = () => {
    setDivsV3Completed(true);
    dispatch(allowNavigation());
  };

  const handleDivV3Complete = () => {
    setDivsV3Completed(true);
  };

  const handleDivV4Complete = () => {
    setDivsV4Completed(true);
    dispatch(allowNavigation());
  };

  return (
    <div
      className={`fixed ${isFirstVisit ? (divsV3Completed ? "" : "z-[999]") : divsV3Completed && divsV4Completed ? "" : "z-[999]"} top-0 bottom-0 left-0 right-0`}
    >
      <div className="flex flex-col relative w-full h-full">
        {isFirstVisit && (
          <>
            <motion.div
              className="absolute no-transition top-0 left-0 z-[80] w-full h-full flex justify-center items-center"
              initial="hidden"
              exit="hidden"
              animate={logoRotateCompleted ? "visible" : "hidden"}
              variants={logoVariants}
            >
              <motion.div
                initial="hidden"
                exit="hidden"
                animate={logoCompleted ? "visible" : "hidden"}
                variants={logoRotate}
                className="absolute no-transition top-0 left-0 z-[100] w-full h-full flex justify-center items-center"
                onAnimationComplete={() => setLogoRotateCompleted(true)}
              >
                <motion.svg
                  width="80"
                  height="80"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial="hidden"
                  animate={"visible"}
                  exit="hidden"
                  onAnimationComplete={() => setLogoCompleted(true)}
                  variants={{
                    hidden: {},
                  }}
                  className={
                    "w-10 h-10 no-transition !overflow-visible sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                  }
                >
                  {paths.map((path, i) => (
                    <motion.path
                      key={i}
                      d={path.d}
                      fill={"white"}
                      initial={"hidden"}
                      animate={"visible"}
                      className={"no-transition"}
                      variants={{
                        hidden: {
                          opacity: logoRotateCompleted ? 1 : 0,
                          x: logoRotateCompleted ? 0 : path.initial.x,
                          y: logoRotateCompleted ? 0 : path.initial.y,
                        },
                        visible: {
                          opacity: logoRotateCompleted ? 0 : 1,
                          x: logoRotateCompleted ? path.initial.x : 0,
                          y: logoRotateCompleted ? path.initial.y : 0,
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                            delay: logoRotateCompleted ? 0.5 : 0,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.svg>
              </motion.div>
            </motion.div>

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`bg-black no-transition ${i !== 4 ? "border-b" : "border-none"} border-gray border-solid w-full h-1/5`}
                custom={4 - i}
                initial="hidden"
                exit="hidden"
                animate={logoRotateCompleted ? "visible" : "hidden"}
                variants={
                  i % 2 === 0 ? blockVariantsLeftV2 : blockVariantsRightV2
                }
                onAnimationComplete={
                  i === 4 ? handleCompleteFirstlyAnimate : undefined
                }
              />
            ))}
          </>
        )}

        {!isFirstVisit && divsV3Completed && (
          <>
            <motion.div
              className="absolute no-transition top-0 left-0 z-[100] w-full h-full flex justify-center items-center"
              initial="hidden"
              exit="hidden"
              animate={logoCompleted ? "visible" : "hidden"}
              variants={logoVariants}
            >
              <motion.svg
                width="80"
                height="80"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate={"visible"}
                exit="hidden"
                onAnimationComplete={() => setLogoCompleted(true)}
                variants={{
                  hidden: {},
                }}
                className={
                  "w-10 h-10 no-transition !overflow-visible sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                }
              >
                {paths.map((path, i) => (
                  <motion.path
                    key={i}
                    d={path.d}
                    fill={"white"}
                    initial={"hidden"}
                    animate={"visible"}
                    className={"no-transition"}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: path.initial.x,
                        y: path.initial.y,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.25, ease: "easeOut" },
                      },
                    }}
                  />
                ))}
              </motion.svg>
            </motion.div>

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`bg-black no-transition ${i !== 4 ? "border-b" : "border-none"} border-gray border-solid w-full h-1/5`}
                custom={4 - i}
                initial="hidden"
                animate={"visible"}
                exit="hidden"
                variants={
                  i % 2 === 0 ? blockVariantsLeftV2 : blockVariantsRightV2
                }
                onAnimationComplete={i === 4 ? handleDivV4Complete : undefined}
              />
            ))}
          </>
        )}

        {!isFirstVisit && !divsV3Completed && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`bg-black no-transition ${i !== 4 ? "border-b" : "border-none"} border-gray border-solid w-full h-1/5`}
                custom={4 - i}
                initial="hidden"
                animate={"visible"}
                exit="hidden"
                variants={i % 2 === 0 ? blockVariantsLeft : blockVariantsRight}
                onAnimationComplete={i === 4 ? handleDivV3Complete : undefined}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
});
