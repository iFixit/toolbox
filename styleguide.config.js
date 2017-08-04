// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
   title: 'Toolbox',
   components: 'src/components/**/*.jsx',
   getComponentPathLine(componentPath) {
      const name = path.basename(componentPath, '.jsx');
      return `import { ${name} } from 'toolbox'`;
   },
   highlightTheme: 'elegant',
   theme: {
      color: {
         link: '#0071CE',
         linkHover: '#0071CE',
      },
   },
   require: [path.join(__dirname, './global.css')],
};
