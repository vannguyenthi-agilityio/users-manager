const PHONE_PATTERN = /^(\d{3})(\d{3})(\d{4})$/;

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

/**
 * Santizer phone number: 8019010123 to send to api
 * @param value: (801)-901-0123
 * @returns
 */
export const santizerPhone = (value = '') => `${value.replace(/\D+/g, '')}`;

/**
 * Validate phone whether is correct for not
 * @param value: validation message
 * @returns
 */
export const validatePhone = (value = ''): string => {
  if (!value) {
    return 'Phone number is required';
  }
  const formattedValue = value.replace(/\D+/g, '');
  if (!(formattedValue.length === 10 && formattedValue.match(PHONE_PATTERN))) {
    return 'Phone number is invalid';
  }
  return '';
};

// Slice Array
export const sliceArr = (arr, n) => {
  const array = arr.slice();
  const chunks = [];
  while (array.length) chunks.push(array.splice(0, n));
  return chunks;
};
