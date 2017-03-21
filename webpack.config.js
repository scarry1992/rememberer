let _ = require('lodash'),
    _configs = {
        common: require(__dirname + '/frontend/webpack/common.config'),
        development: require(__dirname + '/frontend/webpack/development.config'),
        production: require(__dirname + '/frontend/webpack/production.config')
    };

const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
    if (_.isObject(objValue)) {
        return _.mergeWith(objValue, srcValue, customizer)
    }
};

module.exports = _.mergeWith(_configs['common'](__dirname), _configs[process.env.NODE_ENV](__dirname), customizer);