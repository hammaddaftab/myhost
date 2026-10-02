import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeStrings } from './strings';

// Initialization code: looks for mode, halts deployment if prod and prod_strings contains null values
initializeStrings();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
