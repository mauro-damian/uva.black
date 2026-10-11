import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';
import Isotipo from './Isotipo';
import { useRevelar } from '../hooks/useRevelar';

const asomarse = keyframes`
  0% { opacity: 0; transform: translate(25%, 45%) rotate(24deg) scale(0.8); }
  65% { opacity: 1; transform: translate(-3%, -6%) rotate(-5deg) scale(1.03); }
  100% { opacity: 1; transform: none; }
`;

// La forma oficial se mantiene intacta. Entrada e interacción usan capas distintas.
export default function MarcaViva({ sx }) {
  const [ref, visible] = useRevelar();

  return (
    <Box
      ref={ref}
      component="span"
      aria-hidden
      className="marca-viva"
      sx={[{ display: 'inline-block', flexShrink: 0, width: '1em' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Box component="span" sx={{
        display: 'block',
        '@media (prefers-reduced-motion: no-preference)': {
          animation: visible ? `${asomarse} 950ms cubic-bezier(0.2, 0.7, 0.2, 1) both` : 'none',
        },
      }}>
        <Box component="span" className="marca-viva-movimiento" sx={{
          display: 'block',
          transform: 'rotate(-9deg)',
          '@media (prefers-reduced-motion: no-preference)': {
            transform: 'translate(var(--marca-x, 0px), calc(var(--marca-y, 0px) + var(--marca-salto, 0px))) rotate(calc(-9deg + var(--marca-giro, 0deg) + var(--marca-saludo, 0deg)))',
            transition: 'transform 550ms cubic-bezier(0.2, 0.7, 0.2, 1)',
          },
        }}>
          <Isotipo sx={{ display: 'block', width: '100%' }} />
        </Box>
      </Box>
    </Box>
  );
}
