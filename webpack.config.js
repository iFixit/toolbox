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
            },
         },
      ],
   },
   externals: {
      react: 'react',
      'react-dom': 'react-dom',
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
};
