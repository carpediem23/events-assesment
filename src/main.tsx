import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './configs/i18n.config.ts';
import App from './App.tsx';
import './global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
