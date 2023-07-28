import React from 'react';

import { Adb } from '@mui/icons-material';
import {
  AppBar as MuiAppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

import { CheckoutCartButton } from '../../components';

export const AppBar = () => {
  return (
    <MuiAppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHOPPING
          </Typography>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <CheckoutCartButton />
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
