export const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || '';
};

export const clearStorage = (key?: string) => {
  if (key) {
    localStorage.removeItem(key);
  } else {
    localStorage.clear();
  }
};
