import React, { useState } from 'react';

import { InputAdornment, Paper, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { shallow } from 'zustand/shallow';
import { useDebouncedCallback } from 'use-debounce';

import { useProductsStore } from '../../../../stores';

export const ShoppingSearch = () => {
  const { setStoreSearchText } = useProductsStore(
    (state) => ({
      setStoreSearchText: state.setSearchText,
    }),
    shallow
  );

  const [searchText, setSearchText] = useState('');

  const debouncedSetSearchText = useDebouncedCallback((newText: string) => {
    setStoreSearchText(newText);
  }, 400);

  const handleSearchTextChange = (newText: string) => {
    setSearchText(newText);
    debouncedSetSearchText(newText);
  };

  return (
    <Paper variant='outlined' sx={{ p: 1 }}>
      <TextField
        value={searchText}
        id='shopping-search-input'
        variant='outlined'
        type='text'
        placeholder='Search'
        inputProps={{
          autoComplete: 'new-password',
        }}
        size='small'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
    </Paper>
  );
};
