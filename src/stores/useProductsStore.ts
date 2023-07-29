import { create } from 'zustand';

import { Product } from '../models';
import { getRandomProducts } from '../utils';

export interface ProductsStore {
  products: Product[] | null;
  searchText: string;
  selectedCategories: string[];
  loading: boolean;
  getProducts: (append?: boolean) => void;
  addSelectedCategory: (category: string) => void;
  removeSelectedCategory: (category: string) => void;
  setSearchText: (newSearchText: string) => void;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: null,
  loading: false,
  selectedCategories: [],
  searchText: '',
  addSelectedCategory: (category: string) => {
    const categories = get().selectedCategories;

    if (!categories.includes(category)) {
      set({
        selectedCategories: [...categories, category],
      });
    }
  },
  removeSelectedCategory: (category: string) => {
    const categories = [...get().selectedCategories];
    const categoryIndex = categories.findIndex((ctg) => ctg === category);

    if (categoryIndex !== -1) {
      categories.splice(categoryIndex, 1);
      set({
        selectedCategories: categories,
      });
    }
  },
  getProducts: (append?: boolean) => {
    set({ loading: true });

    setTimeout(() => {
      const newProducts = getRandomProducts(24);

      set({
        products: append
          ? [...(get().products || []), ...newProducts]
          : newProducts,
        loading: false,
      });
    }, 400);
  },
  setSearchText: (newSearchText: string) => {
    set({
      searchText: newSearchText,
    });
  },
}));
