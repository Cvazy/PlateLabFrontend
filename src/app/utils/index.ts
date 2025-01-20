import { serverUrl } from "@/app/constants";

interface IImageLoaderProps {
  src: string;
  quality: number;
}

export const imageLoader = ({ src, quality }: IImageLoaderProps) => {
  return `${serverUrl}${src}?q=${quality || 75}`;
};
