import React from 'react';

import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
