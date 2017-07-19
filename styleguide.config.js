// eslint-disable-next-line import/no-extraneous-dependencies
const loaders = require('loaders');

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  highlightTheme: 'duotone-light',
  theme: {
    color: {
      link: '#0071CE',
      linkHover: '#0071CE',
    },
  },
  webpackConfig: {
    module: {
      loaders: loaders.all,
    },
  },
};
