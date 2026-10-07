import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Isotipo from './Isotipo';

const claro = { fondo: 'uva.placeholder', figura: 'uva.lineaFuerte', texto: 'text.secondary' };

const variantes = {
  oscuro: {
    light: { fondo: 'text.primary', figura: 'background.default', texto: 'background.default' },
    dark: { fondo: 'uva.superficie', figura: 'text.primary', texto: 'text.secondary' },
  },
  claro: { light: claro, dark: claro },
};

// Muestra la fotografía configurada o, mientras no exista, una composición de marca reemplazable.
export default function Foto({ imagen, prioridad = false, variante = 'oscuro', leyenda = 'Mendoza', proporcion, sx }) {
  const tema = useTheme();
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
    <Box aria-hidden sx={[...base, { bgcolor: colores.fondo }]}>
      <Isotipo
        sx={{
          position: 'absolute',
          width: '74%',
          right: '-6%',
          bottom: '-16%',
          color: colores.figura,
        }}
      />
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
