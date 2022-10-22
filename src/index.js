import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

