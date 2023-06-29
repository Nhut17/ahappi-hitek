export interface ProductType {
  title: string;
  price: number;
  image: string[];
  amount_sale: number;
  star: number;
  best_sale: boolean;
  fake_price: number;
  collab_price: number;
  inventory_amount: number;
}

export interface ProductParamsType {
  pagination: number;
  limit: number;
}
