export const register = (username) => {
  return fetch('/register', {
    method: 'POST',
    body: JSON.stringify({
      username
    })
  });
};
export const getUserInfo = (id) => {
  return fetch(`/user/${id}`, {
    method: 'GET'
  });
};
export const login = ({ username, otp }) => {
  return fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      otp
    })
  });
};
