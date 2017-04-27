module.exports = (__path) => {
    return {
        module: {
            loaders: [
                {
                    test: /\.js$|jsx$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true
            })
        ],
        devtool: 'source-cheap-map'
    }
};