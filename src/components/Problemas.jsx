import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Etiqueta from './Etiqueta';
import Revelar from './Revelar';
import Seccion from './Seccion';
import { problemas, servicios } from '../data/contenido';

export default function Problemas() {
  return (
    <Seccion id="problemas">
      <Grid container columnSpacing={{ md: 8 }} rowSpacing={{ xs: 5, md: 0 }}>
        <Grid item xs={12} md={5}>
          <Revelar sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <Etiqueta>{problemas.etiqueta}</Etiqueta>
            <Typography variant="h2" id="problemas-titulo" sx={{ maxWidth: '14ch' }}>
              {problemas.titulo}
            </Typography>
          </Revelar>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, borderTop: 1, borderColor: 'divider' }}>
            {problemas.items.map((item, indice) => {
              const servicio = servicios.tarjetas[item.servicio];
              return (
                <Revelar
                  component="li"
                  key={item.texto}
                  retraso={indice * 60}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '2.5rem 1fr', sm: '3.5rem 1fr' },
                    columnGap: 2,
                    rowGap: 1.5,
                    py: { xs: 3, md: 3.75 },
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Box component="span" aria-hidden sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'text.secondary', pt: 0.75 }}>
                    {String(indice + 1).padStart(2, '0')}
                  </Box>
                  <Box>
                    <Typography
                      component="p"
                      sx={{ fontWeight: 700, fontSize: 'clamp(1.2rem, 1rem + 0.9vw, 1.65rem)', lineHeight: 1.25, letterSpacing: '-0.015em', mb: 1.25 }}
                    >
                      {item.texto}
                    </Typography>
                    <Box
                      component="a"
                      href={`#servicio-${item.servicio}`}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.75,
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        '& svg': { transition: 'transform 200ms ease' },
                        '&:hover': { color: 'text.primary' },
                        '&:hover svg': { transform: 'translateX(3px)' },
                      }}
                    >
                      {servicio.titulo}
                      <ArrowForward aria-hidden sx={{ fontSize: 16 }} />
                    </Box>
                  </Box>
                </Revelar>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Seccion>
  );
}
