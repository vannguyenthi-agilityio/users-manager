import ConfigHelper from 'src/helpers/config';

const getUsers = () => {
  const api = ConfigHelper.API;
  return fetch(api + ConfigHelper.USERS).then((res) => res.json());
};

const getUser = (id?: number) => {
  const api = ConfigHelper.API + ConfigHelper.USERS + '/' + id;
  return fetch(api).then((res) => res.json());
}

export { getUsers, getUser };
