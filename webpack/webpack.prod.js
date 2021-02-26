const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { merge }                      = require('webpack-merge');
const common                         = require('./webpack.common');
const TerserPlugin                   = require("terser-webpack-plugin");

module.exports = merge(common, {
    
    mode: 'production',
    output : {
        filename : 'build.[hash].js'
    },
    optimization : {        
        minimize : true,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    }, 
    plugins:[        
        new MiniCssExtractPlugin({
            filename : '[name]-[contenthash].css',
            ignoreOrder: false
        })       
    ]
})