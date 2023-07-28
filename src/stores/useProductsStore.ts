import { create } from 'zustand';

import { Product } from '../models';
import { getRandomProducts } from '../utils';

export interface ProductsStore {
  products: Product[] | null;
  getProducts: (append?: boolean) => void;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: null,
  getProducts: (append?: boolean) => {
    const newProducts = getRandomProducts(12);

    set({
      products: append
        ? [...(get().products || []), ...newProducts]
        : newProducts,
    });
  },
}));
