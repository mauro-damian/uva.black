import createCache from '@emotion/cache';

export const EMOTION_CACHE_KEY = 'uva';

// Una caché por render de servidor; una por sesión en el navegador.
export default function createEmotionCache() {
  return createCache({ key: EMOTION_CACHE_KEY });
}
