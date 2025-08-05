// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai'; 
import { Provider as ChakraProvider } from "@/components/ui/provider";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '@/components/common/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JotaiProvider>
      <BrowserRouter>
        <HelmetProvider>
          <ChakraProvider>
            <ScrollToTop />
            <App />
          </ChakraProvider>
        </HelmetProvider>
      </BrowserRouter>
    </JotaiProvider>
  </React.StrictMode>
);
