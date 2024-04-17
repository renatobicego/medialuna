export enum CardType {
  "product",
  "category",
}
interface Card {
  _id: string;
  name: string;
  image: string;
}
export interface Product extends Card {
  price: number;
  categories: Category[] | string[];
  available: boolean
}

export interface ProductServer extends Product{
  categories: Category[]
}

export interface Category extends Card {}

