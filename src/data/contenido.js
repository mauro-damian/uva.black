// Todo el contenido editable del sitio. Los cambios requieren reconstruir (npm run build o docker compose up --build).

export const contacto = {
  // Número en formato internacional, solo dígitos, sin "+" ni espacios. Ej.: 5492611234567
  whatsapp: '',
  email: '',
  instagram: '',
  linkedin: '',
  ubicacion: 'Mendoza, Argentina',
};

export const sitio = {
  nombre: 'Uva Black',
  // Dominio canónico pendiente de confirmar: https://uvablack.com.ar o https://uvablack.ar
  url: '',
};

export const mensajesWhatsapp = {
  general: 'Hola, Uva Black. Quisiera hacer una consulta sobre mi empresa.',
  seleccion: 'Hola, Uva Black. Quisiera consultar por una búsqueda de personal.',
  consultoria: 'Hola, Uva Black. Quisiera consultar por un acompañamiento para mi equipo.',
  clima: 'Hola, Uva Black. Quisiera conversar sobre el clima de mi equipo.',
};

// Texto inicial del formulario según el botón desde el que se llega a Contacto.
export const motivosConsulta = {
  general: '',
  seleccion: 'Quisiera consultar por una búsqueda de personal.',
  consultoria: 'Quisiera consultar por un acompañamiento para mi equipo.',
  clima: 'Quisiera conversar sobre el clima de mi equipo.',
};

// src vacío muestra una composición de marca hasta tener la fotografía real.
// Las fotos van en public/images/fotos/ y se referencian como '/images/fotos/archivo.jpg'.
export const imagenes = {
  hero: {
    src: '',
    alt: 'Reunión de trabajo del equipo de Uva Black con una empresa en Mendoza',
    ancho: 1200,
    alto: 1500,
    posicion: 'center',
  },
  clima: {
    src: '',
    alt: 'Taller de trabajo con un equipo',
    ancho: 1200,
    alto: 900,
    posicion: 'center',
  },
  equipo: {
    src: '',
    alt: 'Equipo de Uva Black',
    ancho: 1600,
    alto: 1000,
    posicion: 'center 30%',
  },
};

export const navegacion = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'como-trabajamos', label: 'Cómo trabajamos' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
];

export const header = {
  cta: 'Conversemos',
};

export const hero = {
  etiqueta: 'Uva Black · Consultoría en Recursos Humanos',
  titulo: ['Personas', 'que impulsan', 'empresas.'],
  subtitulo:
    'Acompañamos a tu empresa a incorporar talento, fortalecer equipos y ordenar sus procesos de recursos humanos.',
  ctaPrincipal: 'Conversemos sobre tu empresa',
  ctaSecundario: 'Conocé nuestros servicios',
  accesos: [
    { id: 'talento', numero: '01', linea: 'Talento y selección', texto: 'Necesito incorporar talento' },
    { id: 'consultoria', numero: '02', linea: 'Consultoría organizacional', texto: 'Quiero mejorar mi equipo' },
  ],
};

export const problemas = {
  etiqueta: 'Lo que ayudamos a resolver',
  titulo: 'Cuando tu empresa crece, el equipo también necesita acompañamiento.',
  items: [
    { texto: 'Cuesta encontrar a la persona adecuada.', servicio: 'busqueda' },
    { texto: 'Los roles y responsabilidades se superponen.', servicio: 'organizacion' },
    { texto: 'La comunicación entre áreas genera dificultades.', servicio: 'clima' },
    { texto: 'Los líderes pasan el día resolviendo urgencias.', servicio: 'liderazgo' },
    { texto: 'Falta conocer cómo está viviendo el equipo su trabajo.', servicio: 'clima' },
    { texto: 'Los procesos dependen demasiado de unas pocas personas.', servicio: 'organizacion' },
  ],
};

export const servicios = {
  etiqueta: 'Servicios',
  titulo: 'Dos líneas de trabajo con la misma importancia.',
  lineas: [
    {
      id: 'talento',
      numero: '01',
      nombre: 'Talento y selección',
      titulo: 'Encontrar a la persona adecuada empieza por entender tu empresa.',
      texto:
        'Antes de buscar, relevamos el puesto y su contexto para que la incorporación tenga sentido para el equipo y para el negocio.',
      cta: 'Consultar por una búsqueda',
      motivo: 'seleccion',
      tarjetas: ['busqueda'],
    },
    {
      id: 'consultoria',
      numero: '02',
      nombre: 'Consultoría organizacional',
      titulo: 'Equipos más claros en sus roles. Empresas mejor organizadas.',
      texto:
        'Escuchamos primero, diagnosticamos y ordenamos prioridades para implementar acciones concretas junto a tu equipo.',
      cta: 'Consultar por mi equipo',
      motivo: 'consultoria',
      tarjetas: ['clima', 'organizacion', 'liderazgo', 'capacitacion'],
    },
  ],
  tarjetas: {
    busqueda: {
      icono: 'busqueda',
      titulo: 'Búsqueda y selección de talento',
      resuelve: 'Para cuando cuesta encontrar a la persona adecuada o el puesto todavía no está bien definido.',
      incluyeTitulo: 'El proceso incluye',
      incluye: [
        'Relevamiento del puesto y su contexto',
        'Definición del perfil',
        'Búsqueda activa y publicación cuando corresponde',
        'Preselección de candidatos',
        'Entrevistas por competencias',
        'Presentación de finalistas e informe',
        'Coordinación de la entrevista con la empresa',
        'Acompañamiento durante la incorporación',
      ],
    },
    clima: {
      icono: 'clima',
      titulo: 'Clima y comunicación',
      resuelve: 'Para cuando la comunicación entre áreas se traba o no se sabe cómo vive el equipo su trabajo.',
      texto:
        'Escucha del equipo, diagnóstico de clima, identificación de dificultades, comunicación interna y coordinación entre áreas.',
    },
    organizacion: {
      icono: 'organizacion',
      titulo: 'Organización y procesos',
      resuelve: 'Para cuando los roles se superponen y los procesos dependen de pocas personas.',
      texto:
        'Diagnóstico de RR. HH., definición de roles y responsabilidades, documentación de procesos, procedimientos de incorporación y acompañamiento al crecimiento.',
    },
    liderazgo: {
      icono: 'liderazgo',
      titulo: 'Liderazgo y equipos',
      resuelve: 'Para cuando los líderes pasan el día resolviendo urgencias.',
      texto:
        'Acompañamiento a líderes y encargados, con herramientas para organizar equipos y mejorar el trabajo cotidiano.',
    },
    capacitacion: {
      icono: 'capacitacion',
      titulo: 'Capacitación y desarrollo',
      resuelve: 'Para cuando el equipo necesita nuevas herramientas para crecer.',
      texto:
        'Capacitación según las necesidades detectadas, desarrollo del equipo y seguimiento de las acciones de mejora.',
    },
  },
};

export const clima = {
  etiqueta: 'Clima organizacional',
  titulo: '¿Cómo se vive trabajar en tu empresa?',
  texto:
    'Escuchar al equipo ayuda a comprender qué está funcionando, dónde aparecen dificultades y qué cambios conviene priorizar.',
  nota: 'El diagnóstico no es un fin en sí mismo: es la base para construir un plan de mejora posible y acordado.',
  momentos: [
    {
      titulo: 'Escuchar y relevar',
      texto: 'Conversamos con Dirección, líderes y colaboradores antes de sacar conclusiones.',
    },
    {
      titulo: 'Comprender y priorizar',
      texto: 'Separamos hechos de percepciones e identificamos qué conviene abordar primero.',
    },
    {
      titulo: 'Acordar acciones y acompañar',
      texto: 'Definimos acciones concretas con la empresa y acompañamos su puesta en marcha.',
    },
  ],
  cta: 'Hablemos del clima de tu equipo',
  motivo: 'clima',
};

export const proceso = {
  etiqueta: 'Cómo trabajamos',
  titulo: 'Un recorrido claro, adaptado a cada empresa.',
  texto:
    'No aplicamos un proceso idéntico para todos. Estas etapas orientan el trabajo y se ajustan a cada servicio y a cada equipo.',
  etapas: [
    { titulo: 'Escuchamos y relevamos', texto: 'Conocemos el contexto y la necesidad.' },
    { titulo: 'Detectamos prioridades', texto: 'Identificamos qué conviene abordar primero.' },
    { titulo: 'Proponemos un plan', texto: 'Acordamos alcance y acciones.' },
    { titulo: 'Trabajamos con el equipo', texto: 'Acompañamos la implementación.' },
    { titulo: 'Hacemos seguimiento', texto: 'Revisamos avances y ajustes.' },
  ],
};

export const nosotros = {
  etiqueta: 'Nosotros',
  titulo: 'Cerca de las personas. Involucrados con tu empresa.',
  texto:
    'En Uva Black buscamos comprender el contexto de cada organización, trabajar cerca de sus equipos y definir acciones concretas para acompañar sus necesidades.',
  textoSecundario:
    'Buscamos ser un socio externo de recursos humanos: una mirada que cuida a las personas y, al mismo tiempo, acompaña los objetivos del negocio.',
  principiosTitulo: 'Cómo pensamos el trabajo',
  principios: [
    'Escuchar antes de concluir.',
    'Separar hechos de percepciones.',
    'Definir responsabilidades claras.',
    'Documentar lo que se acuerda.',
    'Construir autonomía para sostener los cambios.',
  ],
  // Completar con integrantes reales: { nombre, rol, foto: '/images/fotos/...' }
  equipo: [],
};

export const contactoSeccion = {
  etiqueta: 'Contacto',
  titulo: 'Contanos qué necesita tu empresa.',
  texto: 'Podemos conversar sobre una búsqueda, un desafío de tu equipo o un proceso que querés mejorar.',
  whatsappCta: 'Escribinos por WhatsApp',
  formularioTitulo: 'Dejanos tu consulta',
  campos: {
    nombre: 'Nombre',
    email: 'Correo electrónico',
    mensaje: 'Mensaje',
  },
  errores: {
    nombre: 'Ingresá tu nombre.',
    email: 'Ingresá un correo electrónico válido.',
    mensaje: 'Contanos brevemente tu consulta.',
  },
  boton: 'Abrir mi correo',
  aclaracion: 'Se abrirá tu aplicación de correo para que puedas enviar la consulta.',
  alternativaEmail: 'También podés escribirnos a',
  asunto: 'Consulta desde la web',
};

export const footer = {
  descripcion: 'Consultoría en Recursos Humanos. Talento, organización y equipos.',
  navegacionTitulo: 'Secciones',
  contactoTitulo: 'Contacto',
  derechos: 'Uva Black. Todos los derechos reservados.',
};
