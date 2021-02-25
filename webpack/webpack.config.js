const HtmlWebpackPlugin              = require('html-webpack-plugin');
const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    
    mode: 'development',
    optimization : {
        minimizer : [ new OptimizeCssAssetsWebpackPlugin()]
    },
    module :{
        rules : [
            {
                test : /\.html$/i,
                loader : 'html-loader',
                options : {
                    //minimize : true, // Minificar el codigo html
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
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : './index.html',
            inject   :  'body', //true || 'head' || 'body' || false
            // minify   : true // Minificar el codigo html
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css',
            ignoreOrder: false
        })
    ]

}