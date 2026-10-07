import { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import CloseRounded from '@mui/icons-material/CloseRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { header, navegacion, contacto } from '../data/contenido';
import { ALTO_HEADER } from '../theme';

export default function Header({ modo, alAlternarModo }) {
  const [desplazado, setDesplazado] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 12);
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  const destino = useRef(null);

  const cerrarMenu = () => setMenuAbierto(false);

  const navegarDesdeMenu = (evento, id) => {
    evento.preventDefault();
    destino.current = id;
    cerrarMenu();
  };

  const alTerminarCierre = () => {
    const id = destino.current;
    destino.current = null;
    const seccion = id ? document.getElementById(id) : null;
    if (!seccion) return;
    const reducido = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    seccion.scrollIntoView({ behavior: reducido ? 'auto' : 'smooth' });
    seccion.setAttribute('tabindex', '-1');
    seccion.focus({ preventScroll: true });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        height: ALTO_HEADER,
        justifyContent: 'center',
        color: 'text.primary',
        bgcolor: (tema) => alpha(tema.palette.background.default, desplazado ? 0.9 : 0),
        backdropFilter: desplazado ? 'saturate(140%) blur(12px)' : 'none',
        borderBottom: 1,
        borderColor: desplazado ? 'divider' : 'transparent',
        transition: 'background-color 250ms ease, border-color 250ms ease',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Logo />

        <Box component="nav" aria-label="Principal" sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack component="ul" direction="row" spacing={{ md: 3.5, lg: 5 }} sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {navegacion.map((item) => (
              <li key={item.id}>
                <Box
                  component="a"
                  href={`#${item.id}`}
                  sx={{
                    position: 'relative',
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    py: 1,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 2,
                      height: '1px',
                      bgcolor: 'currentColor',
                      transform: 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 220ms ease',
                    },
                    '&:hover::after': { transform: 'scaleX(1)', transformOrigin: 'left' },
                  }}
                >
                  {item.label}
                </Box>
              </li>
            ))}
          </Stack>
        </Box>

        <Stack direction="row" spacing={1.25} alignItems="center">
          <Button
            href="#contacto"
            variant="contained"
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, minHeight: 44 }}
          >
            {header.cta}
          </Button>
          <ThemeToggle modo={modo} alAlternar={alAlternarModo} />
          <IconButton
            aria-label="Abrir menú"
            aria-controls="menu-movil"
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuRounded fontSize="small" />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        id="menu-movil"
        anchor="top"
        open={menuAbierto}
        onClose={cerrarMenu}
        SlideProps={{ onExited: alTerminarCierre }}
        PaperProps={{ sx: { height: '100dvh', color: 'text.primary' } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Container
            sx={{ height: ALTO_HEADER, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}
          >
            <Logo href="#inicio" alNavegar={(evento) => navegarDesdeMenu(evento, 'inicio')} />
            <IconButton aria-label="Cerrar menú" onClick={cerrarMenu}>
              <CloseRounded fontSize="small" />
            </IconButton>
          </Container>

          <Container component="nav" aria-label="Menú móvil" sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: 4 }}>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, borderTop: 1, borderColor: 'divider' }}>
              {navegacion.map((item) => (
                <Box component="li" key={item.id} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Box
                    component="a"
                    href={`#${item.id}`}
                    onClick={(evento) => navegarDesdeMenu(evento, item.id)}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      py: 2.5,
                      color: 'text.primary',
                      textDecoration: 'none',
                      fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.label}
                    <ArrowForward aria-hidden />
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 'auto', pb: 4, pt: 4 }}>
              <Button href="#contacto" onClick={(evento) => navegarDesdeMenu(evento, 'contacto')} variant="contained" size="large" fullWidth>
                {header.cta}
              </Button>
              <Box component="p" sx={{ color: 'text.secondary', fontSize: '0.75rem', letterSpacing: '0.42em', textTransform: 'uppercase', textAlign: 'center', mt: 3, mb: 0 }}>
                {contacto.ubicacion}
              </Box>
            </Box>
          </Container>
        </Box>
      </Drawer>
    </AppBar>
  );
}
