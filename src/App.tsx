import React from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
