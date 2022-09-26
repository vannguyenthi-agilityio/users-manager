/// <reference types="astro/client" />
// https://docs.astro.build/en/guides/environment-variables/
interface ImportMetaEnv {
  readonly PUBLIC_DOMAIN: string;
  readonly PUBLIC_API_MOCKING: string;
  readonly PUBLIC_SECURED_PASSWORD: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
