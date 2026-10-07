import { createTheme, alpha } from '@mui/material/styles';

export const CLAVE_MODO = 'uvablack-modo';

const marca = {
  blanco: '#F5F5F2',
  negro: '#141414',
  gris: '#686868',
  linea: '#DADAD5',
};

const tonos = {
  light: {
    fondo: marca.blanco,
    superficie: '#ECECE8',
    texto: marca.negro,
    textoSecundario: marca.gris,
    linea: marca.linea,
    lineaFuerte: '#BDBDB7',
    placeholder: '#E2E2DD',
    error: '#A8261B',
  },
  dark: {
    fondo: marca.negro,
    superficie: '#1C1C1B',
    texto: marca.blanco,
    textoSecundario: '#A6A6A2',
    linea: '#2E2E2C',
    lineaFuerte: '#4A4A47',
    placeholder: '#242423',
    error: '#F2A49C',
  },
};

const fuente = '"Montserrat", "Helvetica Neue", Arial, system-ui, sans-serif';

export const ALTO_HEADER = { xs: 64, md: 76 };

export function crearTema(modo) {
  const t = tonos[modo];

  const tema = createTheme({
    palette: {
      mode: modo,
      primary: { main: t.texto, contrastText: t.fondo },
      secondary: { main: t.textoSecundario, contrastText: t.fondo },
      error: { main: t.error },
      background: { default: t.fondo, paper: t.fondo },
      text: {
        primary: t.texto,
        secondary: t.textoSecundario,
        disabled: alpha(t.texto, 0.38),
      },
      divider: t.linea,
      action: {
        hover: alpha(t.texto, 0.06),
        selected: alpha(t.texto, 0.1),
        disabled: alpha(t.texto, 0.32),
        disabledBackground: alpha(t.texto, 0.1),
        focus: alpha(t.texto, 0.14),
      },
      uva: {
        superficie: t.superficie,
        lineaFuerte: t.lineaFuerte,
        placeholder: t.placeholder,
        foco: t.texto,
      },
    },
    shape: { borderRadius: 6 },
    typography: {
      fontFamily: fuente,
      htmlFontSize: 16,
      h1: {
        fontWeight: 800,
        fontSize: 'clamp(2.6rem, 1.2rem + 6vw, 6.4rem)',
        lineHeight: 0.98,
        letterSpacing: '-0.035em',
      },
      h2: {
        fontWeight: 800,
        fontSize: 'clamp(2rem, 1.25rem + 3.2vw, 4rem)',
        lineHeight: 1.04,
        letterSpacing: '-0.03em',
      },
      h3: {
        fontWeight: 700,
        fontSize: 'clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)',
        lineHeight: 1.2,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.125rem',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: 'clamp(1.075rem, 1rem + 0.35vw, 1.3rem)',
        lineHeight: 1.55,
      },
      body1: { fontSize: '1.0625rem', lineHeight: 1.65 },
      body2: { fontSize: '0.9375rem', lineHeight: 1.6 },
      overline: {
        fontWeight: 600,
        fontSize: '0.75rem',
        lineHeight: 1.6,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
      },
      button: {
        fontWeight: 600,
        fontSize: '0.9375rem',
        letterSpacing: '0.01em',
        textTransform: 'none',
      },
    },
  });

  const foco = {
    outline: `2px solid ${t.texto}`,
    outlineOffset: 3,
  };

  tema.components = {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          WebkitTextSizeAdjust: '100%',
        },
        body: {
          overflowX: 'hidden',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
        },
        '::selection': {
          backgroundColor: t.texto,
          color: t.fondo,
        },
        'a, button, input, textarea, [tabindex]': {
          '&:focus-visible': foco,
        },
        img: { maxWidth: '100%', display: 'block' },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'lg' },
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          [tema.breakpoints.up('sm')]: { paddingLeft: 32, paddingRight: 32 },
          [tema.breakpoints.up('md')]: { paddingLeft: 48, paddingRight: 48 },
        },
        maxWidthLg: {
          [tema.breakpoints.up('lg')]: { maxWidth: 1280 + 96 },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minHeight: 48,
          paddingInline: 22,
          borderRadius: 999,
          transition: 'background-color 200ms ease, color 200ms ease, border-color 200ms ease',
          '& .MuiButton-endIcon': {
            transition: 'transform 200ms ease',
          },
          '&:hover .MuiButton-endIcon': {
            transform: 'translateX(3px)',
          },
          '&.Mui-focusVisible': foco,
        },
        sizeLarge: {
          minHeight: 56,
          paddingInline: 28,
          fontSize: '1rem',
        },
        containedPrimary: {
          '&:hover': { backgroundColor: alpha(t.texto, 0.84) },
        },
        outlined: {
          borderColor: t.lineaFuerte,
          color: t.texto,
          '&:hover': {
            borderColor: t.texto,
            backgroundColor: 'transparent',
          },
        },
        text: {
          paddingInline: 4,
          color: t.texto,
          '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline', textUnderlineOffset: 6 },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 44,
          height: 44,
          color: t.texto,
          border: `1px solid ${t.linea}`,
          transition: 'border-color 200ms ease, background-color 200ms ease',
          '&:hover': { borderColor: t.texto, backgroundColor: 'transparent' },
          '&.Mui-focusVisible': foco,
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: {
          color: t.texto,
          textUnderlineOffset: 5,
          textDecorationThickness: 1,
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: t.linea } },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: t.fondo,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: t.lineaFuerte },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: t.texto },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: t.texto, borderWidth: 2 },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: t.error },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: t.textoSecundario,
          '&.Mui-focused': { color: t.texto },
          '&.Mui-error': { color: t.error },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { marginLeft: 2, fontSize: '0.8125rem' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: t.fondo },
      },
    },
  };

  return tema;
}
