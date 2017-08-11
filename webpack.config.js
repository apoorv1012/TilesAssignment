var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/dist'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, '.')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less?$/,
                include: [
                    path.resolve(__dirname, '.')
                ],
                loader: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                enforce: "pre", 
                exclude: ['/node_modules/', 
                    path.resolve(__dirname, './app/api'),
                    path.resolve(__dirname, './app/assets/styles')
                ],
                loader: "eslint-loader",
                options: {
                    outputReport: {
                        filePath: './checkstyle.xml',
                        formatter: require('eslint/lib/formatters/checkstyle')
                    }
                }
            }
        ]
    }
};