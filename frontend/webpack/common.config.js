let webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin');

module.exports = (__path) => {
    return {
        context: path.resolve(__path, 'frontend'),
        entry: './app.js',
        output: {
            filename: 'assets/build.js',
            publicPath: '/',
            path: path.resolve(__path, 'public')
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    loader: 'babel-loader',
                    exclude: 'node_modules'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }),
            new HtmlPlugin({
                template: path.resolve(__path, 'frontend', 'index.template.html'),
                inject: 'body',
                title: 'Rememberer'
            })
        ]
    }
};