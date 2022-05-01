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
      roboto: 'Roboto',
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
    space: {
      1: '9px',
      2: '28px',
      3: '34px',
      4: '36px',
      5: '47px',
      6: '50px',
      7: '59px',
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
      9: '208px',
      10: '215px',
      11: '249px',
      12: '265px',
      13: '280px',
      14: '290px',
      15: '344px',
      16: '346px'
    },
    radii: {
      input: '4px',
      card: '20px',
      iconButton: '75px',
      button: '80px',
    }
  }
});