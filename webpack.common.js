/* eslint-disable xss/no-mixed-html */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

dotenv.config();

module.exports = {
   entry: {
      index: path.join(__dirname, 'src', 'index.tsx'),
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'docs'),
   },
   optimization: {
      minimizer: [
         new CssMinimizerPlugin()
      ],
      splitChunks: {
         chunks: "all",
         minSize: 20000,
         minRemainingSize: 0,
         minChunks: 1,
         cacheGroups: {
            defaultVendors: false,
            reactPackage: {
               test: /[\\/]node_modules[\\/](@react.*|react.*)[\\/]/,
               name: 'react',
               chunks: "all",
               priority: 10,
            },
            bootstrapPackage: {
               test: /[\\/]node_modules[\\/](bootstrap)[\\/]/,
               name: 'bootstrap',
               chunks: "all",
               priority: 9,
            },
            vendorsPackage: {
               test: /[\\/]node_modules[\\/]/,
               name: "vendors",
               chunks: "initial",
               priority: 0,
               reuseExistingChunk: true,
            },
            default: {
               name: "[name][ext]",
               minChunks: 2,
               priority: -20,
               reuseExistingChunk: true,
            },
         },
      }
   },
   module: {
      rules: [
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
               filename: '[name][ext]',
            },
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
         },
         {
            test: /\.(s*)css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
         },
         {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
            exclude: [
               /node_modules/,
            ]
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /\.test\.(js|jsx)|node_modules$/,
            use: {
               loader: 'babel-loader',
            }
         },
      ]
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env': JSON.stringify(process.env)
      }),
      new CopyPlugin({
         patterns: [
            {
               context: path.join(__dirname, 'src', 'assets', 'images'),
               from: "**/*",
               to: "assets/images/[path][name][ext]",
            },
         ],
      }),
      new CopyPlugin({
         patterns: [
            {
               context: path.join(__dirname, 'src', 'assets'),
               from: "**/*.pdf",
               to: "assets/[path][name][ext]",
            },
         ],
      }),
      new HtmlWebpackPlugin(
         {
            title: 'personal-website',
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: './src/assets/images/avatar.png',
         },
      ),
      new MiniCssExtractPlugin({ filename: "assets/styles/[name].css" }),
   ],
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
   },
};
