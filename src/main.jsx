import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('hw-excel-upload')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
