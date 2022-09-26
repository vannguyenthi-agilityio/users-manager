export const register = (username, code = '') => {
  return fetch('/register', {
    method: 'POST',
    body: JSON.stringify({
      username,
      code,
    }),
  });
};
export const getUserInfo = (id) => {
  return fetch(`/user/${id}`, {
    method: 'GET',
  });
};
export const login = ({ username, otp }) => {
  return fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      otp,
    }),
  });
};
