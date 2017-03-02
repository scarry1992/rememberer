let merge = require('lodash/merge'),
    _configs = {
        common: require(__dirname + '/frontend/webpack/common.config'),
        development: require(__dirname + '/frontend/webpack/development.config'),
        production: require(__dirname + '/frontend/webpack/production.config')
    };

module.exports = merge({}, _configs['common'](__dirname), _configs[process.env.NODE_ENV](__dirname));//Object.assign({}, _configs['common'](__dirname), _configs[process.env.NODE_ENV](__dirname));