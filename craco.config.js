const {CracoRemoteComponentsPlugin} = require("@kne/modules-dev");
const {getLoader} = require("@craco/craco");
const aliasConfig = require("./webstorm.webpack.config");

process.env.CI = false;

module.exports = {
    webpack: {
        alias: aliasConfig.resolve.alias, configure: (webpackConfig) => {
            const definePlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === "DefinePlugin");
            Object.assign(definePlugin.definitions["process.env"], {
                DEFAULT_VERSION: `"${process.env.npm_package_version}"`
            });

            webpackConfig.module.rules.push({
                test: /example\.md$/, loader: require.resolve('raw-loader')
            });

            (() => {
                const {isFound, match} = getLoader(webpackConfig, (loader) => {
                    return loader.type === 'asset/resource';
                });

                if (!isFound) {
                    return;
                }

                if (!match.loader.exclude) {
                    match.loader.exclude = [];
                }

                match.loader.exclude.push(/example\.md$/);
            })();

            return webpackConfig;
        }
    }, plugins: [{
        plugin: CracoRemoteComponentsPlugin
    }]
};
