import test from "ava";
import { extractList } from "./extract-list";
import { asyncIteratorToArray } from "./utils";

test("emag", async (t) => {
  const data = {
    url: "https://www.emag.ro/telefoane-mobile/c",
    paginate: {
      next: "#listing-paginator li:last-child"
    },
    item: "#card_grid .card-item",
    product: {
      url: ".card-heading > a@href",
      title: ".product-title-zone > a@title",
      image: ".card-heading .thumbnail img@data-src",
      price: "button.add-to-favorites@data-product | object | objectField:price"
    }
  };

  const list = await asyncIteratorToArray(
    extractList(data.url, {
      schemaVersion: "01",
      paginate: { next: data.paginate.next, limit: 2 },
      itemSelector: data.item,
      productSelector: data.product
    })
  );
  t.is(list.length, 60);
});
