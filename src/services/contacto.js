import { contacto, contactoSeccion, mensajesWhatsapp } from '../data/contenido';

const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function hayDestinatario() {
  return FORMATO_EMAIL.test(contacto.email);
}

export function validarConsulta({ nombre, email, mensaje }) {
  const errores = {};
  if (!nombre.trim()) {
    errores.nombre = contactoSeccion.errores.nombre;
  }
  if (!FORMATO_EMAIL.test(email.trim())) {
    errores.email = contactoSeccion.errores.email;
  }
  if (!mensaje.trim()) {
    errores.mensaje = contactoSeccion.errores.mensaje;
  }
  return errores;
}

// Punto único de envío. Hoy abre el cliente de correo; para pasar a un POST
// alcanza con reemplazar el cuerpo de esta función manteniendo su firma.
export async function enviarConsulta(datos) {
  if (!hayDestinatario()) {
    return { ok: false, motivo: 'sin-destinatario' };
  }

  const nombre = datos.nombre.trim();
  const email = datos.email.trim();
  const cuerpo = [
    `Nombre: ${nombre}`,
    `Correo electrónico: ${email}`,
    '',
    datos.mensaje.trim(),
  ].join('\n');

  const parametros = [
    `subject=${encodeURIComponent(`${contactoSeccion.asunto} · ${nombre}`)}`,
    `body=${encodeURIComponent(cuerpo)}`,
  ].join('&');

  window.location.href = `mailto:${contacto.email}?${parametros}`;
  return { ok: true, metodo: 'mailto' };
}

export function enlaceWhatsapp(motivo = 'general') {
  if (!contacto.whatsapp) {
    return '';
  }
  const texto = mensajesWhatsapp[motivo] ?? mensajesWhatsapp.general;
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`;
}
