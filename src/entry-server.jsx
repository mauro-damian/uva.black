import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from './createEmotionCache';
import App from './App';

export function render() {
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const html = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </StrictMode>,
  );
  const css = constructStyleTagsFromChunks(extractCriticalToChunks(html));
  return { html, css };
}
