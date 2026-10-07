# Uva Black · Web

Landing de una sola página para **Uva Black**, consultora de Recursos Humanos de Mendoza, Argentina.

React 18 + Vite + MUI 5, en JavaScript. Sin backend: el formulario abre el cliente de correo (mailto) y los botones de WhatsApp usan enlaces `wa.me`.

## Requisitos

- Node.js 20.11 o superior (probado con 20.11) y npm 10.
- Docker Desktop (o Docker Engine + Compose v2) para la modalidad en contenedor.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

En desarrollo, la consola del navegador lista los datos pendientes de completar antes de publicar.

## Docker (producción)

```bash
docker compose up --build -d   # http://localhost:8080
docker compose down
```

El `Dockerfile` tiene dos etapas: Node compila con `npm ci` y `npm run build`, y Nginx sirve solo `dist/`. La imagen final no incluye `node_modules` ni el código fuente. La configuración de Nginx está en `nginx/default.conf`:

- `/assets/` (archivos con hash): caché de un año, inmutable.
- `index.html`: `no-cache`, para no servir versiones viejas después de un despliegue.
- `/images/`: caché de 7 días. Si reemplazás una foto manteniendo el nombre, cambiale el nombre o esperá la expiración.

**Cualquier cambio de contenido requiere reconstruir**: `docker compose up --build -d`.

## Dónde se edita cada cosa

| Qué | Dónde |
| --- | --- |
| Textos, servicios, etapas, principios | `src/data/contenido.js` |
| WhatsApp, correo, Instagram, LinkedIn | `contacto` en `src/data/contenido.js` |
| Mensajes predefinidos de WhatsApp | `mensajesWhatsapp` en `src/data/contenido.js` |
| Fotografías | `public/images/fotos/` + `imagenes` en `src/data/contenido.js` |
| Integrantes del equipo | `nosotros.equipo` en `src/data/contenido.js` |
| Colores, tipografía, componentes MUI | `src/theme.js` |
| Envío del formulario | `src/services/contacto.js` (`enviarConsulta`) |
| Título, descripción, Open Graph | `index.html` |
| Isotipo y favicons | `public/images/marca/` |

### Fotografías

Copiá la imagen a `public/images/fotos/` (JPG o WebP, ~1600 px del lado mayor, menos de 300 KB) y completá `src`, `alt`, `ancho` y `alto` en `imagenes`. Mientras `src` esté vacío se muestra una composición con el isotipo. Las fotos se muestran en blanco y negro; `posicion` ajusta el encuadre (`object-position`).

### Formulario

El botón "Abrir mi correo" solo se habilita si `contacto.email` tiene un correo válido. Para pasar más adelante a un envío real (POST a una API), alcanza con reemplazar el cuerpo de `enviarConsulta(datos)` en `src/services/contacto.js`: los campos y la validación no cambian.

### Variables de entorno

Esta versión no usa variables `VITE_*`: la configuración vive en `contenido.js`. Si en el futuro se usan, tené en cuenta que son **públicas** y se incorporan en el build. No sirven para secretos, y definirlas en el contenedor de Nginx no cambia el sitio: hay que pasarlas en la etapa de compilación.

## Marca

- El isotipo oficial original está en `docs/brief/02_MARCA/ICONO_OFICIAL_UVA_BLACK.png`. `public/images/marca/isotipo.png` es el mismo dibujo con fondo transparente, sin redibujar. Se aplica como máscara CSS para tomar el color del tema en modo claro y oscuro.
- Tipografía: Montserrat (Google Fonts).
- Paleta: blanco cálido `#F5F5F2`, negro `#141414`, gris `#686868`, líneas `#DADAD5`.
- El brief completo está en `docs/brief/`.

## Pendientes antes de publicar

- [ ] Número de WhatsApp (`contacto.whatsapp`, formato `549261XXXXXXX`).
- [ ] Correo destinatario del formulario (`contacto.email`).
- [ ] URLs de Instagram y LinkedIn (si no se cargan, no se muestran).
- [ ] Dominio canónico: `uvablack.com.ar` o `uvablack.ar`. Completar `sitio.url` y, en `index.html`, agregar `<link rel="canonical">` y pasar `og:image` a URL absoluta.
- [ ] Fotografías reales: hero (reunión de trabajo), clima (taller o equipo) y equipo de Uva Black.
- [ ] Integrantes del equipo, si se quieren mostrar.
- [ ] Revisión final de textos por Uva Black.
- [ ] Configurar HTTPS en el servidor donde se publique (fuera del alcance de este contenedor).
