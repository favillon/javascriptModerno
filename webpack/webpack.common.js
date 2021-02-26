const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const path                 = require('path');

module.exports = {
    module :{
        rules : [
            {
                test : /\.html$/i,
                loader : 'html-loader',
                options : {
                    sources  : false
                }
            },
            {
                test    : /\.css$/,
                exclude : /style\.css$/,
                use     : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /style\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test : /\.(png|jpe?g|gif|svg)$/i,
                loader : 'file-loader',
                options : {
                    outputPath: 'assets/images',
                    name : '[name]-[hash].[ext]',
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
              }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : path.resolve('src', 'index.html'),
            filename : path.resolve('dist', 'index.html'),
            inject   : 'body', //true || 'head' || 'body' || false
            minify   : true // Minificar el codigo html
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css',
            ignoreOrder: false
        }),
        new CopyWebpackPlugin({
            patterns : [
                { from : path.resolve('src', 'assets'), to : path.resolve('dist', 'assetsCopy') }
            ]
        })
    ]

}