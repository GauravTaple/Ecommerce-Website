export type TProduct = {
  id: string | number;
  name: string;
  image: string;
  new_price: string | number;
  old_price: string | number;
  category?: string;
};
