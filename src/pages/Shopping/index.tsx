import React from 'react';

import { Categories, ShoppingList, CategoryChips } from './components';
import { Box } from '@mui/material';

export const Shopping = () => {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: 2 }}
    >
      <Categories />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CategoryChips />
        <ShoppingList />
      </Box>
    </Box>
  );
};
