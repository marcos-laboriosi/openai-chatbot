import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const MOCK = import.meta.env.VITE_MOCK;

if (MOCK) {
  const { worker } = await import('@mocks');
  await worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
