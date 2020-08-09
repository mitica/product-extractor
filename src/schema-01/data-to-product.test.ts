import test from "ava";
import dataToProduct from "./data-to-product";
import { Schema01ProductData } from "./types";

test("price.decimalPart", async (t) => {
  const data: Schema01ProductData = {
    url: "url",
    title: "title",
    price: {
      integerPart: 100,
      decimalPart: 99
    }
  };

  const product = dataToProduct(data);
  t.truthy(product);
  if (!product) return;
  t.is(product.price, 100.99);
});
