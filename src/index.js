import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // Ensure the path is correct
import App from './App'; // Make sure App is correctly defined
import { Provider } from 'react-redux';
import store from './redux/store'; // Check the store configuration

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
