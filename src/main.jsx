import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { obtenerPendientes } from './data/pendientes';

if (import.meta.env.DEV) {
  const pendientes = obtenerPendientes();
  if (pendientes.length > 0) {
    console.warn(`Uva Black · pendientes antes de publicar:\n- ${pendientes.join('\n- ')}`);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
