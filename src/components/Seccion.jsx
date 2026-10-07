import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TemaInverso from './TemaInverso';
import { ALTO_HEADER } from '../theme';

const fondos = {
  base: 'background.default',
  superficie: 'uva.superficie',
};

function Contenido({ id, tono, children, sx, ...props }) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-titulo`}
      sx={[
        {
          position: 'relative',
          bgcolor: fondos[tono] ?? fondos.base,
          color: 'text.primary',
          py: { xs: 10, md: 16 },
          scrollMarginTop: { xs: ALTO_HEADER.xs, md: ALTO_HEADER.md },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Container>{children}</Container>
    </Box>
  );
}

export default function Seccion({ tono = 'base', ...props }) {
  if (tono !== 'inverso') {
    return <Contenido tono={tono} {...props} />;
  }

  return (
    <TemaInverso>
      <Contenido tono="base" {...props} />
    </TemaInverso>
  );
}
