import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Isotipo from './Isotipo';
import Logo from './Logo';
import RedesSociales from './RedesSociales';
import TemaInverso from './TemaInverso';
import { contacto, footer, navegacion } from '../data/contenido';
import { enlaceWhatsapp } from '../services/contacto';

function Contenido() {
  const anio = new Date().getFullYear();
  const whatsapp = enlaceWhatsapp();

  return (
    <Box component="footer" sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'background.default', color: 'text.primary', pt: { xs: 9, md: 12 }, pb: 4 }}>
      <Container>
        <Grid container spacing={{ xs: 6, md: 4 }}>
          <Grid item xs={12} md={5}>
            <Logo tamano={48} />
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3, maxWidth: '34ch' }}>
              {footer.descripcion}
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="overline" component="h2" sx={{ color: 'text.secondary', mb: 2 }}>
              {footer.navegacionTitulo}
            </Typography>
            <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {navegacion.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`}>{item.label}</Link>
                </li>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="overline" component="h2" sx={{ color: 'text.secondary', mb: 2 }}>
              {footer.contactoTitulo}
            </Typography>
            <Stack spacing={1.25} alignItems="flex-start">
              {whatsapp && (
                <Link href={whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              )}
              {contacto.email && <Link href={`mailto:${contacto.email}`}>{contacto.email}</Link>}
              <RedesSociales />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {contacto.ubicacion}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          aria-hidden
          sx={{
            mt: { xs: 9, md: 12 },
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: 'clamp(2.25rem, 11.5vw, 12.5rem)',
              lineHeight: 0.8,
              letterSpacing: '-0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            UVA BLACK
          </Box>
          <Isotipo sx={{ width: 'clamp(48px, 10vw, 150px)', mb: '0.4%' }} />
        </Box>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: 3,
            borderTop: 1,
            borderColor: 'divider',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {anio} {footer.derechos}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: '0.42em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
            Mendoza
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function Footer() {
  return (
    <TemaInverso>
      <Contenido />
    </TemaInverso>
  );
}
