export enum CardType {
  "product",
  "category",
}
interface Card {
  name: string;
  image: string;
}
export interface Product extends Card {
  price: number;
  category?: string[]
}

export interface Category extends Card {}

