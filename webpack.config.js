const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

var conf = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './js/index.js',
            './scss/style-detail.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '../'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css')
    ]
};

module.exports = conf;