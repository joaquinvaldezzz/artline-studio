const path = require('path');
const fontFamily = require('./util/fontFamily');
const postcssSorting = require('./util/postcssSorting');

module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: [path.join(__dirname, 'index.html')],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || [];
        return broadMatches.concat(innerMatches);
      },
    },
    'postcss-font-family-system-ui': {
      family: [...fontFamily.sans],
      preserve: false,
    },
    'postcss-import': {},
    'postcss-sort-media-queries': {},
    'postcss-sorting': {
      order: [...postcssSorting.order],
      'properties-order': [...postcssSorting.propertiesOrder],
      'unspecified-properties-position': 'bottom',
    },
  },
};
