import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';

export default function ThemeToggle({ modo, alAlternar }) {
  const oscuro = modo === 'dark';
  const etiqueta = oscuro ? 'Activar modo claro' : 'Activar modo oscuro';

  return (
    <Tooltip title={etiqueta}>
      <IconButton onClick={alAlternar} aria-label={etiqueta}>
        {oscuro ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
