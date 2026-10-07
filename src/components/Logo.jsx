import Box from '@mui/material/Box';
import Isotipo from './Isotipo';

export default function Logo({ tamano = 36, href = '#inicio', alNavegar, sx }) {
  return (
    <Box
      component="a"
      href={href}
      onClick={alNavegar}
      aria-label="Uva Black, ir al inicio"
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.25,
          color: 'text.primary',
          textDecoration: 'none',
          borderRadius: 1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Isotipo sx={{ width: tamano }} />
      <Box component="span" aria-hidden sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <Box component="span" sx={{ fontWeight: 800, fontSize: tamano * 0.44, letterSpacing: '-0.01em' }}>
          UVA BLACK
        </Box>
        <Box
          component="span"
          sx={{ fontWeight: 500, fontSize: tamano * 0.3, letterSpacing: '0.42em', mt: 0.4 }}
        >
          RRHH
        </Box>
      </Box>
    </Box>
  );
}
