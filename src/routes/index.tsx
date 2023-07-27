import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes as ReactRoutes,
  Route,
} from 'react-router-dom';

import { Layout } from '../layout';
import { Checkout, ProductDetail, ShoppingList } from '../pages';

export const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ShoppingList />} />
        <Route path='detail/:id' element={<ProductDetail />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </ReactRoutes>
  </BrowserRouter>
);
