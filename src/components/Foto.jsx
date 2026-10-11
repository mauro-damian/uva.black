import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import Isotipo from './Isotipo';
import { useMovimientoMarca } from '../hooks/useMovimientoMarca';

const ascender = keyframes`
  from { opacity: 0; transform: translate(-18px, 24px) rotate(-7deg); }
  to { opacity: 1; transform: translate(0, 0) rotate(0); }
`;

const claro = { fondo: 'uva.placeholder', figura: 'uva.lineaFuerte', texto: 'text.secondary' };

const variantes = {
  oscuro: {
    light: { fondo: 'text.primary', figura: 'background.default', texto: 'background.default' },
    dark: { fondo: 'uva.superficie', figura: 'text.primary', texto: 'text.secondary' },
  },
  claro: { light: claro, dark: claro },
};

// Muestra la fotografía configurada o, mientras no exista, una composición de marca reemplazable.
export default function Foto({ imagen, prioridad = false, interactiva = false, variante = 'oscuro', leyenda = 'Mendoza', proporcion, sx }) {
  const tema = useTheme();
  const ref = useMovimientoMarca(interactiva && !imagen.src);
  const relacion = proporcion ?? `${imagen.ancho} / ${imagen.alto}`;
  const base = [
    { position: 'relative', overflow: 'hidden', aspectRatio: relacion, borderRadius: 1, width: '100%' },
    ...(Array.isArray(sx) ? sx : [sx]),
  ];

  if (imagen.src) {
    return (
      <Box sx={base}>
        <Box
          component="img"
          src={imagen.src}
          alt={imagen.alt}
          width={imagen.ancho}
          height={imagen.alto}
          loading={prioridad ? 'eager' : 'lazy'}
          fetchPriority={prioridad ? 'high' : 'auto'}
          decoding="async"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imagen.posicion,
            filter: 'grayscale(1) contrast(1.04)',
          }}
        />
      </Box>
    );
  }

  const colores = variantes[variante][tema.palette.mode];

  return (
    <Box ref={ref} aria-hidden sx={[...base, {
      bgcolor: colores.fondo,
      ...(interactiva && {
        '&::after': {
          content: '""', position: 'absolute', inset: { xs: 14, md: 20 },
          border: '1px solid', borderColor: colores.figura, opacity: 0.12,
          pointerEvents: 'none',
        },
      }),
    }]}>
      <Box
        sx={{
          position: 'absolute',
          width: '74%',
          right: '-6%',
          bottom: '-16%',
          color: colores.figura,
          ...(interactiva && {
            '@media (prefers-reduced-motion: no-preference)': {
              animation: `${ascender} 850ms cubic-bezier(0.2, 0.7, 0.2, 1) 300ms both`,
            },
          }),
        }}
      >
        <Isotipo sx={{
          width: '100%', display: 'block',
          ...(interactiva && {
            '@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)': {
              transform: 'translate(var(--marca-x, 0px), var(--marca-y, 0px)) rotate(var(--marca-giro, 0deg))',
              transition: 'transform 400ms cubic-bezier(0.2, 0.7, 0.2, 1)',
            },
          }),
        }} />
      </Box>
      <Box
        component="span"
        sx={{
          position: 'absolute',
          left: { xs: 20, md: 28 },
          top: { xs: 20, md: 28 },
          color: colores.texto,
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.5em',
          textTransform: 'uppercase',
        }}
      >
        {leyenda}
      </Box>
    </Box>
  );
}
