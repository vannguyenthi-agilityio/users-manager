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

  const onRegister = () => {
    fetch('/register', {
      method: 'POST',
      body: {
        username: 'admin@mail.com'
      } as any
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
      <button onClick={onRegister}>Submit</button>
      {children}
    </>
  );
};

export default ApiProvider;
