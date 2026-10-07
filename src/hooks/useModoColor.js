import { useCallback, useEffect, useState } from 'react';
import { CLAVE_MODO } from '../theme';

const CONSULTA_OSCURO = '(prefers-color-scheme: dark)';

function leerGuardado() {
  try {
    const valor = window.localStorage.getItem(CLAVE_MODO);
    if (valor === 'light' || valor === 'dark') return valor;
  } catch {
    // Sin acceso a localStorage: se usa la preferencia del sistema.
  }
  return null;
}

function guardar(modo) {
  try {
    window.localStorage.setItem(CLAVE_MODO, modo);
  } catch {
    // La elección vale para esta visita aunque no se pueda persistir.
  }
}

function modoDelSistema() {
  return window.matchMedia?.(CONSULTA_OSCURO).matches ? 'dark' : 'light';
}

export function useModoColor() {
  const [elegido, setElegido] = useState(leerGuardado);
  const [sistema, setSistema] = useState(modoDelSistema);

  useEffect(() => {
    const consulta = window.matchMedia?.(CONSULTA_OSCURO);
    if (!consulta) return undefined;
    const alCambiar = (evento) => setSistema(evento.matches ? 'dark' : 'light');
    consulta.addEventListener('change', alCambiar);
    return () => consulta.removeEventListener('change', alCambiar);
  }, []);

  const modo = elegido ?? sistema;

  useEffect(() => {
    document.documentElement.style.colorScheme = modo;
  }, [modo]);

  const alternar = useCallback(() => {
    const siguiente = modo === 'dark' ? 'light' : 'dark';
    guardar(siguiente);
    setElegido(siguiente);
  }, [modo]);

  return { modo, alternar };
}
