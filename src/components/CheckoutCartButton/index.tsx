import React from 'react';

import { Badge, Button, Popover } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useCartStore } from '../../stores';
import { CartSummary } from './components';

export const CheckoutCartButton = () => {
  const products = useCartStore((state) => state.products);

  const [popoverAnchorEl, setPopoverAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const popoverOpen = Boolean(popoverAnchorEl);

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  return (
    <div>
      <Button
        color='inherit'
        endIcon={
          <Badge badgeContent={products.length} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
        }
        onClick={handleCartClick}
      >
        Cart
      </Button>

      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={popoverOpen}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
      >
        {popoverOpen && <CartSummary />}
      </Popover>
    </div>
  );
};
