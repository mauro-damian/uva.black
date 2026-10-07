import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Etiqueta from './Etiqueta';
import Foto from './Foto';
import Revelar from './Revelar';
import Seccion from './Seccion';
import { imagenes, nosotros } from '../data/contenido';

function Integrante({ integrante }) {
  return (
    <Box component="li">
      <Foto
        imagen={{ src: integrante.foto, alt: integrante.nombre, ancho: 800, alto: 1000, posicion: 'center top' }}
        variante="claro"
        leyenda=""
        sx={{ mb: 2 }}
      />
      <Typography variant="h4" component="h3">
        {integrante.nombre}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {integrante.rol}
      </Typography>
    </Box>
  );
}

export default function SobreUvaBlack() {
  return (
    <Seccion id="nosotros" tono="superficie">
      <Grid container columnSpacing={{ md: 8, lg: 12 }} rowSpacing={{ xs: 6, md: 0 }}>
        <Grid item xs={12} md={7}>
          <Revelar>
            <Etiqueta>{nosotros.etiqueta}</Etiqueta>
            <Typography variant="h2" id="nosotros-titulo" sx={{ mb: 4, maxWidth: '16ch' }}>
              {nosotros.titulo}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ mb: 3, maxWidth: '44ch' }}>
              {nosotros.texto}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '50ch' }}>
              {nosotros.textoSecundario}
            </Typography>
          </Revelar>
        </Grid>

        <Grid item xs={12} md={5}>
          <Revelar retraso={120}>
            <Typography variant="overline" component="h3" sx={{ color: 'text.secondary', mb: 2, mt: { md: 6 } }}>
              {nosotros.principiosTitulo}
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, borderTop: 1, borderColor: 'divider' }}>
              {nosotros.principios.map((principio) => (
                <Box
                  component="li"
                  key={principio}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    py: 2,
                    borderBottom: 1,
                    borderColor: 'divider',
                    fontWeight: 600,
                    fontSize: '1.0625rem',
                  }}
                >
                  <Box component="span" aria-hidden sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'text.primary', flexShrink: 0 }} />
                  {principio}
                </Box>
              ))}
            </Box>
          </Revelar>
        </Grid>
      </Grid>

      <Revelar sx={{ mt: { xs: 7, md: 11 } }}>
        <Foto
          imagen={imagenes.equipo}
          variante="claro"
          sx={{ aspectRatio: { xs: '4 / 5', sm: '16 / 9', md: '21 / 9' } }}
        />
      </Revelar>

      {nosotros.equipo.length > 0 && (
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            mt: 6,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {nosotros.equipo.map((integrante) => (
            <Integrante key={integrante.nombre} integrante={integrante} />
          ))}
        </Box>
      )}
    </Seccion>
  );
}
