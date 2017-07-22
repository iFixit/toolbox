// eslint-disable-next-line import/no-extraneous-dependencies
const loaders = require('loaders');
const path = require('path');

module.exports = {
  components: 'src/components/**/*.jsx',
  showCode: true,
  showUsage: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from 'toolbox';`;
  },
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
