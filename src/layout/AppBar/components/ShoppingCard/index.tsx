import React from 'react';

import { Badge, Button } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

export const ShoppingCart = () => {
  return (
    <Button
      color='inherit'
      endIcon={
        <Badge badgeContent={4} color='secondary'>
          <ShoppingCartIcon />
        </Badge>
      }
    >
      Cart
    </Button>
  );
};
