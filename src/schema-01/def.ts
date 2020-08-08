export type Def01SelectorsData = {
  version: "01";
  url: string;
  name: string;
  country: string;
  currency?: string;
  lists: Def01ProductListItem[];
};

export type Def01ProductListItem = {
  language: string;
  currency?: string;
  list: Def01ProductList;
};

export type Def01ProductList = {
  name?: string;
  productType: Def01ProductType;
  url: string;
  paginate?: Def01Paginate;
  item: Def01Selector;
  product: Def01ListProductSelector;
};

export type Def01ListProductSelector = {
  url: Def01Selector;
  title: Def01Selector;
  description?: Def01Selector;
  image?: Def01Selector;
  price?: Def01PriceSelector;
  currency?: Def01Selector;
};

export type Def01ProductSelector = {
  url?: Def01Selector;
  title: Def01Selector;
  description?: Def01Selector;
  image?: Def01Selector;
  price?: Def01PriceSelector;
  currency?: Def01Selector;
};

export type Def01PriceSelector =
  | {
      price?: Def01Selector;
      integerPart?: Def01Selector;
      decimalPart?: Def01Selector;
    }
  | string;

export type Def01Paginate = { next: Def01Selector; limit?: number };

export type Def01Selector = string;

export type Def01ProductType = "smartphone";
