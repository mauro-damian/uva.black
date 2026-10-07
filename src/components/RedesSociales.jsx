import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { contacto } from '../data/contenido';

const redes = [
  { clave: 'instagram', nombre: 'Instagram', Icono: Instagram },
  { clave: 'linkedin', nombre: 'LinkedIn', Icono: LinkedIn },
];

export default function RedesSociales() {
  const disponibles = redes.filter((red) => contacto[red.clave]);
  if (disponibles.length === 0) return null;

  return (
    <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
      {disponibles.map(({ clave, nombre, Icono }) => (
        <Link
          key={clave}
          href={contacto[clave]}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, fontWeight: 600 }}
        >
          <Icono aria-hidden fontSize="small" />
          {nombre}
        </Link>
      ))}
    </Stack>
  );
}
