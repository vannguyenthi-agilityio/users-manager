export const setStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};
export const getStorage = (key: string) => {
  return localStorage.getItem(key) || '';
};
/**
 *
 * @returns string: 6b9dg81yeaul79ze2yy
 */
export const uuid = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
/**
 *
 * @returns string: 6b9dg81y
 */
export const genReferralCode = (): string => {
  return (
    Date.now().toString(16) + Math.random().toString(16).substring(2)
  ).substring(0, 8);
};
