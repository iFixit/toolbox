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
         umd: 'react',
      },
      'react-dom': {
         root: 'ReactDOM',
         commonjs2: 'react-dom',
         commonjs: 'react-dom',
         amd: 'react-dom',
         umd: 'react-dom',
      },
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
};
