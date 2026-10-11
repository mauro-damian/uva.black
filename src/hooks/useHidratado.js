import { useSyncExternalStore } from 'react';

const suscribir = () => () => {};
const enNavegador = () => true;
const enHtmlInicial = () => false;

// El primer render del navegador debe coincidir con el HTML del build.
export function useHidratado() {
  return useSyncExternalStore(suscribir, enNavegador, enHtmlInicial);
}
