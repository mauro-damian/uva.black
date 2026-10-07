import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';

const trazar = keyframes`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;

const aparecer = keyframes`
  from { opacity: 0; transform: translate(-10px, 10px) scale(0.6); }
  to { opacity: 1; transform: none; }
`;

// Detalle decorativo: la trayectoria ascendente del meteorito del isotipo.
export default function Trayectoria({ retraso = 300, sx }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
      focusable="false"
      sx={[
        {
          display: 'block',
          color: 'currentColor',
          overflow: 'visible',
          '& path': {
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: `${trazar} 1100ms cubic-bezier(0.6, 0, 0.2, 1) ${retraso}ms forwards`,
          },
          '& circle': {
            opacity: 0,
            transformOrigin: '172px 28px',
            animation: `${aparecer} 500ms ease-out ${retraso + 850}ms forwards`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <path
        d="M4 196 C 60 182, 120 140, 156 46"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        pathLength="1"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="172" cy="28" r="12" fill="currentColor" />
    </Box>
  );
}
