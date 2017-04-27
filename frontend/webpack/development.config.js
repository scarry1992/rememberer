const webpack = require('webpack');

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
                    test: /\.js$|jsx$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    include: /frontend\/testData/,
                    loader: 'file-loader?name=assets/[name].[ext]'
                }
            ]
        },
        plugins:[
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ],
        devServer: {
            hot: true,
            //contentBase: resolve(__path, 'dist'),
            publicPath: '/'
        },
    }
};