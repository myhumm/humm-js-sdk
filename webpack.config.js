var VERSION  = require('./package.json').version,
    IS_NPM   = process.env.IS_NPM,
    path     = IS_NPM ? __dirname : __dirname + '/build/sdk',
    filename = IS_NPM ? 'sdk.js' : 'sdk-' + VERSION + '.js';

module.exports = {
    entry: './index.js',
    output: {
        path: path,
        filename: filename,
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    devServer: {
        contentBase: './examples'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }

};
