const webpack = require('webpack'),
    path = require('path');

module.exports = (__path) => {
    return {
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ],
        devtool: 'eval',
        module:{
            loaders: [
                {
                    test: /\.json$/,
                    include: /testData/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'assets/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ],
        devServer: {
            hot: true,
            contentBase: path.resolve(__path, 'public'),
            publicPath: '/'
        },
    }
};