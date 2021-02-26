const { merge }                      = require('webpack-merge');
const common                         = require('./webpack.common');
const {CleanWebpackPlugin}           = require('clean-webpack-plugin');
const path                           = require('path');

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
        new CleanWebpackPlugin(),
    ]
})