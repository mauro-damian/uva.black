import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Etiqueta({ children, sx }) {
  return (
    <Typography
      variant="overline"
      component="p"
      sx={[
        { display: 'flex', alignItems: 'center', gap: 1.5, color: 'text.secondary', mb: 3 },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box component="span" aria-hidden sx={{ width: 28, height: '1px', bgcolor: 'currentColor' }} />
      {children}
    </Typography>
  );
}
