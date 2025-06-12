export type TProduct = {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: string | number;
  category?: string;
};

export type TShopCategory = {
  banner: string;
  category: string;
};
