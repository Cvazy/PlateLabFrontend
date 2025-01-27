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

export interface ISale {
  id: number | string;
  month: string;
  month_display: string;
  sales_qnt: number;
  is_active_updating_the_photo_menu: boolean;
}
