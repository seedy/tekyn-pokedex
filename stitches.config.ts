import {createStitches} from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      // main
      background: 'linear-gradient(180deg, hsla(27, 87%, 67%, 1) 0%, hsla(224, 37%, 12%, 1) 100%)',
      primary: 'hsla(27, 87%, 67%, 1)',
      hiContrast: 'hsla(0, 0%, 0%, 1)',
      loContrast: 'hsla(197, 37%, 24%, 1)',
      caption: 'hsla(0, 0%, 100%, 1)',
      outline: 'hsla(0,0%, 100%, 0.5)',
      hoverBackdrop: 'hsla(0, 0%, 0%, 0.05)',
      backdrop: 'hsla(0, 0%, 0%, 0.15)',
      card: 'hsla(0, 0%, 100%, 0.8)',
      cardInner: 'hsla(0, 0%, 100%, 1)',
      border: 'hsla(0, 0%, 87%, 1)',
      label: 'hsla(0, 0%, 56%, 0.87)',
      input: 'hsla(0, 0%, 96%, 1)',
      // types
      normal: 'hsla(60, 21%, 57%, 1)',
      fire: 'hsla(23, 84%, 58%, 1)',
      water: 'hsla(222, 78%, 67%, 1)',
      grass: 'hsla(101, 50%, 56%, 1)',
      electrique: 'hsla(47, 92%, 62%, 1)',
      ice: 'hsla(180, 44%, 73%, 1)',
      fight: 'hsla(2, 61%, 46%, 1)',
      poison: 'hsla(301, 35%, 45%, 1)',
      ground: 'hsla(43, 64%, 65%, 1)',
      flight: 'hsla(254, 71%, 75%, 1)',
      psychic: 'hsla(341, 79%, 64%, 1)',
      bug: 'hsla(67, 57%, 46%, 1)',
      rock: 'hsla(47, 48%, 49%, 1)',
      ghost: 'hsla(262, 25%, 47%, 1)',
      dark: 'hsla(23, 21%, 36%, 1)',
      dragon: 'hsla(255, 89%, 61%, 1)',
      steel: 'hsla(237, 19%, 77%, 1)',
      fairy: 'hsla(354, 64%, 83%, 1)',
      // stats
      statActive: 'hsla(197, 65%, 53%, 1)',
      statInactive: 'hsla(0, 0%, 100%, 1)',
      statInnerBorder: 'hsla(0, 0%, 87%, 1)',
      statBackground: 'hsla(0, 0%, 77%, 1)',
      // infos
      info: 'hsla(12, 76%, 61%, 1)',
    },
    fonts: {
      roboto: 'Roboto, -apple-system, system-ui, sans-serif',
      poppins: 'Poppins, -apple-system, system-ui, sans-serif',
    },
    fontSizes: {
      1: '14px',
      2: '16px',
      3: '24px',
      4: '30px',
    },
    fontWeights: {
      bold: 700,
    },
    lineHeights: {
      1: '16px',
      2: '19px',
      3: '28px',
      4: '35px',
    },
    space: {
      1: '6px',
      2: '7px',
      3: '8px',
      4: '9px',
      5: '28px',
      6: '34px',
      7: '36px',
      8: '47px',
      9: '50px',
      10: '59px',
    },
    shadows: {
      1: '0px 2px 4px hsla(0, 0%, 0%, 0.25)',
      2: '0px 4px 4px hsla(0, 0%, 0%, 0.25)',
    },
    sizes: {
      1: '12px',
      2: '56px',
      3: '60px',
      4: '65px',
      5: '80px',
      6: '100px',
      7: '120px',
      8: '150px',
      9: '156px',
      10: '208px',
      11: '215px',
      12: '249px',
      13: '265px',
      14: '280px',
      15: '290px',
      16: '344px',
      17: '346px',
      18: '403px',
      19: '414px',
      20: '800px',
      21: '1168px',
    },
    radii: {
      input: '4px',
      card: '20px',
      iconButton: '75px',
      button: '80px',
    }
  }
});