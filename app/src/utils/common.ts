export const getBaseUrl = (assetUrl: string) => {
  const domain = import.meta.env.PUBLIC_DOMAIN;
  return assetUrl ? new URL(assetUrl, domain) : domain;
};
export const isBrowser = typeof window !== 'undefined';

/**
 * Formalize phone number: (801)-901-0123
 * @param value: 8019010123
 * @returns
 */
export const formalizePhone = (value) => {
  if (!value) {
    return value;
  }

  const phoneNumberLength = value.length;
  if (phoneNumberLength < 4) {
    return value;
  }

  if (phoneNumberLength >= 4 && phoneNumberLength < 10) {
    const phoneNumber = value.replace(/[^\d]/g, '');
    return phoneNumber.replace(/(\d{3})(\d)/, '($1)-$2');
  }

  const phoneNumber = value.replace(/[^\d]/g, '');
  return phoneNumber.replace(/(\d{3})(\d{3})(\d)/, '($1)-$2-$3');
};
