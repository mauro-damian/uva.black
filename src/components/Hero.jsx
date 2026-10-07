import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { keyframes } from '@emotion/react';
import ArrowForward from '@mui/icons-material/ArrowForward';
import SouthEast from '@mui/icons-material/SouthEast';
import Etiqueta from './Etiqueta';
import Foto from './Foto';
import Trayectoria from './Trayectoria';
import { hero, imagenes } from '../data/contenido';
import { ALTO_HEADER } from '../theme';

const entrar = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
`;

const entrada = (retraso) => ({
  animation: `${entrar} 600ms cubic-bezier(0.2, 0.7, 0.2, 1) ${retraso}ms both`,
});

export default function Hero({ alElegirMotivo }) {
  return (
    <Box
      component="section"
      id="inicio"
      aria-labelledby="inicio-titulo"
      sx={{
        position: 'relative',
        pt: { xs: `${ALTO_HEADER.xs + 40}px`, md: `${ALTO_HEADER.md + 56}px` },
        pb: { xs: 8, md: 12 },
        minHeight: { md: 'min(100svh, 980px)' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container columnSpacing={{ md: 6, lg: 10 }} rowSpacing={{ xs: 7, md: 0 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={entrada(0)}>
              <Etiqueta>{hero.etiqueta}</Etiqueta>
            </Box>

            <Typography variant="h1" id="inicio-titulo" sx={{ mb: { xs: 3.5, md: 4.5 } }}>
              {hero.titulo.map((linea, indice) => (
                <Box component="span" key={linea} sx={{ display: 'block', ...entrada(80 + indice * 90) }}>
                  {linea}
                </Box>
              ))}
            </Typography>

            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: 'text.secondary', maxWidth: '36ch', mb: { xs: 4, md: 5 }, ...entrada(380) }}
            >
              {hero.subtitulo}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 3 }}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              sx={entrada(460)}
            >
              <Button
                href="#contacto"
                onClick={() => alElegirMotivo('general')}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
              >
                {hero.ctaPrincipal}
              </Button>
              <Button href="#servicios" variant="text" size="large" sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }}>
                {hero.ctaSecundario}
              </Button>
            </Stack>

            <Box
              component="ul"
              aria-label="Líneas de trabajo"
              sx={{ listStyle: 'none', p: 0, m: 0, mt: { xs: 7, md: 9 }, borderTop: 1, borderColor: 'divider', ...entrada(560) }}
            >
              {hero.accesos.map((acceso) => (
                <Box component="li" key={acceso.id} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Box
                    component="a"
                    href={`#${acceso.id}`}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '2rem 1fr auto',
                      alignItems: 'center',
                      columnGap: { xs: 2, md: 3 },
                      py: { xs: 2.25, md: 2.75 },
                      color: 'text.primary',
                      textDecoration: 'none',
                      '& .flecha': { transition: 'transform 220ms ease' },
                      '&:hover .flecha': { transform: 'translate(3px, 3px)' },
                      '&:hover .texto': { textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 1 },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '0.8125rem', fontWeight: 600, color: 'text.secondary' }}>
                      {acceso.numero}
                    </Box>
                    <Box component="span">
                      <Box component="span" sx={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'text.secondary', mb: 0.5 }}>
                        {acceso.linea}
                      </Box>
                      <Box component="span" className="texto" sx={{ display: 'block', fontWeight: 700, fontSize: { xs: '1.125rem', md: '1.3rem' }, letterSpacing: '-0.01em' }}>
                        {acceso.texto}
                      </Box>
                    </Box>
                    <SouthEast className="flecha" aria-hidden />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', pt: { xs: 0, md: 9 }, ...entrada(200) }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: { md: 0 },
                  bottom: { xs: 'calc(100% + 8px)', md: 'auto' },
                  right: { xs: 8, md: -12 },
                  width: { xs: 88, md: 132 },
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Trayectoria retraso={700} />
              </Box>
              <Foto
                imagen={imagenes.hero}
                prioridad
                proporcion="4 / 5"
                sx={{ maxHeight: { xs: 520, md: 'none' } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
