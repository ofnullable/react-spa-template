import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext';
import App from './App';
import 'reset-css';
import 'normalize.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>
);
