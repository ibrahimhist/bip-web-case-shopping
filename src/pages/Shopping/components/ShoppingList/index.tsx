import React, { useEffect, useMemo } from 'react';

import { Box } from '@mui/material';
import { shallow } from 'zustand/shallow';

import { ShoppingCard } from '../../../../components';
import { useProductsStore, useCartStore } from '../../../../stores';

export const ShoppingList = () => {
  const { products, searchText, selectedCategories, getProducts } =
    useProductsStore(
      (state) => ({
        products: state.products,
        searchText: state.searchText,
        selectedCategories: state.selectedCategories,
        getProducts: state.getProducts,
      }),
      shallow
    );

  const addToCart = useCartStore((state) => state.addToCart);

  const hasSelectedCategories = selectedCategories.length;

  const filteredProducts = useMemo(
    () =>
      hasSelectedCategories || searchText
        ? products?.filter((product) => {
            const isProductCategoryNotInSelecteds =
              hasSelectedCategories &&
              !selectedCategories.includes(product.category);

            const isProductTitleIncludesNotInSearchText =
              searchText &&
              !product.name
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase());

            if (
              isProductCategoryNotInSelecteds ||
              isProductTitleIncludesNotInSearchText
            ) {
              return false;
            }

            return true;
          })
        : products,
    [selectedCategories, products, searchText, hasSelectedCategories]
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
