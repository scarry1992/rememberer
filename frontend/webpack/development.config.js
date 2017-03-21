module.exports = (__path) => {
    return {
        devtool: 'eval',
        module:{
            loaders: [
                {
                    test: /\.json$/,
                    include: /frontend\/testData/,
                    loader: 'file-loader?name=assets/[name].[ext]'
                }
            ]
        }
    }
};