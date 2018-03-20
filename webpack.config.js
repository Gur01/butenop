'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

module.exports = {
  entry: {
    'index': PATHS.src+'/js/index.js',
    'about': PATHS.src+'/js/about.js',
    'portfolio': PATHS.src+'/js/portfolio.js',
    'artist': PATHS.src+'/js/artist.js',
    'publications': PATHS.src+'/js/publications.js',
    'contacts': PATHS.src+'/js/contacts.js'
  },
  output: {
    path: PATHS.dist,
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
            use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../dist/images',
              publicPath: '../images/'
            }  
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: '../dist/fonts',
          publicPath: '../fonts/'

        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template:  PATHS.src + '/index.pug'
    }),    
    new HtmlWebpackPlugin({
      filename: 'publications.html',
      chunks: ['publications'],
      template:  PATHS.src + '/publications.pug'
    }),    
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      chunks: ['portfolio'],
      template:  PATHS.src + '/portfolio.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'artist.html',
      chunks: ['artist'],
      template:  PATHS.src + '/artist.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about'],
      template:  PATHS.src + '/about.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      chunks: ['contacts'],
      template:  PATHS.src + '/contacts.pug'
    }),
    new ExtractTextPlugin("css/style.css"),
    new WebpackNotifierPlugin({
      title: 'Webpack'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })  
    ],

  devServer: {
    stats: 'errors-only'
  }

}