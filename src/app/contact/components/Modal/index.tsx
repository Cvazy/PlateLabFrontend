"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

interface IModal {
  isOpen: boolean;
  isSuccess: boolean;
  isError: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, isSuccess, isError, onClose }: IModal) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 300);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000096] bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex justify-center items-center h-full w-full">
        <div
          className={`bg-white rounded-lg shadow-[0_5px_15px_0_white] max-w-md overflow-hidden transition-all !duration-[1200ms] ease-in-out ${
            visible ? "w-full h-auto" : "w-0 h-0"
          }`}
        >
          <div className={"p-1 w-full"}>
            <div
              className={
                "px-4 py-6 border border-solid border-gray rounded-lg w-full sm:px-6 sm:py-8 lg:px-8"
              }
            >
              <div className={"flex flex-col items-start gap-5 w-full"}>
                <div
                  className={"flex items-center justify-between gap-4 w-full"}
                >
                  <p
                    className={
                      "text-black text-left text-lg sm:text-xl lg:text-2xl"
                    }
                  >
                    {isSuccess && "Success!"}
                    {isError && "Error..."}
                  </p>

                  <button
                    type={"button"}
                    onClick={onClose}
                    className={`transition-transform !duration-700 hover:rotate-180`}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={"/images/close.svg"}
                      alt={"Close"}
                      loading={"lazy"}
                    />
                  </button>
                </div>

                <p
                  className={
                    "text-sm text-gray text-left sm:text-base lg:text-lg"
                  }
                >
                  {isSuccess &&
                    "Thank you for contacting us, your message has been successfully delivered. Our employee will contact you soon."}

                  {isError &&
                    "Oops, something went wrong. Please try again later."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
