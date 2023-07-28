import React from 'react';

import { Box } from '@mui/material';

import {
  Categories,
  ShoppingList,
  CategoryChips,
  ShoppingSearch,
} from './components';

export const Shopping = () => {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: 2 }}
    >
      <Categories />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ShoppingSearch />
        <CategoryChips />
        <ShoppingList />
      </Box>
    </Box>
  );
};
