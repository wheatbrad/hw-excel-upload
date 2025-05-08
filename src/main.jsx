import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('hw-item-number-upload')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
