import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { obtenerPendientes } from './data/pendientes';

if (import.meta.env.DEV) {
  const pendientes = obtenerPendientes();
  if (pendientes.length > 0) {
    console.warn(`Uva Black · pendientes antes de publicar:\n- ${pendientes.join('\n- ')}`);
  }
}

const raiz = document.getElementById('root');
const aplicacion = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (raiz.hasChildNodes()) {
  hydrateRoot(raiz, aplicacion);
} else {
  createRoot(raiz).render(aplicacion);
}
