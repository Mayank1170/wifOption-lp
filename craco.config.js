const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    webpack: {
        plugins: [
            new NodePolyfillPlugin() // Add the NodePolyfillPlugin to your webpack plugins
        ]
    }
};
