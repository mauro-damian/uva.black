import Box from '@mui/material/Box';

// Isotipo oficial aplicado como máscara: conserva la forma exacta del archivo
// de marca y toma el color del texto, para funcionar en ambos modos.
export default function Isotipo({ etiqueta, sx }) {
  const accesible = etiqueta ? { role: 'img', 'aria-label': etiqueta } : { 'aria-hidden': true };

  return (
    <Box
      {...accesible}
      sx={[
        {
          display: 'inline-block',
          flexShrink: 0,
          aspectRatio: '640 / 625',
          backgroundColor: 'currentColor',
          maskImage: 'url(/images/marca/isotipo.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: 'url(/images/marca/isotipo.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          '@media (forced-colors: active)': { backgroundColor: 'CanvasText' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
