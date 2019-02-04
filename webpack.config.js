const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name][hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css')
    ]
};

module.exports = conf;