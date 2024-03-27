import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import configureStore from './hooks-store/products-store';
import ProductsProvider from './context/products-context';
import './index.css';
import App from './App';

configureStore();

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
