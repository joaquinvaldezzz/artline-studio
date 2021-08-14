const postcssSorting = require('./util/postcssSorting');

module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'order/order': [...postcssSorting.order],
    'order/properties-order': [...postcssSorting.propertiesOrder],
    'order/properties-alphabetical-order': null,
  },
};
