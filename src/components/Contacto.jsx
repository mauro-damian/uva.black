import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import MailOutline from '@mui/icons-material/MailOutline';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Etiqueta from './Etiqueta';
import Revelar from './Revelar';
import Seccion from './Seccion';
import RedesSociales from './RedesSociales';
import { contacto, contactoSeccion, motivosConsulta } from '../data/contenido';
import { enlaceWhatsapp, enviarConsulta, hayDestinatario, validarConsulta } from '../services/contacto';

const CAMPOS = ['nombre', 'email', 'mensaje'];
const VACIO = { nombre: '', email: '', mensaje: '' };
const textosDeMotivo = new Set(Object.values(motivosConsulta));

export default function Contacto({ motivo }) {
  const [valores, setValores] = useState(VACIO);
  const [tocados, setTocados] = useState({});
  const [intentoEnvio, setIntentoEnvio] = useState(false);
  const refs = { nombre: useRef(null), email: useRef(null), mensaje: useRef(null) };

  useEffect(() => {
    const texto = motivosConsulta[motivo];
    if (!texto) return;
    setValores((actuales) => {
      if (!textosDeMotivo.has(actuales.mensaje.trim())) return actuales;
      return { ...actuales, mensaje: texto };
    });
  }, [motivo]);

  const errores = validarConsulta(valores);
  const destinatario = hayDestinatario();
  const habilitado = destinatario && Object.keys(errores).length === 0;
  const whatsapp = enlaceWhatsapp(motivo);

  const mostrarError = (campo) => Boolean(errores[campo] && (tocados[campo] || intentoEnvio));

  const alCambiar = (evento) => {
    const { name, value } = evento.target;
    setValores((actuales) => ({ ...actuales, [name]: value }));
  };

  const alSalir = (evento) => {
    const { name } = evento.target;
    setTocados((actuales) => ({ ...actuales, [name]: true }));
  };

  const alEnviar = (evento) => {
    evento.preventDefault();
    setIntentoEnvio(true);
    const primerError = CAMPOS.find((campo) => errores[campo]);
    if (primerError) {
      refs[primerError].current?.focus();
      return;
    }
    enviarConsulta(valores);
  };

  const propsCampo = (campo) => ({
    name: campo,
    id: `contacto-${campo}`,
    label: contactoSeccion.campos[campo],
    value: valores[campo],
    onChange: alCambiar,
    onBlur: alSalir,
    inputRef: refs[campo],
    error: mostrarError(campo),
    helperText: mostrarError(campo) ? errores[campo] : ' ',
    required: true,
    fullWidth: true,
  });

  return (
    <Seccion id="contacto">
      <Grid container columnSpacing={{ md: 8, lg: 12 }} rowSpacing={{ xs: 7, md: 0 }}>
        <Grid item xs={12} md={5}>
          <Revelar>
            <Etiqueta>{contactoSeccion.etiqueta}</Etiqueta>
            <Typography variant="h2" id="contacto-titulo" sx={{ mb: 4, maxWidth: '12ch' }}>
              {contactoSeccion.titulo}
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ color: 'text.secondary', mb: 5, maxWidth: '36ch' }}>
              {contactoSeccion.texto}
            </Typography>

            {whatsapp && (
              <Button
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                sx={{ mb: 4 }}
              >
                {contactoSeccion.whatsappCta}
              </Button>
            )}

            <Stack spacing={1.5} sx={{ borderTop: 1, borderColor: 'divider', pt: 3 }}>
              {contacto.email && (
                <Link href={`mailto:${contacto.email}`} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, fontWeight: 600, width: 'fit-content' }}>
                  <MailOutline aria-hidden fontSize="small" />
                  {contacto.email}
                </Link>
              )}
              <RedesSociales />
              <Typography variant="overline" component="p" sx={{ color: 'text.secondary', letterSpacing: '0.42em' }}>
                {contacto.ubicacion}
              </Typography>
            </Stack>
          </Revelar>
        </Grid>

        <Grid item xs={12} md={7}>
          <Revelar retraso={120}>
            <Box
              component="form"
              noValidate
              onSubmit={alEnviar}
              aria-labelledby="contacto-formulario-titulo"
              sx={{
                bgcolor: 'uva.superficie',
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                p: { xs: 3, sm: 4, md: 6 },
              }}
            >
              <Typography variant="h3" component="h3" id="contacto-formulario-titulo" sx={{ mb: 4 }}>
                {contactoSeccion.formularioTitulo}
              </Typography>

              <Grid container columnSpacing={2.5} rowSpacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField {...propsCampo('nombre')} autoComplete="name" inputProps={{ maxLength: 120 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField {...propsCampo('email')} type="email" autoComplete="email" inputProps={{ maxLength: 160, inputMode: 'email' }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField {...propsCampo('mensaje')} multiline minRows={5} autoComplete="off" inputProps={{ maxLength: 2000 }} />
                </Grid>
              </Grid>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 3 }} alignItems={{ xs: 'stretch', sm: 'center' }} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" size="large" disabled={!habilitado} endIcon={<ArrowForward />} sx={{ flexShrink: 0 }}>
                  {contactoSeccion.boton}
                </Button>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {contactoSeccion.aclaracion}
                </Typography>
              </Stack>

              {contacto.email && (
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
                  {contactoSeccion.alternativaEmail}{' '}
                  <Link href={`mailto:${contacto.email}`} sx={{ fontWeight: 600 }}>
                    {contacto.email}
                  </Link>
                  .
                </Typography>
              )}

              {import.meta.env.DEV && !destinatario && (
                <Typography variant="body2" sx={{ mt: 3, p: 1.5, border: 1, borderStyle: 'dashed', borderColor: 'uva.lineaFuerte', borderRadius: 1 }}>
                  Solo en desarrollo: configurá contacto.email en src/data/contenido.js para habilitar el envío.
                </Typography>
              )}
            </Box>
          </Revelar>
        </Grid>
      </Grid>
    </Seccion>
  );
}
