import React from 'react';

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { shallow } from 'zustand/shallow';

import { useProductsStore } from '../../../../stores';

export const Categories = () => {
  const { products, addSelectedCategory } = useProductsStore(
    (state) => ({
      products: state.products,
      addSelectedCategory: state.addSelectedCategory,
    }),
    shallow
  );

  const categories = [
    ...new Set((products || []).map((product) => product.category)),
  ].sort();

  const handleCategoryClick = (category: string) => {
    addSelectedCategory(category);
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 0, md: 2 },
      }}
    >
      <Typography gutterBottom variant='h6' component='div'>
        Categories
      </Typography>

      <List
        dense
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
      >
        {categories.map((category) => (
          <ListItemButton
            key={category}
            alignItems='center'
            onClick={() => handleCategoryClick(category)}
          >
            <ListItemText primary={category} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};
