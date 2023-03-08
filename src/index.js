import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import shopData from './data/data.json';
import { createContext } from 'react';

export const shop_content = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <shop_content.Provider value={{shopData}}>
    <App />
  </shop_content.Provider>
);

