import React from 'react';

import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { theme } from './theme';
import { Routes } from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
