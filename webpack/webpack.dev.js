const { merge }            = require('webpack-merge');
const common               = require('./webpack.common');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'development',
    output : {
        filename : 'build.js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 7777,
        watchContentBase: true,
        open: true
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename : '[name].css',
            ignoreOrder: false
        }),
        new CopyWebpackPlugin({
            patterns : [
                { from : path.resolve('src', 'assets'), to : path.resolve('dist', 'assetsCopy') }
            ]
        }),
        new CleanWebpackPlugin()
    ]
})