import React from 'react';

import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar />
      <Container
        maxWidth='xl'
        sx={{
          flex: 1,
          padding: 2,
          maxHeight: 'calc(100vh - 64px)',
          overflow: 'hidden',
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
