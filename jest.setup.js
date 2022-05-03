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