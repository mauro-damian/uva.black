import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import Problemas from './components/Problemas';
import Servicios from './components/Servicios';
import ClimaOrganizacional from './components/ClimaOrganizacional';
import ComoTrabajamos from './components/ComoTrabajamos';
import SobreUvaBlack from './components/SobreUvaBlack';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { useModoColor } from './hooks/useModoColor';
import { crearTema } from './theme';

export default function App() {
  const { modo, alternar } = useModoColor();
  const tema = useMemo(() => crearTema(modo), [modo]);
  const [motivo, setMotivo] = useState('general');

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline enableColorScheme />
      <Box
        component="a"
        href="#contenido"
        sx={{
          position: 'fixed',
          top: 12,
          left: 12,
          zIndex: (t) => t.zIndex.tooltip,
          px: 2.5,
          py: 1.5,
          bgcolor: 'text.primary',
          color: 'background.default',
          borderRadius: 1,
          fontWeight: 600,
          textDecoration: 'none',
          transform: 'translateY(-200%)',
          '&:focus-visible': { transform: 'none' },
        }}
      >
        Saltar al contenido
      </Box>

      <Header modo={modo} alAlternarModo={alternar} />

      <Box component="main" id="contenido" tabIndex={-1} sx={{ outline: 'none' }}>
        <Hero alElegirMotivo={setMotivo} />
        <Problemas />
        <Servicios alElegirMotivo={setMotivo} />
        <ClimaOrganizacional alElegirMotivo={setMotivo} />
        <ComoTrabajamos />
        <SobreUvaBlack />
        <Contacto motivo={motivo} />
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
