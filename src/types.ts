export interface DataToProduct<TData = ProductData> {
  (data: TData): Product | null;
}

export interface ProductSelector {
  url: string;
  title: string;
}

export interface ProductData {
  url: string;
  title: string;
  image?: string;
  description?: string;
  currency?: string;
}

export interface Product {
  url: string;
  title?: string;
  image?: string;
  price?: number;
  currency?: string;
}

export type SchemaVersion = "01";
