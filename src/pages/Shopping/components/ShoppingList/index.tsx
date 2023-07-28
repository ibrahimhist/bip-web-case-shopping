import React, { useEffect, useMemo } from 'react';

import { Box } from '@mui/material';
import { shallow } from 'zustand/shallow';

import { ShoppingCard } from '../../../../components';
import { useProductsStore, useCartStore } from '../../../../stores';

export const ShoppingList = () => {
  const { products, selectedCategories, getProducts } = useProductsStore(
    (state) => ({
      products: state.products,
      selectedCategories: state.selectedCategories,
      getProducts: state.getProducts,
    }),
    shallow
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = useMemo(
    () =>
      selectedCategories.length
        ? products?.filter((product) =>
            selectedCategories.includes(product.category)
          )
        : products,
    [selectedCategories, products]
  );

  const handleProductAdd = (productId: string) => {
    addToCart(productId);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, auto))',
        gap: 2,
      }}
    >
      {filteredProducts?.map((product) => (
        <ShoppingCard
          key={product.id}
          title={product.name}
          image={product.image}
          onClickAdd={() => handleProductAdd(product.id)}
        />
      ))}
    </Box>
  );
};
