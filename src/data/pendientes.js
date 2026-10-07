import { contacto, imagenes, nosotros, sitio } from './contenido';

// Lista de datos faltantes antes de publicar. Solo se muestra en desarrollo.
export function obtenerPendientes() {
  const pendientes = [];
  if (!contacto.whatsapp) pendientes.push('contacto.whatsapp: número de WhatsApp');
  if (!contacto.email) pendientes.push('contacto.email: correo destinatario del formulario');
  if (!contacto.instagram) pendientes.push('contacto.instagram: URL de Instagram');
  if (!contacto.linkedin) pendientes.push('contacto.linkedin: URL de LinkedIn');
  if (!sitio.url) pendientes.push('sitio.url: dominio canónico (uvablack.com.ar o uvablack.ar)');
  for (const [clave, imagen] of Object.entries(imagenes)) {
    if (!imagen.src) pendientes.push(`imagenes.${clave}: fotografía real`);
  }
  if (nosotros.equipo.length === 0) pendientes.push('nosotros.equipo: integrantes reales');
  return pendientes;
}
