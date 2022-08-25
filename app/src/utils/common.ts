export const getBaseUrl = (assetUrl: string) => {
  const domain = import.meta.env.PUBLIC_DOMAIN;
  return assetUrl ? new URL(assetUrl, domain) : domain;
};
