const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js', //ponto de entrada onde é informado o arquivo que vai ser executado seu app
    output: { //onde é gerada a saida
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}