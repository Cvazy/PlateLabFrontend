export interface IPrice {
  id: number | string;
  min_photo_qnt: number;
  max_photo_qnt?: number;
  price: number;
  is_the_best_price: boolean;
}

export interface IFaq {
  id: number | string;
  question: string;
  answer: string;
}
