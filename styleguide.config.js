// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
   title: 'Toolbox',
   highlightTheme: 'elegant',
   theme: {
      color: {
         link: '#0071CE',
         linkHover: '#0071CE',
      },
   },
   skipComponentsWithoutExample: true,
   require: [path.join(__dirname, './global.css')],
   webpackConfig: {
      module: {
         loaders: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['env', 'react-app'],
                  compact: true,
               },
            },
            {
               test: /\.css$/,
               loader: 'style-loader!css-loader',
            },
         ],
      },
   },
};
