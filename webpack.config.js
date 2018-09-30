const path = require('path');

module.exports = {
   entry: { toolbox: './src/index.js' },
   output: {
      library: 'toolbox',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
      ],
   },
   externals: {
      react: {
         root: 'React',
         commonjs2: 'react',
         commonjs: 'react',
         amd: 'react',
      },
      'react-dom': {
         root: 'ReactDOM',
         commonjs2: 'react-dom',
         commonjs: 'react-dom',
         amd: 'react-dom',
      },
      'styled-components': {
         root: 'styled-components',
         commonjs2: 'styled-components',
         commonjs: 'styled-components',
         amd: 'styled-components',
      },
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
};
