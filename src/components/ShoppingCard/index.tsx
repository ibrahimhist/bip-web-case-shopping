import React from 'react';

import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

export const ShoppingCard = ({
  image,
  imageAlt,
  title,
  onClickAdd,
}: {
  image?: string;
  imageAlt?: string;
  imageHeight?: number;
  title?: string;
  onClickAdd?: () => void;
}) => {
  return (
    <Card>
      <CardMedia component='img' alt={imageAlt} height='140' image={image} />
      <CardActions
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 1,
          py: 0.5,
        }}
      >
        <Typography
          gutterBottom
          variant='h5'
          sx={{ marginBottom: 0, fontSize: '1rem' }}
        >
          {title}
        </Typography>
        <IconButton size='small' onClick={onClickAdd}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
