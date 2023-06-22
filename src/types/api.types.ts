export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export interface IProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
