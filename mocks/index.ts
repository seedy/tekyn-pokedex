const IS_SERVER = typeof window === 'undefined';

export const setupMocks = async () => {
  if (IS_SERVER) {
    const {server} = await import('./server');
    server.listen();
  } else {
    const {worker} = await import('./browser')
    worker.start();
  }
}