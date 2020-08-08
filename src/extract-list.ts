import { SchemaVersion, ProductSelector, Product } from "./types";
import x from "./x-ray";
import { getSchemaDataToObject } from "./schema";
import { delay } from "./utils";

const debug = require("debug")("product-extractor:list");

type PaginateParams = {
  next: string;
  limit?: number;
};

export type ExtractListOptions<
  TPS extends ProductSelector = ProductSelector
> = {
  schemaVersion: SchemaVersion;
  productSelector: TPS;
  /** List item selector */
  itemSelector: string;
  paginate?: PaginateParams;
  timeout?: number;
};

async function* extractListInternal<
  TPS extends ProductSelector = ProductSelector
>(
  source: string,
  options: ExtractListOptions<TPS>,
  page = 0
): AsyncIterable<Product> {
  if (source && source.length < 200) debug(`Extracting list from ${source}`);

  const { paginate, itemSelector, productSelector, schemaVersion } = options;

  const dataToProduct = getSchemaDataToObject(schemaVersion);

  const result: { nextPage: string; items: any[] } = await x(source, {
    nextPage: (paginate && paginate.next) || "",
    items: x(itemSelector, [productSelector as any])
  });

  if (!result.items || result.items.length < 1) return;

  for (const data of result.items) {
    const product = dataToProduct(data);
    if (product) yield product;
  }

  if (
    paginate &&
    result.nextPage &&
    ((typeof paginate.limit === "number" && page < paginate.limit) ||
      typeof paginate.limit === "undefined")
  ) {
    await delay(options.timeout || 1000 * 5);
    return extractListInternal(result.nextPage, options, page + 1);
  }
}

export function extractList<TPS extends ProductSelector = ProductSelector>(
  source: string,
  options: ExtractListOptions<TPS>
) {
  return extractListInternal(source, options);
}
