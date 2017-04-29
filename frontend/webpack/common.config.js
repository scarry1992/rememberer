let webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (__path, env) => {
    return {
        context: path.resolve(__path, 'frontend'),
        entry: ['./app.js'],
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
                    test: /\.js$|jsx$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.p?css$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: [{
                            loader: 'style-loader',
                        }],
                        use: [{
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: require(__path+'/postcss.config.js')
                                }
                            }
                        ],
                    }),
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: JSON.stringify(env)
            }),
            new HtmlPlugin({
                template: path.resolve(__path, 'frontend', 'index.template.html'),
                inject: 'body',
                title: 'Rememberer'
            }),
            new ExtractTextPlugin('assets/theme.css')
        ]
    }
};