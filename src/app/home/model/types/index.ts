export interface IBanner {
  id: number | string;
  image: string;
  description: string;
}

export interface IPartner {
  id: number | string;
  name: string;
  image: string;
}

export interface IComparisons {
  id: number | string;
  title: string;
  price_per_photo: string;
  convenience_for_restaurants: string;
  style_and_customization: string;
  consistency: string;
  adaptability_for_seasonal_menus: string;
}

export interface IGallery {
  id: number | string;
  description: string;
  image: string;
}
