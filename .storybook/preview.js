import {globalCss} from 'stitches.config';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const globalStyle = globalCss({
  body: {
    backgroundColor: '#E5E5E5',
  },
});

export const decorators = [
  (renderStory) => (
    <MemoryRouterProvider>
    {globalStyle()}
    {renderStory()}
    </MemoryRouterProvider>
  )
]