import { useMemo } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { crearTema } from '../theme';

// Aplica el tema opuesto: negro en modo claro, claro en modo oscuro.
export default function TemaInverso({ children }) {
  const tema = useTheme();
  const opuesto = tema.palette.mode === 'dark' ? 'light' : 'dark';
  const temaInverso = useMemo(() => crearTema(opuesto), [opuesto]);

  return <ThemeProvider theme={temaInverso}>{children}</ThemeProvider>;
}
