// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// export default {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,
//   entry: [
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'src'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     // Create HTML that includes reference to bundles JS.
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//       inject: true
//     })
//   ],
//   // module: {
//   //   loaders: [
//   //     {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
//   //     {test: /\.css$/, loaders: ['style','css']}
//   //   ]
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   }
// }

// const path = require('path');


// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,
//   entry: [
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: path.resolve(__dirname, 'src'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   plugins: [
//     // Create HTML that includes reference to bundles JS.
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//       inject: true
//     })
//   ],
//   // module: {
//   //   loaders: [
//   //     {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
//   //     {test: /\.css$/, loaders: ['style','css']}
//   //   ]
//   // },
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react'],
//             babelrc: true
//           }
//         }
//       }
//     ]
//   }
// }

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname,'src','index.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname,'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html')
    })
  ]
};