import { useEffect, useRef } from 'react';

// Movimiento decorativo local: no genera renders ni intercepta el scroll táctil.
export function useMovimientoMarca(activo) {
  const ref = useRef(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!activo || !elemento) return undefined;
    const preferencia = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame;

    const restablecer = () => {
      cancelAnimationFrame(frame);
      elemento.style.removeProperty('--marca-x');
      elemento.style.removeProperty('--marca-y');
      elemento.style.removeProperty('--marca-giro');
    };

    const mover = (evento) => {
      if (!preferencia.matches || evento.pointerType !== 'mouse') return;
      const rect = elemento.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (evento.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (evento.clientY - rect.top) / rect.height * 2 - 1));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        elemento.style.setProperty('--marca-x', `${x * 12}px`);
        elemento.style.setProperty('--marca-y', `${y * 10}px`);
        elemento.style.setProperty('--marca-giro', `${x * 4}deg`);
      });
    };

    elemento.addEventListener('pointermove', mover);
    elemento.addEventListener('pointerleave', restablecer);
    elemento.addEventListener('pointercancel', restablecer);
    preferencia.addEventListener('change', restablecer);
    return () => {
      restablecer();
      elemento.removeEventListener('pointermove', mover);
      elemento.removeEventListener('pointerleave', restablecer);
      elemento.removeEventListener('pointercancel', restablecer);
      preferencia.removeEventListener('change', restablecer);
    };
  }, [activo]);

  return ref;
}
