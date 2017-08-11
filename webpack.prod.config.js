const merge = require('webpack-merge');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    plugins: [
        new uglifyJsPlugin({
            sourceMap: false,
            compress: true
        })
    ]
});