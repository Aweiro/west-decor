import { Product } from "./ProductType";

export type ProductPayload = Pick<
  Product,
  | 'itemId'
  | 'category'
  | 'name'
  | 'fullPrice'
  | 'price'
  | 'screen'
  | 'capacity'
  | 'color'
  | 'ram'
  | 'year'
  | 'image'
  | 'isActive'
> & {
  details?: Pick<
    Product,
    | 'name'
    | 'screen'
    | 'ram'
    | 'camera'
    | 'resolution'
    | 'processor'
    | 'zoom'
    | 'capacity'
    | 'priceRegular'
    | 'priceDiscount'
    | 'color'
    | 'images'
    | 'cell'
    | 'description'
    | 'namespaceId'
  >;
};
