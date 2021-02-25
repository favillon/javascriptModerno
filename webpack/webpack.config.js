const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    mode: 'development',
    module :{
        rules : [
            {
                test : /\.html$/i,
                loader : 'html-loader',
                options : {
                    //minimize : true, // Minificar el codigo html
                    sources  : false
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : './index.html',
            inject   :  'body', //true || 'head' || 'body' || false
            // minify   : true // Minificar el codigo html
        })
    ]

}