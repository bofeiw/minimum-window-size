const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/MinimumWindowSize.js',
  output: {
    path: path.resolve('lib'),
    filename: 'MinimumWindowSize.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "./src")
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "./src")
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
