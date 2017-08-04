const webpack = require('webpack');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'dist/toolbox.js',
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
      react: 'React',
      'react-dom': 'ReactDOM',
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin(),
   ],
};
