var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootDir = __dirname;
var srcDir = './src';
var distDir = './build';

module.exports = {
    context: rootDir, // a base directory to resolve the “entry”
    entry: {
        app: [srcDir + '/index.js'],
        menu: [srcDir + '/menu.js']
    },
    output: {
        path: distDir,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: '/index.html', // relative path from "output" directory
            template: srcDir + '/index.html', // source file
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            title: 'Menu',
            filename: '/menu.html', // relative path from "output" directory
            template: srcDir + '/menu.html', // source file
            chunks: ['menu']
        }),
        new HtmlWebpackPlugin({
            title: 'Layout',
            filename: '/layout.html', // relative path from "output" directory
            template: srcDir + '/layout/index.html', // source file
            chunks: []
        })],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
