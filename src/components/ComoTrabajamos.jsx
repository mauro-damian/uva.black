import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Etiqueta from './Etiqueta';
import Revelar from './Revelar';
import Seccion from './Seccion';
import { proceso } from '../data/contenido';
import { useRevelar } from '../hooks/useRevelar';

export default function ComoTrabajamos() {
  const [refRecorrido, visible] = useRevelar({ umbral: 0.25 });

  return (
    <Seccion id="como-trabajamos">
      <Grid container columnSpacing={{ md: 8 }} rowSpacing={3} sx={{ mb: { xs: 7, md: 11 } }} alignItems="flex-end">
        <Grid item xs={12} md={7}>
          <Revelar>
            <Etiqueta>{proceso.etiqueta}</Etiqueta>
            <Typography variant="h2" id="como-trabajamos-titulo" sx={{ maxWidth: '15ch' }}>
              {proceso.titulo}
            </Typography>
          </Revelar>
        </Grid>
        <Grid item xs={12} md={5}>
          <Revelar retraso={100}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '44ch' }}>
              {proceso.texto}
            </Typography>
          </Revelar>
        </Grid>
      </Grid>

      <Box
        ref={refRecorrido}
        component="ol"
        sx={{
          position: 'relative',
          listStyle: 'none',
          m: 0,
          p: 0,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' },
          columnGap: { md: 3, lg: 4 },
          rowGap: { xs: 5, md: 0 },
          pl: { xs: 4, md: 0 },
          pt: { md: 5 },
          '&::before': {
            content: '""',
            position: 'absolute',
            bgcolor: 'text.primary',
            transition: 'transform 1100ms cubic-bezier(0.6, 0, 0.2, 1)',
            top: { xs: 8, md: 0 },
            bottom: { xs: 8, md: 'auto' },
            left: { xs: 5, md: 0 },
            right: { md: 0 },
            width: { xs: '1px', md: 'auto' },
            height: { md: '1px' },
            transformOrigin: { xs: 'top', md: 'left' },
            transform: {
              xs: visible ? 'scaleY(1)' : 'scaleY(0)',
              md: visible ? 'scaleX(1)' : 'scaleX(0)',
            },
          },
        }}
      >
        {proceso.etapas.map((etapa, indice) => (
          <Box
            component="li"
            key={etapa.titulo}
            sx={{
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(14px)',
              transition: 'opacity 500ms ease, transform 500ms ease',
              transitionDelay: `${250 + indice * 140}ms`,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                width: 11,
                height: 11,
                borderRadius: '50%',
                bgcolor: 'text.primary',
                left: { xs: -32, md: 0 },
                top: { xs: 8, md: -45 },
              }}
            />
            <Box component="span" aria-hidden sx={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'text.secondary', mb: { xs: 1, md: 2.5 } }}>
              {String(indice + 1).padStart(2, '0')}
            </Box>
            <Typography variant="h3" component="h3" sx={{ fontSize: { md: '1.25rem', lg: '1.4rem' }, mb: 1 }}>
              {etapa.titulo}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {etapa.texto}
            </Typography>
          </Box>
        ))}
      </Box>
    </Seccion>
  );
}
