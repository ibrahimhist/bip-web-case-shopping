import React from 'react';

import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { shallow } from 'zustand/shallow';

import { useCartStore, useProductsStore } from '../../../../stores';
import { Product } from '../../../../models';
import { Delete } from '@mui/icons-material';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const CartSummary = () => {
  const { products: chartProducts, removeFromCart } = useCartStore();

  const { products } = useProductsStore(
    (state) => ({
      products: state.products,
    }),
    shallow
  );

  const items: Product[] = chartProducts.map((chartProduct) => {
    const product = products?.find((product) => product.id === chartProduct.id);
    return { ...product, ...chartProduct } as Product;
  });

  const hasItems = items?.length > 0;

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  return (
    <Box>
      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          maxHeight: '28rem',
          overflow: 'auto',
        }}
      >
        {!hasItems && (
          <ListItem alignItems='center'>
            <ListItemText primary='No product was added.' />
          </ListItem>
        )}

        {items.map((product) => (
          <ListItem
            alignItems='center'
            key={product.id}
            secondaryAction={
              <IconButton
                edge='end'
                aria-label='delete'
                color='error'
                onClick={() => handleRemoveItem(product.id)}
              >
                <Delete color='inherit' />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={product.name} src={product.image} />
            </ListItemAvatar>
            <ListItemText primary={`${product.quantity} x ${product.name}`} />
            <Chip
              label={currencyFormatter.format(product.price * product.quantity)}
              color='secondary'
              variant='outlined'
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}
      </List>

      {hasItems && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            px: 2,
            pb: 2,
          }}
        >
          <Button
            variant='contained'
            color='success'
            endIcon={<ShoppingCartIcon />}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};
