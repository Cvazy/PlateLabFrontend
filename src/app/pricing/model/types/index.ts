export interface IPrice {
  id: number | string;
  min_photo_qnt: number;
  max_photo_qnt?: number;
  price: number;
  is_the_best_price: boolean;
}
