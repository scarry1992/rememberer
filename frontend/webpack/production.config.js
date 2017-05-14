const webpack = require('webpack');

module.exports = (__path) => {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true
            })
        ],
        devtool: 'source-cheap-map'
    }
};