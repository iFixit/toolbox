const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      library: 'Toolbox',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      filename: 'toolbox.js',
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
         {
            test: /\.css$/,
            loader: 'css-loader',
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
   devtool: 'cheap-module-eval-source-map',
};
