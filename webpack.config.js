const path = require('path');
const webpack = require('webpack');

module.exports = {
   entry: { toolbox: './src/index.js' },
   output: {
      library: 'toolbox',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
   },
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
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin(),
   ],
};
