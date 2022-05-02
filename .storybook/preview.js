import {globalCss} from 'stitches.config';

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
    <>
    {globalStyle()}
    {renderStory()}
    </>
  )
]