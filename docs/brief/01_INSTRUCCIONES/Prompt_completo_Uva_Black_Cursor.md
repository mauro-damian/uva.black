# UVA BLACK — PROMPT COMPLETO PARA CURSOR

Diseñá e implementá una landing de una sola página para Uva Black, consultora de recursos humanos de Mendoza, Argentina. Solo frontend, sin backend, preparada para Docker. Este documento reúne y sustituye los prompts anteriores: aplicá estos requisitos de manera conjunta.

Quiero una web formal, contemporánea y disruptiva: comunicación profesional, clara y confiable, con una composición original, tipografía protagonista, fotografías humanas y movimiento discreto. Construí la web completa; no te quedes en una propuesta, wireframe o componentes sueltos.

## 1. Objetivo y público

Nos dirigimos a dueños, gerentes y responsables de empresas que necesitan incorporar talento, conocer y mejorar su clima organizacional, fortalecer líderes, ordenar roles y procesos y acompañar el crecimiento de sus equipos.

Las dos líneas de negocio deben tener la misma importancia: TALENTO Y SELECCIÓN y CONSULTORÍA ORGANIZACIONAL. No debe parecer únicamente una agencia de búsquedas laborales.

La acción comercial principal es consultar por WhatsApp, acompañada por un formulario que abre la aplicación de correo. No inventes datos de contacto. Español de Argentina, con tono formal, cercano, concreto y sin frases vacías ni promesas grandilocuentes.

## 2. Stack obligatorio

- React 18 y React DOM 18 + Vite.
- MUI 5 (@mui/material) y @mui/icons-material 5.
- JavaScript, no TypeScript.
- Una sola página: no agregar React Router.
- Estilos con sx y styled de @mui/material; tema central en src/theme.js.
- Dependencias de Emotion requeridas por MUI. No Tailwind, styled-components ni bibliotecas de UI adicionales.
- Sin backend, base de datos, autenticación ni panel administrativo.
- No incorporar Zustand, Axios, TanStack Query, librerías de formularios o animaciones sin una necesidad real y mi aprobación.
- React, Vite y MUI son las tecnologías que uso en mi sistema Tareas. La web tendrá identidad y proyecto independientes; no copies datos, código privado ni estética de ese sistema.
- Si ya existe un proyecto, inspeccioná sus archivos y dependencias antes de modificarlo. Elegí versiones compatibles de Vite, Node y paquetes respetando React 18 y MUI 5; no actualices esos major por tu cuenta.

## 3. Referencias creativas

Principal: https://www.basicagency.com/
Servicios y presencia de marca: https://wearecollins.com/
Enfoque humano y organizacional: https://www.ideo.com/

Revisalas si tenés acceso. Son inspiración para construir una identidad propia: no copies diseños completos, imágenes, textos ni marcas. Si no podés visualizarlas, explicá esa limitación y seguí este documento; no afirmes haberlas revisado.

## 4. Dirección visual

Concepto: “Personas que impulsan empresas”.

Formalidad: textos precisos, lectura cómoda, composición ordenada y ejecución cuidada.
Disrupción: tipografía de gran escala, asimetría equilibrada, fotografías grandes, cambios de ritmo, espacios amplios y detalles inspirados en el meteorito ascendente.

Paleta monocromática de marca con dos tonos protagonistas y neutros:
- Blanco cálido #F5F5F2.
- Negro profundo #141414.
- Gris secundario #686868.
- Líneas divisorias #DADAD5.

Definí todos los colores y variantes semánticas en src/theme.js. No escribas colores sueltos en los componentes. Ajustá contraste según modo y uso; no agregues acentos fuertes sin consultarme.

Tipografía sans serif con personalidad y licencia adecuada, cargada desde Google Fonts en index.html, con fallbacks y display=swap. Títulos fluidos con clamp o recursos equivalentes de MUI, párrafos breves y ancho de lectura limitado.

Ancho máximo aproximado de contenido: 1280 px. Márgenes adaptables, líneas finas, pocas sombras y esquinas discretas. Alterná secciones claras y oscuras, sin degradados, fondos ornamentales gratuitos ni aspecto de dashboard. Personalizá MUI para que la marca tenga identidad propia.

## 5. Modo claro y oscuro

Implementá ambos mediante ThemeProvider y CssBaseline, con tema generado desde src/theme.js.

- Botón accesible para alternar en el encabezado, con etiqueta que indique la acción.
- Persistencia de la elección en localStorage; si no existe, usar preferencia del sistema.
- Manejar de forma segura la ausencia de acceso a localStorage.
- Verificar contraste, íconos, logo, fotografías, inputs, botones y secciones destacadas en ambos modos.
- Colores de error, foco, disabled y hover también definidos por el tema.

## 6. Logo, meteorito y fotografías

El isotipo es un meteorito ascendente. Usá los archivos reales adjuntos respetando proporciones. Si faltan, usá el nombre Uva Black como marca textual provisional y dejá listo su reemplazo; no inventes un logo definitivo.

Se permite un pequeño recurso gráfico abstracto o trayectoria ascendente inspirado en el isotipo. Debe sentirse como un detalle de marca, sin convertir la web en una temática espacial.

Incorporá pocas fotografías de personas, grandes y bien ubicadas. Idealmente:
1. Una reunión o situación de trabajo para el hero.
2. Una capacitación o interacción de equipo para clima organizacional.
3. Una foto real del equipo para Nosotros.

Priorizá imágenes propias adjuntas y utilizables con permiso. Tratamiento consistente en blanco y negro o saturación suave según el material. Cuidá recortes, rostros y object-position en móvil.

Si faltan fotos, dejá placeholders reemplazables; no presentes personas de stock o generadas como integrantes o clientes reales. No uses fotos genéricas de apretones de manos. No extraigas imágenes de las webs de referencia.

Usá dimensiones definidas, formatos optimizados e imágenes responsive. Carga diferida fuera de la primera pantalla, sin perjudicar la imagen principal.

## 7. Wireframe y contenido, en este orden

### 7.1 Header fijo

Logo a la izquierda. Links: Servicios, Cómo trabajamos, Nosotros y Contacto. Botón “Conversemos” y control de modo claro/oscuro.

Scroll suave a secciones, compensando altura del header. Fondo legible al desplazarse. Menú móvil accesible, con cierre visible, Escape, manejo de foco y devolución de foco al botón cuando corresponda. Respetar movimiento reducido.

### 7.2 Hero

En escritorio: título y texto a la izquierda, foto a la derecha; composición editorial asimétrica. Casi una primera pantalla, con altura flexible. En móvil: mensaje y contacto antes de la fotografía.

Etiqueta: “UVA BLACK · CONSULTORÍA EN RECURSOS HUMANOS”.
H1: “Personas que impulsan empresas.”
Subtítulo: “Acompañamos a tu empresa a incorporar talento, fortalecer equipos y ordenar sus procesos de recursos humanos.”
CTA principal: “Conversemos sobre tu empresa”, que lleva a Contacto.
CTA secundario: “Conocé nuestros servicios”, que lleva a Servicios.

Dos accesos claros a las líneas de trabajo:
- “Necesito incorporar talento”.
- “Quiero mejorar mi equipo”.

Detalle pequeño inspirado en el meteorito; nada debe competir con la lectura.

### 7.3 Problemas que ayudamos a resolver

Título: “Cuando tu empresa crece, el equipo también necesita acompañamiento.”

Filas amplias y numeradas, separadas por líneas finas:
01. Cuesta encontrar a la persona adecuada.
02. Los roles y responsabilidades se superponen.
03. La comunicación entre áreas genera dificultades.
04. Los líderes pasan el día resolviendo urgencias.
05. Falta conocer cómo está viviendo el equipo su trabajo.
06. Los procesos dependen demasiado de unas pocas personas.

Relacionar con servicios, sin carruseles automáticos ni diagnósticos automáticos inventados.

### 7.4 Servicios: dos líneas con igual importancia

Crear dos bloques editoriales claros para Talento y Consultoría. Dentro de ellos, usar cinco tarjetas de servicio, cada una con ícono de @mui/icons-material, texto breve y contenido editable. Esta sección usa tarjetas; el resto de la web debe variar sus composiciones.

Tarjeta 1 — Búsqueda y selección de talento:
“Encontrar a la persona adecuada empieza por entender tu empresa.”
Incluye relevamiento del puesto y contexto, definición del perfil, búsqueda activa y publicación cuando corresponda, preselección, entrevistas por competencias, presentación de finalistas e informe, coordinación de entrevista con la empresa y acompañamiento durante la incorporación.
CTA: “Consultar por una búsqueda”.
No publicar tarifas, cantidad de candidatos ni plazos garantizados sin confirmación.

Tarjeta 2 — Clima y comunicación:
Escucha del equipo, diagnóstico de clima, identificación de dificultades, comunicación interna y coordinación entre áreas.

Tarjeta 3 — Organización y procesos:
Diagnóstico de RR. HH., definición de roles y responsabilidades, documentación y estandarización de procesos, procedimientos de incorporación y acompañamiento a empresas en crecimiento.

Tarjeta 4 — Liderazgo y equipos:
Acompañamiento a líderes y encargados, herramientas para organizar equipos y mejorar el trabajo cotidiano.

Tarjeta 5 — Capacitación y desarrollo:
Capacitación según necesidades detectadas, desarrollo del equipo y seguimiento de las acciones de mejora.

Las tarjetas 2 a 5 se agrupan bajo Consultoría organizacional, con el título “Equipos más claros en sus roles. Empresas mejor organizadas.” y CTA “Consultar por mi equipo”.

Explicar qué problema ayuda a resolver cada servicio. Mantener síntesis y evitar listas técnicas interminables. No inventar certificaciones, evaluaciones clínicas ni metodologías específicas.

### 7.5 Clima organizacional destacado

Sección de alto contraste, negra con texto claro en la dirección base, adaptada de manera consistente a ambos temas. Fotografía real complementaria si existe.

Título: “¿Cómo se vive trabajar en tu empresa?”
Texto: “Escuchar al equipo ayuda a comprender qué está funcionando, dónde aparecen dificultades y qué cambios conviene priorizar.”

Tres momentos:
1. Escuchar y relevar.
2. Comprender y priorizar.
3. Acordar acciones y acompañar.

Explicar que el diagnóstico es la base de un plan de mejora. No prometer resultados ni afirmar que hay encuestas anónimas o herramientas específicas sin definirlas.
CTA: “Hablemos del clima de tu equipo”.

### 7.6 Cómo trabajamos

Recorrido visual de cinco etapas breves; agrupá “escuchar” y “relevar” como una sola etapa:
01. Escuchamos y relevamos: conocemos el contexto y la necesidad.
02. Detectamos prioridades: identificamos qué conviene abordar primero.
03. Proponemos un plan: acordamos alcance y acciones.
04. Trabajamos con el equipo: acompañamos la implementación.
05. Hacemos seguimiento: revisamos avances y ajustes.

Es un enfoque adaptable, no un proceso rígido idéntico para todos los servicios. Composición numerada con líneas y revelado sutil; vertical en móvil. Información legible sin animaciones.

### 7.7 Sobre Uva Black / Nosotros

Título: “Cerca de las personas. Involucrados con tu empresa.”

Texto base: “En Uva Black buscamos comprender el contexto de cada organización, trabajar cerca de sus equipos y definir acciones concretas para acompañar sus necesidades.”

Foto real del equipo, espacio para integrantes y experiencia cuando se proporcionen. Usar voz de consultora, no “Sobre mí”. No inventar nombres, biografías, antigüedad ni credenciales.

### 7.8 Contacto

Título: “Contanos qué necesita tu empresa.”
Texto: “Podemos conversar sobre una búsqueda, un desafío de tu equipo o un proceso que querés mejorar.”

CTA principal de WhatsApp si hay número confirmado y formulario de correo claramente visible. Correo, Instagram y LinkedIn cuando estén disponibles.

### 7.9 Footer

Logo o nombre, navegación, contactos y redes reales, año actual calculado dinámicamente. Mantener legibilidad y buen cierre visual.

## 8. Formulario sin backend

Campos MUI: Nombre, Correo electrónico y Mensaje; todos obligatorios, con etiquetas visibles, autocomplete apropiado y errores comprensibles.

Habilitar el botón solo cuando:
- Nombre y mensaje contengan texto después de trim.
- El correo tenga formato válido, sin exigir una validación excesivamente restrictiva.
- Exista un destinatario real configurado.

Mostrar errores al interactuar con el campo, sin marcar todos los inputs en rojo al cargar. Validar también en submit, aunque el botón estuviera habilitado.

Al enviar, construir un mailto con destinatario, asunto y cuerpo que incluya los datos del formulario. Codificar los parámetros correctamente. El remitente real lo decide el cliente de correo; incluir el mail ingresado en el cuerpo.

Aislar toda la operación en una sola función en src/services/contacto.js que reciba un objeto. Mantener una interfaz que permita reemplazar el mailto por un POST posteriormente sin reescribir los campos y su validación.

Botón: “Abrir mi correo”.
Aclaración: “Se abrirá tu aplicación de correo para que puedas enviar la consulta.”

No mostrar “Mensaje enviado” ni borrar los campos: no podemos confirmar un envío. Dejar el correo visible como alternativa cuando exista. Si falta el destinatario, deshabilitar la acción y registrar el pendiente, sin inventar datos.

## 9. WhatsApp y configuración

Centralizar teléfono, correo, redes, imágenes y textos en src/data/contenido.js. Los dominios mencionados para la marca son uvablack.com.ar y uvablack.ar: confirmar cuál será el canónico antes de publicar; no asumir disponibilidad ni configuración.

Preparar mensajes distintos para consulta general, selección, consultoría y clima. Número en formato internacional adecuado para wa.me y mensajes codificados. No inventar el número.

Los CTA generales del hero llevan a Contacto; las acciones de WhatsApp identificadas como tales abren el enlace configurado. Un contacto flotante es opcional, siempre que no tape contenido ni controles en móvil.

Sin enlaces “#” simulando acciones. Omitir enlaces sociales no configurados. Registrar pendientes de manera centralizada durante desarrollo, sin exponer notas técnicas en una futura versión pública.

## 10. Movimiento y microinteracciones

La web será sobria y profesional; la disrupción se apoya principalmente en la composición.

- Entrada breve del hero por opacidad y desplazamiento de unos 12–20 px.
- Aparición discreta de secciones, una sola vez.
- Hover y focus cuidados en botones y enlaces.
- Pequeño movimiento de flechas interactivas.
- Entrada sutil del detalle del meteorito.
- Transición fluida del menú móvil.

Duraciones orientativas: 150–250 ms para interacción, 400–600 ms para entradas. Implementar con MUI sx/styled y APIs del navegador. Priorizar transform y opacity; si se usa IntersectionObserver, limpiar observadores al desmontar.

Respetar prefers-reduced-motion. No usar scroll secuestrado, cursores personalizados, videos de fondo, precargas decorativas, animaciones continuas distractoras ni librerías extras. Mantener contenido visible si falla la lógica de animación. No depender de hover para mostrar contenido esencial.

## 11. Accesibilidad y rendimiento

- HTML semántico, un único H1 y jerarquía de títulos correcta.
- Navegación por teclado, foco visible y acceso al contenido principal.
- Texto alternativo útil en imágenes; elementos decorativos excluidos de lectura asistida.
- Contraste suficiente en ambos modos, targets táctiles cómodos y labels accesibles.
- Cuidar foco del menú y anuncios de errores del formulario.
- Sin scroll horizontal accidental, texto cortado ni superposiciones.
- No depender de alturas rígidas en hero o tarjetas.
- Optimizar imágenes, fuentes y carga inicial; reservar espacio para imágenes y evitar saltos de layout.
- No cargar recursos innecesarios.
- Revisar 360 px, 390 px, 768 px y 1440 px, además de zoom de texto cuando sea posible.

## 12. SEO y metadatos

Configurar lang="es-AR", título, descripción, viewport, favicon provisional y metadatos Open Graph/sociales editables. Usar los archivos reales de marca cuando estén disponibles.

Definir URL canónica e imagen social absoluta al confirmar el dominio. No inventar reseñas, calificaciones, clientes ni datos estructurados. Documentar lo pendiente para publicación.

Mantener React + Vite. Si se identifica una necesidad concreta de prerenderizado u otra medida para indexación, explicarla y proponerla sin cambiar el stack ni instalar herramientas por cuenta propia.

## 13. Organización del código

Un componente por sección dentro de src/components/. Estructura base:

- index.html
- package.json
- package-lock.json
- vite.config.js
- src/main.jsx
- src/App.jsx
- src/theme.js
- src/data/contenido.js
- src/services/contacto.js
- src/components/Header.jsx
- src/components/Hero.jsx
- src/components/Problemas.jsx
- src/components/Servicios.jsx
- src/components/ClimaOrganizacional.jsx
- src/components/ComoTrabajamos.jsx
- src/components/SobreUvaBlack.jsx
- src/components/Contacto.jsx
- src/components/Footer.jsx
- src/components/ThemeToggle.jsx
- public/images/ para fotografías y marca locales
- Dockerfile
- compose.yaml
- .dockerignore
- nginx/default.conf
- README.md

Podés extraer un componente compartido o hook si evita duplicación real, sin sobreingeniería. Lógica clara, sin ternarios largos/anidados, sin encadenamientos innecesarios si un for es más legible, sin código muerto, comentarios obvios ni console.log. Mantener textos comerciales fuera de los componentes y colores en el tema.

## 14. Docker: obligatorio

Preparar producción mediante Docker sin agregar backend.

Dockerfile multietapa:
1. Etapa Node: instalar con npm ci y ejecutar npm run build.
2. Etapa Nginx: copiar solo dist y la configuración necesaria para servir estáticos.

- Usar versiones explícitas y compatibles de Node/Nginx, sin etiqueta latest.
- Generar y conservar package-lock.json coherente con package.json.
- Copiar manifests antes del código para aprovechar la caché de dependencias.
- El contenedor final no debe incluir node_modules, servidor de desarrollo ni código fuente innecesario.
- No usar vite dev ni vite preview como servidor de producción.
- Configurar Nginx en nginx/default.conf.
- compose.yaml publica la web en http://localhost:8080, mapeando al puerto de Nginx.
- Sin servicios de base de datos ni API.
- .dockerignore excluye node_modules, dist, .git, logs, secretos y archivos locales innecesarios. No excluir package-lock.json ni archivos requeridos para compilar.
- No montar volúmenes de desarrollo sobre los estáticos de producción.
- Si se configura caché, diferenciar assets con hash de index.html para evitar HTML obsoleto.

Comandos esperados:

npm install
npm run dev
npm run build

docker compose up --build -d
docker compose down

Mantener ambas modalidades, local y Docker. Documentar en README requisitos de Node, comandos, puerto, cómo editar contenido y cómo reconstruir.

Documentar que cambios de contenido y variables VITE_* requieren reconstrucción. Las variables VITE_* son públicas y se incorporan en build: no incluir secretos ni suponer que definirlas en runtime de Nginx modifica el frontend. Preferir la configuración en contenido.js para esta versión; si se usan variables de build, documentar su paso explícito a la construcción y agregar un ejemplo sin secretos.

Si Docker está disponible, comprobar construcción y respuesta HTTP en localhost:8080. Si no, declarar esa verificación pendiente. Preparar la ejecución no implica publicar en un servidor externo.

## 15. Alcance, datos reales y pendientes

No inventar integrantes, experiencia, certificados, cifras, clientes, testimonios, resultados, teléfonos, correos o perfiles sociales. Casos de éxito pueden agregarse más adelante con material real y autorización; no crear casos ficticios.

Esta primera entrega no incluye portal de candidatos, carga de CV, blog, panel administrativo, login, API ni integración de envío real. El formulario es mailto. No publicar precios, cantidades de finalistas o garantías sin datos confirmados para la web.

Si falta material, seguir trabajando con placeholders identificados y valores de configuración vacíos. Reunir los pendientes en README para reemplazarlos antes de publicar. No trasladar contenido confidencial de clientes al sitio.

## 16. Secuencia de trabajo y entrega

1. Inspeccioná el proyecto y los archivos adjuntos.
2. Empezá mostrándome la estructura de archivos y el código de src/theme.js ANTES de escribir las secciones.
3. Resumí brevemente el wireframe, la dirección visual y cómo se adaptará a móvil.
4. Continuá implementando la landing completa sin pedir aprobación por decisiones rutinarias. Consultá antes de agregar dependencias fuera del stack o ampliar el alcance.
5. Ejecutá compilación y revisiones disponibles; corregí los errores relevantes.
6. Verificá header, anchors, menú, ambas apariencias, imágenes, accesibilidad básica, validación, mailto y WhatsApp si están configurados.
7. Revisá visualmente escritorio y móvil si tenés navegador. Si no lo tenés, diferenciá lo comprobado por código de lo no verificado visualmente.
8. Verificá Docker si el entorno lo permite.
9. Entregá instrucciones de ejecución, ubicación de textos/fotos/contactos, pendientes de publicación y verificación realizada.

Criterio de aceptación: landing funcional, formal y disruptiva, contenido completo de talento y consultoría con clima organizacional destacado, fotos humanas, tema claro/oscuro, contacto sin backend y Docker preparado. Debe sentirse coherente de principio a fin y ser fácil de mantener para un desarrollador React/MUI. Priorizá composición, tipografía, fotografías y experiencia móvil antes de sumar efectos.
