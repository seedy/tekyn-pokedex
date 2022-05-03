// Next allows fetch calls from test environment
require('next');

// Testing library extends jest expect
import '@testing-library/jest-dom/extend-expect'

import {server} from './mocks/server';

// MSW starts mock server
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())
  
  afterAll(() => server.close())
}

// Manually mock next/dynamic as the next.js (7.0.2) babel plugin will compile to Webpack
// lazy imports (require.resolveWeak) who're conflicting with the Node module system.
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'LoadableComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});