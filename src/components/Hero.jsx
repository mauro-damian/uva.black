import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { keyframes } from '@emotion/react';
import ArrowForward from '@mui/icons-material/ArrowForward';
import NorthEast from '@mui/icons-material/NorthEast';
import Etiqueta from './Etiqueta';
import Foto from './Foto';
import MarcaViva from './MarcaViva';
import { hero, imagenes, contacto } from '../data/contenido';
import { useMovimientoMarca } from '../hooks/useMovimientoMarca';
import { ALTO_HEADER } from '../theme';

const entrar = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: none; }
`;

const desplegar = keyframes`
  from { transform: translateY(110%) rotate(2deg); }
  to { transform: translateY(0) rotate(0); }
`;

const entrada = (retraso) => ({
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${entrar} 650ms cubic-bezier(0.2, 0.7, 0.2, 1) ${retraso}ms both`,
  },
});

export default function Hero({ alElegirMotivo }) {
  const ref = useMovimientoMarca(true);

  return (
    <Box
      ref={ref}
      component="section"
      id="inicio"
      aria-labelledby="inicio-titulo"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: `${ALTO_HEADER.xs + 40}px`, md: `${ALTO_HEADER.md + 48}px` },
        pb: { xs: 8, md: 10 },
        '&:has(.hero-contacto:focus-visible)': { '--marca-saludo': '15deg', '--marca-salto': '-10px' },
        '@media (hover: hover)': {
          '&:has(.hero-contacto:hover)': { '--marca-saludo': '15deg', '--marca-salto': '-10px' },
        },
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 3, ...entrada(0) }}>
          <Etiqueta>{hero.etiqueta}</Etiqueta>
          <Typography variant="overline" sx={{ display: { xs: 'none', md: 'block' }, color: 'text.secondary', flexShrink: 0 }}>
            {contacto.ubicacion}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mt: { xs: 2, md: 3 }, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            id="inicio-titulo"
            sx={{ fontSize: { xs: 'clamp(2.5rem, 10.3vw, 6rem)', md: 'clamp(6rem, 10.7vw, 9.4rem)' }, lineHeight: 1.02, letterSpacing: '-0.055em' }}
          >
            {hero.titulo.map((linea, indice) => (
              <Box component="span" key={linea} sx={{ display: 'block', overflow: 'hidden', pb: '0.08em', mb: '-0.08em' }}>
                <Box component="span" sx={{
                  display: 'block',
                  '@media (prefers-reduced-motion: no-preference)': {
                    animation: `${desplegar} 850ms cubic-bezier(0.2, 0.7, 0.2, 1) ${100 + indice * 130}ms both`,
                  },
                }}>{linea}</Box>
              </Box>
            ))}
          </Typography>
          <MarcaViva sx={{
            position: 'absolute', right: { xs: '2%', md: '4%' }, top: '-8%',
            width: '13%', maxWidth: 180,
          }} />
        </Box>

        <Grid container columnSpacing={{ md: 8, lg: 12 }} rowSpacing={5} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" component="p" sx={{ color: 'text.secondary', maxWidth: '40ch', mb: 3, ...entrada(500) }}>
              {hero.subtitulo}
            </Typography>
            <Stack direction="column" spacing={1.5} alignItems={{ xs: 'stretch', sm: 'flex-start' }} sx={entrada(600)}>
              <Button
                className="hero-contacto"
                href="#contacto"
                onClick={() => alElegirMotivo('general')}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
              >
                {hero.ctaPrincipal}
              </Button>
              <Button href="#servicios" variant="text" sx={{ alignSelf: 'flex-start' }}>
                {hero.ctaSecundario}
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="ul" aria-label="Líneas de trabajo" sx={{ listStyle: 'none', p: 0, m: 0, borderTop: 1, borderColor: 'divider', ...entrada(680) }}>
              {hero.accesos.map((acceso) => (
                <Box component="li" key={acceso.id} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Box component="a" href={`#${acceso.id}`} sx={{
                    display: 'grid', gridTemplateColumns: '1.5rem 1fr auto', alignItems: 'center',
                    columnGap: 2, py: { xs: 2.5, md: 3 }, color: 'text.primary', textDecoration: 'none',
                    '& .flecha': { transition: 'transform 250ms ease' },
                    '&:hover .flecha, &:focus-visible .flecha': { transform: 'translate(3px, -3px)' },
                    '&:hover .texto, &:focus-visible .texto': { textDecoration: 'underline', textUnderlineOffset: 6, textDecorationThickness: 1 },
                  }}>
                    <Box component="span" sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary' }}>{acceso.numero}</Box>
                    <Box component="span">
                      <Box component="span" sx={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'text.secondary', mb: 0.5 }}>{acceso.linea}</Box>
                      <Box component="span" className="texto" sx={{ display: 'block', fontWeight: 700, fontSize: { xs: '1.05rem', md: '1.2rem' }, letterSpacing: '-0.02em' }}>{acceso.texto}</Box>
                    </Box>
                    <NorthEast className="flecha" aria-hidden />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {imagenes.hero.src && <Foto imagen={imagenes.hero} prioridad proporcion="16 / 7" sx={{ mt: 6 }} />}
      </Container>
    </Box>
  );
}
