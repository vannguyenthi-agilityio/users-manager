import { Selector } from 'src/libs/SharedContext';
import { createMachine, interpret, assign } from 'xstate';

import {
  register as signUpApi,
  getUserInfo as getUserInfoApi,
  login as loginApi
} from 'src/apis';
import { getStorage, setStorage, clearStorage } from 'src/utils/storages';
import { API_ERROR } from 'src/constants/errors';
import { LOCAL_STORAGE_KEYS } from 'src/constants/common';

type Context = typeof context;
interface User {
  id: string;
  referralCode: string;
  otp: string;
  account: string;
  password: string;
}

const context = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  type: ''
};

type InitializeAction = {
  type: 'INITIALIZE';
  payload: {
    isAuthenticated: boolean;
    user: User;
  };
};

type LogoutAction = {
  type: 'LOGOUT';
};

type LoginAction = {
  type: 'LOGIN';
  payload: {
    isAuthenticated: boolean;
    user: User;
  };
};

type SignUpAction = {
  type: 'SIGNUP';
  payload: {
    isAuthenticated: boolean;
    user: User;
  };
};

type GetUserInfoAction = {
  type: 'GET_USER_INFO';
  payload: {
    user: User;
  };
};

type Events =
  | LoginAction
  | SignUpAction
  | GetUserInfoAction
  | LogoutAction
  | InitializeAction;

const machine = createMachine<Context, Events>({
  context,
  on: {
    LOGOUT: {
      // TODO: Later
      actions: assign({
        user: null
      })
    },
    LOGIN: {
      actions: assign({
        isAuthenticated: (_, event) => event.payload.isAuthenticated,
        user: (_, event) => event.payload.user
      })
    },
    SIGNUP: {
      actions: assign({
        isAuthenticated: (_, event) => event.payload.isAuthenticated,
        user: (_, event) => event.payload.user
      })
    },
    GET_USER_INFO: {
      // TODO: Later
      actions: assign({
        user: (_, event) => event.payload.user
      })
    },
    INITIALIZE: {
      actions: assign({
        isAuthenticated: (_, event) => event.payload.isAuthenticated,
        user: (_, event) => event.payload.user,
        isInitialized: true
      })
    }
  }
});

const service = interpret(machine).start();

export namespace User {
  export const user = Selector(service, 'user');
  export const isAuthenticated = Selector(service, 'isAuthenticated');
  export const isInitialized = Selector(service, 'isInitialized');
  export function logOut() {
    service.send('LOGOUT');
  }
  export async function logIn(
    data: { username: string; otp: string },
    onError?: (error: string) => void,
    onSuccess?: () => void
  ) {
    try {
      const res = await loginApi(data);
      const responseData = res.json();
      setStorage(LOCAL_STORAGE_KEYS.USER_INFO, responseData);

      service.send({
        type: 'LOGIN',
        payload: {
          user: responseData as any,
          isAuthenticated: true
        }
      });

      onSuccess();
    } catch (error) {
      const errorMessage =
        error.message.indexOf(403) > -1
          ? API_ERROR.USER_NOT_FOUND
          : API_ERROR.DEFAULT_ERROR_APIS;

      onError(errorMessage);
    }
  }
  export function signUp(
    data: { username: string },
    onError?: (error: string) => void,
    onSuccess?: () => void
  ) {
    try {
      signUpApi(data.username).then(function (res) {
        const response = res.json();
        response.then((r) => {
          if (Object.keys(r).indexOf('errorMessage') > -1) {
            onError(r.errorMessage);
            setStorage(LOCAL_STORAGE_KEYS.USER_INFO, JSON.stringify({}));
            return;
          }

          setStorage(LOCAL_STORAGE_KEYS.USER_INFO, JSON.stringify(r));
          service.send({
            type: 'SIGNUP',
            payload: {
              user: r as any,
              isAuthenticated: true
            }
          });

          onSuccess();
        });
      });
    } catch (error) {
      const errorMessage =
        error.message.indexOf(403) > -1
          ? API_ERROR.USER_ALREADY_ENROLLED
          : API_ERROR.DEFAULT_ERROR_APIS;

      onError(errorMessage);
    }
  }
  export function getUserInfo() {
    service.send('GET_USER_INFO');
  }
  export function initialize() {
    try {
      const user = getStorage(LOCAL_STORAGE_KEYS.USER_INFO);
      service.send({
        type: 'INITIALIZE',
        payload: {
          user,
          isAuthenticated: !!user
        }
      });
    } catch (error) {
      service.send({
        type: 'INITIALIZE',
        payload: {
          user: null,
          isAuthenticated: false
        }
      });
    }
  }
}
