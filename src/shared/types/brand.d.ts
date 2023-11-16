export type Brand = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  brandId: number;
};