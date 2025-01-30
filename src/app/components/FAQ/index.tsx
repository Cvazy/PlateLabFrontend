"use client";

import { useState } from "react";
import { Loader } from "@/app/components";
import { useFetchAllFaqsElementsQuery } from "@/app/contact";
import { IFaq } from "@/app/pricing";
import { FAQElement } from "@/app/components/FAQ/FAQElement";

export const FAQ = () => {
  const [activeElement, setActiveElement] = useState<number | null>(1);

  const { data, isError } = useFetchAllFaqsElementsQuery();

  const faqsElements: IFaq[] = data || [];

  return (
    <div className={"flex flex-col gap-4 w-full"}>
      {isError && (
        <p
          className={
            "text-center font-fancy text-red text-sm w-full md:text-base lg:text-3xl"
          }
        >
          An error occurred during the request. Try to reload the page or come
          back later.
        </p>
      )}

      {faqsElements &&
        faqsElements.map(({ id, question, answer }, index) => (
          <FAQElement
            key={id}
            answer={answer}
            question={question}
            isActive={activeElement === index + 1}
            onClick={() => setActiveElement(index + 1)}
          />
        ))}
    </div>
  );
};
