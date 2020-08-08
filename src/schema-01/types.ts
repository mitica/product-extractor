import { ProductData } from "../types";

export interface Schema01ProductData extends ProductData {
  price?:
    | number
    | { price?: number; integerPart?: number; decimalPart?: number };
}
