import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const MOCK = import.meta.env.VITE_MOCK;

async function enableMocking() {
  if (!MOCK) {
    return;
  }

  const { worker } = await import('@mocks');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
