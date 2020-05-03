﻿const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: "./Assets/Scripts/index.js",
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/wwwroot/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}