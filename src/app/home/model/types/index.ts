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

export interface ISwiperElement {
  id: number | string;
  item_name: string;
  image: string;
  caption: string;
  price: number;
  min_cal_value: number;
  max_cal_value?: number;
}

export interface IProductListItem {
  id: number | string;
  item_name: string;
  image: string;
  caption: string;
  price: number;
  min_cal_value: number;
  max_cal_value?: number;
  description: string;
}

export interface IRestaurant {
  id: number | string;
  name: string;
  swiper_title: string;
  items_list_title: string;
  swiper_items: ISwiperElement[];
  product_list_items: IProductListItem[];
}

export interface IParameters {
  id: number | string;
  name: string;
  start_value: number;
  end_value: number;
}
