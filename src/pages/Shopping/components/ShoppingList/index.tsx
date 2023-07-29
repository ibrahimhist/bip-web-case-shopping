import React, { useEffect, useMemo } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { shallow } from 'zustand/shallow';

import { ShoppingCard } from '../../../../components';
import { useProductsStore, useCartStore } from '../../../../stores';
import { useDebouncedCallback } from 'use-debounce';

export const ShoppingList = () => {
  const { products, loading, searchText, selectedCategories, getProducts } =
    useProductsStore(
      (state) => ({
        products: state.products,
        loading: state.loading,
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

  const debouncedLoadMore = useDebouncedCallback(() => {
    getProducts(true);
  }, 200);

  const handleListScroll = (e: any) => {
    if (hasSelectedCategories || searchText) {
      return;
    }

    const bottom: boolean =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 100;
    if (bottom) {
      debouncedLoadMore();
    }
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Box
      sx={{
        overflow: 'auto',
        paddingBottom: 1,
      }}
      onScroll={handleListScroll}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(220px, auto))',
            md: 'repeat(auto-fill, minmax(280px, auto))',
          },
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

      {loading && (
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <CircularProgress color='secondary' />
        </Box>
      )}
    </Box>
  );
};
