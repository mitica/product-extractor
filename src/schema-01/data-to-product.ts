import { Schema01ProductData } from "./types";
import { Product } from "../types";

export default (data: Schema01ProductData): Product | null => {
  if (!data || !data.title || !data.url) return null;
  const { price, ...rest } = data;
  const product: Product = { ...rest };

  if (typeof price === "number") product.price = price;
  else if (typeof price === "object") {
    if (typeof price.price === "number") product.price = price.price;
    else if (typeof price.integerPart === "number") {
      product.price = price.integerPart;
      if (typeof price.decimalPart === "number" && price.decimalPart > 0)
        product.price +=
          price.decimalPart / price.decimalPart.toString().length;
    }
  }

  return product;
};
