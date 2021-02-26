const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { merge }                      = require('webpack-merge');
const common                         = require('./webpack.common');
const TerserPlugin                   = require("terser-webpack-plugin");
const {CleanWebpackPlugin}           = require('clean-webpack-plugin');
const path                           = require('path');
const CopyWebpackPlugin              = require('copy-webpack-plugin');

module.exports = merge(common, {
    
    mode: 'production',
    output : {
        filename : 'build.[hash].js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    optimization : {        
        minimize : true,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    }, 
    plugins:[        
        new MiniCssExtractPlugin({
            filename : '[name]-[contenthash].css',
            ignoreOrder: false
        }),        
        new CopyWebpackPlugin({
            patterns : [
                { from : path.resolve('src', 'assets'), to : path.resolve('dist', 'assetsCopy') },
            ]
        }),
        new CleanWebpackPlugin()
    ]
})