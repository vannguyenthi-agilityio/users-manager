import { useEffect } from 'react';
import { initMocks } from 'mocks';

export default function ApiProvider({ children }) {
  useEffect(() => {
    if (import.meta.env.PUBLIC_API_MOCKING === 'enabled') {
      (async () => {
        await initMocks();
      })();
    }
  }, []);

  return <>{children}</>;
}
