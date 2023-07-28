import React, { useEffect } from 'react';

import { Box } from '@mui/material';

import { ShoppingCard } from '../../../../components';
import { useProductsStore, useCartStore } from '../../../../stores';

export const ShoppingList = () => {
  const { products, getProducts } = useProductsStore();

  const addToCart = useCartStore((state) => state.addToCart);

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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, auto))',
        gap: 2,
      }}
    >
      {products?.map((product) => (
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
