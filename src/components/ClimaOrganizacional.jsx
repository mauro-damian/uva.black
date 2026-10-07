import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Etiqueta from './Etiqueta';
import Foto from './Foto';
import Isotipo from './Isotipo';
import Revelar from './Revelar';
import Seccion from './Seccion';
import { clima, imagenes } from '../data/contenido';

export default function ClimaOrganizacional({ alElegirMotivo }) {
  return (
    <Seccion id="clima" tono="inverso" sx={{ overflow: 'hidden' }}>
      <Isotipo
        sx={{
          position: 'absolute',
          width: { xs: 220, md: 460 },
          right: { xs: -110, md: -140 },
          top: { xs: -110, md: -120 },
          color: 'divider',
        }}
      />

      <Grid container columnSpacing={{ md: 8, lg: 12 }} rowSpacing={{ xs: 7, md: 0 }} sx={{ position: 'relative' }}>
        <Grid item xs={12} md={6}>
          <Revelar>
            <Etiqueta>{clima.etiqueta}</Etiqueta>
            <Typography variant="h2" id="clima-titulo" sx={{ mb: 4, maxWidth: '13ch' }}>
              {clima.titulo}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ mb: 3, maxWidth: '40ch' }}>
              {clima.texto}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: '44ch' }}>
              {clima.nota}
            </Typography>
            <Button
              href="#contacto"
              onClick={() => alElegirMotivo(clima.motivo)}
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
            >
              {clima.cta}
            </Button>
          </Revelar>

          {imagenes.clima.src && (
            <Revelar sx={{ mt: 8 }}>
              <Foto imagen={imagenes.clima} />
            </Revelar>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, mt: { md: 11 } }}>
            {clima.momentos.map((momento, indice) => (
              <Revelar
                component="li"
                key={momento.titulo}
                retraso={indice * 120}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '3.25rem 1fr', md: '5rem 1fr' },
                  columnGap: 2,
                  py: { xs: 3.5, md: 4.5 },
                  borderTop: 1,
                  borderColor: 'divider',
                  '&:last-of-type': { borderBottom: 1, borderColor: 'divider' },
                }}
              >
                <Box
                  component="span"
                  aria-hidden
                  sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {indice + 1}
                </Box>
                <Box>
                  <Typography variant="h3" component="h3" sx={{ mb: 1 }}>
                    {momento.titulo}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {momento.texto}
                  </Typography>
                </Box>
              </Revelar>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Seccion>
  );
}
