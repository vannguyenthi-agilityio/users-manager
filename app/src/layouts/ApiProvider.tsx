import { useEffect } from 'react';
import { initMocks } from 'mocks';

const ApiProvider = ({ children }) => {
  useEffect(() => {
    if (import.meta.env.PUBLIC_API_MOCKING === 'enabled') {
      (async () => {
        await initMocks();
      })();
    }
  }, []);

  /**
   * Sign up new account
   */
  const onRegister = () => {
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
        username: 'admin+1@mail.com'
      })
    })
      .then(function (res) {
        const response = res.json();
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Login with existing account
   */
  const onLogin = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'admin+1@mail.com',
        otp: '123456'
      })
    })
      .then(function (res) {
        const response = res.json();
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Get user information
   */
  const onGetUser = () => {
    fetch('/user/l7e9wmszh5igttu053', {
      method: 'GET'
    })
      .then(function (res) {
        const response = res.json();
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <button onClick={onRegister}>Register</button>
      <button onClick={onLogin}>Login</button>
      <button onClick={onGetUser}>Get User info</button> */}
      {children}
    </>
  );
};

export default ApiProvider;
