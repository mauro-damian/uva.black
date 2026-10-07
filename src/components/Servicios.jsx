import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import AccountTreeOutlined from '@mui/icons-material/AccountTreeOutlined';
import ForumOutlined from '@mui/icons-material/ForumOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import PersonSearchOutlined from '@mui/icons-material/PersonSearchOutlined';
import SchoolOutlined from '@mui/icons-material/SchoolOutlined';
import Etiqueta from './Etiqueta';
import Revelar from './Revelar';
import Seccion from './Seccion';
import { servicios } from '../data/contenido';
import { ALTO_HEADER } from '../theme';

const iconos = {
  busqueda: PersonSearchOutlined,
  clima: ForumOutlined,
  organizacion: AccountTreeOutlined,
  liderazgo: GroupsOutlined,
  capacitacion: SchoolOutlined,
};

const anclaje = { scrollMarginTop: { xs: ALTO_HEADER.xs + 24, md: ALTO_HEADER.md + 32 } };

function Tarjeta({ id, tarjeta, ancha }) {
  const Icono = iconos[tarjeta.icono];

  return (
    <Box
      component="article"
      id={`servicio-${id}`}
      aria-labelledby={`servicio-${id}-titulo`}
      sx={{
        ...anclaje,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        p: { xs: 3, md: ancha ? 5 : 4 },
        transition: 'border-color 220ms ease, transform 220ms ease',
        '&:hover': { borderColor: 'text.primary', transform: 'translateY(-2px)' },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          display: 'grid',
          placeItems: 'center',
          border: 1,
          borderColor: 'divider',
          borderRadius: '50%',
          mb: 3,
        }}
      >
        <Icono aria-hidden sx={{ fontSize: 22 }} />
      </Box>

      <Typography variant="h4" component="h4" id={`servicio-${id}-titulo`} sx={{ fontSize: ancha ? '1.5rem' : '1.2rem', mb: 1.5 }}>
        {tarjeta.titulo}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: tarjeta.texto || tarjeta.incluye ? 2.5 : 0 }}>
        {tarjeta.resuelve}
      </Typography>

      {tarjeta.texto && (
        <Typography variant="body2" sx={{ mt: 'auto', pt: 2.5, borderTop: 1, borderColor: 'divider' }}>
          {tarjeta.texto}
        </Typography>
      )}

      {tarjeta.incluye && (
        <Box sx={{ mt: 'auto', pt: 3, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="overline" component="p" sx={{ color: 'text.secondary', mb: 2 }}>
            {tarjeta.incluyeTitulo}
          </Typography>
          <Box
            component="ol"
            sx={{
              listStyle: 'none',
              m: 0,
              p: 0,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              columnGap: 4,
              rowGap: 1.5,
              counterReset: 'paso',
            }}
          >
            {tarjeta.incluye.map((paso) => (
              <Box
                component="li"
                key={paso}
                sx={{
                  counterIncrement: 'paso',
                  display: 'grid',
                  gridTemplateColumns: '2rem 1fr',
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  '&::before': {
                    content: 'counter(paso, decimal-leading-zero)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'text.secondary',
                    pt: '0.2em',
                  },
                }}
              >
                {paso}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

function Linea({ linea, alElegirMotivo }) {
  const ancha = linea.tarjetas.length === 1;

  return (
    <Box id={linea.id} sx={{ ...anclaje, py: { xs: 6, md: 9 }, borderTop: 1, borderColor: 'uva.lineaFuerte' }}>
      <Grid container columnSpacing={{ md: 6, lg: 8 }} rowSpacing={{ xs: 4, md: 0 }}>
        <Grid item xs={12} md={4}>
          <Revelar sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 3 }}>
              <Box component="span" aria-hidden sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.04em' }}>
                {linea.numero}
              </Box>
              <Typography variant="overline" component="p" sx={{ color: 'text.secondary' }}>
                {linea.nombre}
              </Typography>
            </Box>
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
              {linea.titulo}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: '42ch' }}>
              {linea.texto}
            </Typography>
            <Button
              href="#contacto"
              onClick={() => alElegirMotivo(linea.motivo)}
              variant="outlined"
              endIcon={<ArrowForward />}
            >
              {linea.cta}
            </Button>
          </Revelar>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2.5}>
            {linea.tarjetas.map((id, indice) => (
              <Grid item xs={12} sm={ancha ? 12 : 6} key={id}>
                <Revelar retraso={indice * 80} sx={{ height: '100%' }}>
                  <Tarjeta id={id} tarjeta={servicios.tarjetas[id]} ancha={ancha} />
                </Revelar>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Servicios({ alElegirMotivo }) {
  return (
    <Seccion id="servicios" tono="superficie" sx={{ pb: { xs: 6, md: 8 } }}>
      <Revelar sx={{ mb: { xs: 6, md: 8 } }}>
        <Etiqueta>{servicios.etiqueta}</Etiqueta>
        <Typography variant="h2" id="servicios-titulo" sx={{ maxWidth: '18ch' }}>
          {servicios.titulo}
        </Typography>
      </Revelar>

      {servicios.lineas.map((linea) => (
        <Linea key={linea.id} linea={linea} alElegirMotivo={alElegirMotivo} />
      ))}
    </Seccion>
  );
}
