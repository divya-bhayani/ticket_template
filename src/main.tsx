import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { persistor, Store } from './Store/Store.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
 
)
