import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { hero, servicios, contacto, contactoSeccion, problemas, clima, proceso, nosotros } from '../src/data/contenido.js';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const original = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const rutas = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => new URL(url).pathname);
assert.deepEqual(rutas, ['/'], 'Hay nuevas rutas públicas: incorporarlas al prerender y verificar sus metadatos propios.');

const cuerpo = html.split('<body>')[1]?.split('</body>')[0] ?? '';
const texto = cuerpo.replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');
const esperados = [
  ...hero.titulo, hero.subtitulo,
  problemas.titulo, servicios.titulo, clima.titulo, proceso.titulo, nosotros.titulo,
  ...Object.values(servicios.tarjetas).flatMap(({ titulo, resuelve }) => [titulo, resuelve]),
  ...proceso.etapas.map(({ titulo }) => titulo),
  contactoSeccion.titulo, contacto.email, contacto.ubicacion,
];
for (const esperado of esperados) assert.ok(texto.includes(esperado), `Falta contenido en el HTML: ${esperado}`);
assert.equal((cuerpo.match(/<h1\b/g) ?? []).length, 1, 'Debe existir un único H1.');
assert.ok(!html.includes('Activá JavaScript'), 'El contenido debe estar disponible sin JavaScript.');
const head = html.split('<head>')[1].split('</head>')[0];
assert.match(head, /<style data-emotion="uva(?:-global)? /, 'Falta el CSS crítico en el head.');
assert.ok(!cuerpo.includes('data-emotion='), 'El CSS crítico debe estar extraído del cuerpo.');
assert.match(cuerpo, /href="mailto:contacto@uvablack\.com\.ar"/);
assert.ok(cuerpo.includes(`https://wa.me/${contacto.whatsapp}`));

const ids = new Set([...cuerpo.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
for (const [, id] of cuerpo.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(id), `Ancla sin destino: #${id}`);

const metadatos = (documento) => {
  const head = documento.split('<head>')[1].split('</head>')[0];
  return [...head.matchAll(/<title>[^<]*<\/title>|<meta\b[^>]*>|<link\b[^>]*rel="canonical"[^>]*>/g)]
    .map(([etiqueta]) => etiqueta.replace(/\s+/g, ' ').trim());
};
assert.deepEqual(metadatos(html), metadatos(original), 'Cambió un metadato del documento original.');
console.log(`HTML estático verificado: ${rutas.join(', ')}; ${esperados.length} textos, anclas y metadatos originales.`);
console.log(`Ejemplos: ${hero.titulo.join(' ')} | ${servicios.tarjetas.busqueda.titulo} | ${contacto.email}`);
