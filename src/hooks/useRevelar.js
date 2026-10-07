import { useEffect, useRef, useState } from 'react';

function animacionPermitida() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return false;
  return !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

// Devuelve una ref y si el elemento ya entró en pantalla. Sin soporte o con
// movimiento reducido, el contenido se considera visible desde el inicio.
export function useRevelar({ umbral = 0.05 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => !animacionPermitida());

  useEffect(() => {
    if (visible || !ref.current) return undefined;
    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((entrada) => entrada.isIntersecting)) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: umbral, rootMargin: '0px 0px -8% 0px' },
    );
    observador.observe(ref.current);
    return () => observador.disconnect();
  }, [visible, umbral]);

  return [ref, visible];
}
