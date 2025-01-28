import { IComparisons } from "@/app/home";

export const transformData = (data: IComparisons[]) => {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    elements: Object.entries(item)
      .filter(([key]) => key !== "id" && key !== "title") // Исключаем id и title
      .map(([key, value]) => ({
        name: key
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Title Case
          .join(" "),
        value: value,
      })),
  }));
};
