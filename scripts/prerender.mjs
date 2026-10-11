import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

// La única ruta pública es /. Los enlaces #servicios, #contacto, etc.
// son secciones del mismo documento, no páginas con metadatos separados.
const temporal = await mkdtemp(resolve('.prerender-'));
try {
  await build({
    ssr: { noExternal: true },
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: temporal,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });
  const { render } = await import(pathToFileURL(join(temporal, 'entry-server.mjs')));
  const archivo = resolve('dist/index.html');
  const plantilla = await readFile(archivo, 'utf8');
  const marcador = '<div id="root"></div>';
  if (!plantilla.includes(marcador)) throw new Error('No se encontró el contenedor vacío para prerenderizar.');
  const renderizado = render();
  const html = plantilla
    .replace('</head>', () => `${renderizado.css}\n  </head>`)
    .replace(marcador, () => `<div id="root">${renderizado.html}</div>`);
  await writeFile(archivo, html);
  console.log('Prerender: / → dist/index.html (contenido y estilos incluidos).');
} finally {
  await rm(temporal, { recursive: true, force: true });
}
