import ConfigHelper from 'src/helpers/config';

const getUsers = () => {
  const api = ConfigHelper.API;
  return fetch(api + ConfigHelper.USERS).then((res) => res.json());
};

export { getUsers };
