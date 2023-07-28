import { create } from 'zustand';

import { useProductsStore } from './useProductsStore';
import { toast } from 'react-toastify';

type CartProduct = {
  id: string;
  quantity: number;
};
export interface CartStore {
  products: CartProduct[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],
  addToCart: (productId: string) => {
    const products = useProductsStore.getState().products;
    const product = products?.find((product) => product.id === productId);

    if (!product) {
      return;
    }

    const newCartProducts = [...get().products];
    const cartProductIndex = newCartProducts.findIndex(
      (cartProduct) => cartProduct.id === productId
    );

    if (cartProductIndex !== -1) {
      const productMaxQuantity = product.quantity;
      const currentCartProductQuantity =
        newCartProducts[cartProductIndex].quantity;

      if (currentCartProductQuantity + 1 <= productMaxQuantity) {
        newCartProducts[cartProductIndex].quantity++;
        set({
          products: newCartProducts,
        });
      } else {
        toast.info('Reached max quantity!');
      }
    } else {
      newCartProducts.push({
        id: productId,
        quantity: 1,
      });

      set({
        products: newCartProducts,
      });
    }
  },
  removeFromCart: (productId: string) => {
    const newCartProducts = [...get().products];
    const cartProductIndex = newCartProducts.findIndex(
      (cartProduct) => cartProduct.id === productId
    );

    if (cartProductIndex !== -1) {
      newCartProducts[cartProductIndex].quantity--;

      if (newCartProducts[cartProductIndex].quantity === 0) {
        newCartProducts.splice(cartProductIndex, 1);
      }

      set({
        products: newCartProducts,
      });
    }
  },
}));
