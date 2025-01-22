export interface ICaseImage {
  id: number | string;
  image: string;
  caption: string;
}

export interface ICaseItem {
  id: number | string;
  restaurant_name: string;
  description: string;
  images: ICaseImage[];
}

export interface IGalleryProps {
  cases: ICaseItem[];
  activeCase: number;
}
