/// <reference types="astro/client" />
// https://docs.astro.build/en/guides/environment-variables/
interface ImportMetaEnv {
  readonly PUBLIC_BASE_ENDPOINTS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
