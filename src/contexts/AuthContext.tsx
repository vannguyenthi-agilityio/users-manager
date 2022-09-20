import React, { createContext, useEffect, useReducer } from 'react';

// Constants
import { API_ERROR } from 'src/constants/errors';
import { LOCAL_STORAGE_KEYS } from 'src/constants/common';

// Utils
import {
  register as signUpApi,
  getUserInfo as getUserInfoApi,
  login as loginApi,
} from 'src/apis';
import { getStorage, setStorage, clearStorage } from 'src/utils/storages';

interface User {
  id: string;
  referralCode: string;
  otp: string;
  account: string;
  password: string;
}

interface AuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
  type: string;
}

interface AuthContextValue extends AuthState {
  logOut: (onError?: (value: string) => void, onSuccess?: () => void) => void;
  logIn: (
    data: { username: string; otp?: string },
    onError?: (value: string) => void,
    onSuccess?: () => void,
  ) => void;
  signUp: (
    data: { username: string },
    onError?: (value: string) => void,
    onSuccess?: () => void,
  ) => void;
  getUserInfo: (
    id: string,
    onError?: (value: string) => void,
    onSuccess?: () => void,
  ) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

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

type Action =
  | InitializeAction
  | LogoutAction
  | LoginAction
  | GetUserInfoAction
  | SignUpAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  type: '',
};

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'INITIALIZE': {
      const { isAuthenticated } = action.payload;
      const tmp = { ...state };
      return {
        ...tmp,
        isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
        type: action.type,
      };
    }

    case 'SIGNUP':
    case 'LOGIN': {
      return {
        ...state,
        isInitialized: true,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        type: action.type,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        ...initialAuthState,
        isInitialized: true,
      };
    }

    case 'GET_USER_INFO': {
      return {
        ...state,
        type: action.type,
        user: action.payload.user,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  logOut: () => {},
  logIn: () => {},
  signUp: () => {},
  getUserInfo: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const logOut = async (
    onError?: (error: string) => void,
    onSuccess?: () => void,
  ) => {
    try {
      dispatch({
        type: 'LOGOUT',
      });

      clearStorage();
      onSuccess();
    } catch (error) {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          user: null,
          isAuthenticated: false,
        },
      });

      onError(error);
    }
  };

  const logIn = async (
    data: { username: string; otp: string },
    onError?: (error: string) => void,
    onSuccess?: () => void,
  ) => {
    try {
      const res = await loginApi(data);
      const responseData = res.json();
      setStorage(LOCAL_STORAGE_KEYS.USER_INFO, responseData);

      dispatch({
        type: 'LOGIN',
        payload: {
          user: responseData as any,
          isAuthenticated: true,
        },
      });

      onSuccess();
    } catch (error) {
      const errorMessage =
        error.message.indexOf(403) > -1
          ? API_ERROR.USER_NOT_FOUND
          : API_ERROR.DEFAULT_ERROR_APIS;

      onError(errorMessage);
    }
  };

  const signUp = async (
    data: { username: string },
    onError?: (error: string) => void,
    onSuccess?: () => void,
  ) => {
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
          dispatch({
            type: 'SIGNUP',
            payload: {
              user: r as any,
              isAuthenticated: true,
            },
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
  };

  const getUserInfo = async (
    id: string,
    onError?: (error: string) => void,
    onSuccess?: () => void,
  ) => {
    try {
      const res = await getUserInfoApi(id);

      setStorage(LOCAL_STORAGE_KEYS.USER_INFO, res);

      dispatch({
        type: 'GET_USER_INFO',
        payload: {
          user: res as any,
        },
      });

      onSuccess();
    } catch (error) {
      const errorMessage =
        error.message.indexOf(403) > -1
          ? API_ERROR.USER_NOT_FOUND
          : API_ERROR.DEFAULT_ERROR_APIS;

      onError(errorMessage);
    }
  };

  const initialize = () => {
    try {
      const user = getStorage(LOCAL_STORAGE_KEYS.USER_INFO);
      dispatch({
        type: 'INITIALIZE',
        payload: {
          user,
          isAuthenticated: !!user,
        },
      });
    } catch (error) {
      dispatch({
        type: 'INITIALIZE',
        payload: {
          user: null,
          isAuthenticated: false,
        },
      });
    }
  };

  useEffect(() => {
    if (state && !state.isInitialized) {
      initialize();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logOut,
        logIn,
        signUp,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
