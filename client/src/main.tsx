import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactModalProvider } from './context/ContactModalContext';
import { AppRoutes } from './routes/AppRoutes';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContactModalProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ContactModalProvider>
    </HelmetProvider>
  </React.StrictMode>
);
