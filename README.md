# Uva Black · Web

Landing de una sola página para **Uva Black**, consultora de Recursos Humanos de Mendoza, Argentina.

React 18 + Vite + MUI 5, en JavaScript. Sin backend: el formulario abre el cliente de correo (mailto) y los botones de WhatsApp usan enlaces `wa.me`.

## Ramas y flujo de trabajo

- `v1`: diseño original, con título y composición de marca en dos columnas.
- `v2`: propuesta con título de gran escala, isotipo interactivo y cierre “Conversemos”.
- `development`: integración y pruebas de la propuesta elegida. Parte de V2.
- `main`: versión estable aprobada. Solo recibe cambios probados desde `development`.

Flujo: **rama de propuesta → `development` → pruebas y aprobación → `main`**. Un merge integra código entre ramas; un push sube una rama a GitHub. Subir `development` no modifica `main`.

Para integrar cambios de una propuesta y probarlos:

```bash
git switch development
git pull --ff-only origin development
git merge --no-ff v2
npm run build
docker compose up -d --build
git push origin development
```

Revisá la web en `http://localhost:8080`, en móvil y escritorio, antes de aprobarla. Una vez aprobada:

```bash
git switch main
git pull --ff-only origin main
git merge --ff-only development
git push origin main
git switch development
```

Si `main` avanzó por otro lado y el merge con `--ff-only` falla, integrá primero `main` en `development`, resolvé los conflictos y repetí las pruebas antes de promoverla. No fuerces el push. Este flujo es una convención del proyecto; no configura protecciones automáticas en GitHub.

Antes de cambiar de versión, guardá los cambios pendientes en un commit de su rama. Desde la carpeta del proyecto:

```bash
git switch v1
docker compose up -d --build
```

Para volver a la rama de pruebas:

```bash
git switch development
docker compose up -d --build
```

Las versiones se prueban en `http://localhost:8080`, una por vez. Cambiar de rama no actualiza un contenedor ya construido: hace falta ejecutar la reconstrucción indicada. GitHub guarda las ramas publicadas mediante push; el despliegue del sitio es una operación aparte.

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

## HTML estático y prerender

`npm run build` compila el JavaScript con Vite y después renderiza la aplicación con React en Node durante el build. `scripts/prerender.mjs` incorpora el contenido en `dist/index.html` y extrae el CSS crítico al `<head>` con `@emotion/server` (dependencia de desarrollo). Cliente y servidor usan `createEmotionCache` con la misma clave `uva`; el servidor crea una cache nueva por render. El navegador usa `hydrateRoot` para activar la misma aplicación. No se agrega un servidor Node en producción.

La única ruta pública actual es `/`, también declarada en `public/sitemap.xml`. `#servicios`, `#nosotros`, `#contacto` y el resto de las anclas pertenecen a ese documento. El prerender conserva todos los metadatos originales de `index.html`, incluidos title, description, canonical y Open Graph. Si se incorporan páginas con rutas propias, habrá que ampliar el prerender y sus metadatos; la verificación del build detecta nuevas rutas en el sitemap.

El HTML inicial contiene las secciones visibles sin JavaScript y el CSS crítico de la paleta clara. Se conserva el manejo anterior del tema con `ThemeProvider`: al hidratar se aplica el modo guardado o la preferencia del sistema. Puede verse brevemente la paleta clara antes de pasar a oscuro; esta versión prioriza mantener simple el manejo del tema.

El menú móvil, el formulario y las animaciones se activan al hidratar; los enlaces nativos a secciones, correo y WhatsApp están presentes en el HTML. Los hooks de tema y revelado mantienen una salida inicial compatible con el render estático. Los textos, estilos y estructura de los componentes visuales se conservan.

### Verificación

```bash
npm run build
npm run test:prerender
npm run preview -- --host 127.0.0.1 --port 5176
```

`scripts/verificar-prerender.mjs` también se ejecuta automáticamente al compilar: comprueba textos reales de las secciones, los servicios y el contacto en el HTML, los destinos de las anclas, la conservación de los metadatos y la extracción del CSS crítico al head. Para probar la lectura sin JavaScript, deshabilitalo en el navegador y recargá `http://localhost:5176`.

### Despliegue

- **Docker:** el Dockerfile ahora copia `scripts/` antes de ejecutar `npm run build`. Desplegá con `docker compose up -d --build` una vez integrada esta rama. Nginx, sus puertos, sus cabeceras y su configuración no necesitan cambios.
- **Hosting estático:** comando de build `npm ci && npm run build`; carpeta publicada `dist/`. No uses `vite build` directamente, porque omite el prerender. Subí el HTML y los assets del mismo build.
- El render temporal se elimina al terminar y no se publica. El contenido del sitio sigue editándose en `src/data/contenido.js` y requiere un nuevo build para actualizar el HTML servido.

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

Copiá la imagen a `public/images/fotos/` (JPG o WebP, ~1600 px del lado mayor, menos de 300 KB) y completá `src`, `alt`, `ancho` y `alto` en `imagenes`. En clima y equipo, mientras `src` esté vacío se muestra una composición con el isotipo. La apertura usa tipografía e isotipo; si se configura `imagenes.hero.src`, la foto aparece debajo en formato panorámico. Las fotos se muestran en blanco y negro; `posicion` ajusta el encuadre (`object-position`).

### Movimiento de marca

`MarcaViva` conserva el isotipo oficial y anima su entrada una vez al aparecer en pantalla. `useMovimientoMarca` agrega una reacción al mouse en la apertura y el cierre, sin interceptar el scroll táctil. Los enlaces de contacto también activan un saludo al recibir foco de teclado. Los efectos respetan `prefers-reduced-motion` y no requieren dependencias adicionales. El cierre grande usa el WhatsApp configurado; sin número, lleva al formulario de contacto. Sus textos están en `footer` dentro de `contenido.js`.

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

- [x] Número de WhatsApp (`contacto.whatsapp`, formato `549261XXXXXXX`).
- [x] Correo destinatario del formulario (`contacto.email`): contacto@uvablack.com.ar.
- [ ] Crear la casilla contacto@uvablack.com.ar (registros MX del dominio).
- [x] Instagram.
- [ ] LinkedIn (si no se carga, no se muestra).
- [x] Dominio canónico: `https://uvablack.com.ar` (canonical y Open Graph en `index.html`).
- [ ] Fotografías reales: hero (reunión de trabajo), clima (taller o equipo) y equipo de Uva Black.
- [ ] Integrantes del equipo, si se quieren mostrar.
- [ ] Revisión final de textos por Uva Black.
- [ ] Configurar HTTPS en el servidor donde se publique (fuera del alcance de este contenedor).
