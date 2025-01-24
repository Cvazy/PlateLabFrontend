import { serverUrl } from "@/app/constants";

export const imageLoader = ({
  src,
  quality = 75,
  width,
}: {
  src: string;
  quality?: number;
  width: number;
}) => {
  return `${serverUrl}${src}?q=${quality}&w=${width}`;
};
