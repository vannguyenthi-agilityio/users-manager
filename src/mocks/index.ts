export const initMocks = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
    console.log('----- Initialize api server -----');
  } else {
    const { worker } = await import('./browser');
    worker.start({
      serviceWorker: {
        /**
         * Use a custom Service Worker script URL to resolve
         * the mock worker served by Codesandbox.
         * @note You DO NOT need this in your application.
         * @see https://mswjs.io/docs/api/setup-worker/start#serviceworker
         */
        url: '/mockServiceWorker.js'
      }
    });
    console.log('----- Initialize api client -----');
  }
};

export default {};
