import Box from '@mui/material/Box';
import { useRevelar } from '../hooks/useRevelar';

export default function Revelar({ children, retraso = 0, component = 'div', sx, ...props }) {
  const [ref, visible] = useRevelar();

  return (
    <Box
      ref={ref}
      component={component}
      sx={[
        {
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(18px)',
          transition: 'opacity 560ms ease, transform 560ms cubic-bezier(0.2, 0.7, 0.2, 1)',
          transitionDelay: `${retraso}ms`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
