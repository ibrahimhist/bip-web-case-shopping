import React from 'react';

import { Box, Chip } from '@mui/material';
import { shallow } from 'zustand/shallow';

import { useProductsStore } from '../../../../stores';

export const CategoryChips = () => {
  const { selectedCategories, removeSelectedCategory } = useProductsStore(
    (state) => ({
      selectedCategories: state.selectedCategories,
      removeSelectedCategory: state.removeSelectedCategory,
    }),
    shallow
  );

  const handleCategoryRemoveClick = (category: string) => {
    removeSelectedCategory(category);
  };

  return selectedCategories.length ? (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {selectedCategories.map((category) => (
        <Chip
          key={'chip-' + category}
          label={category}
          variant='outlined'
          onDelete={() => handleCategoryRemoveClick(category)}
        ></Chip>
      ))}
    </Box>
  ) : (
    <></>
  );
};
