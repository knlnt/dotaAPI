const debug = process.env.NODE_ENV !== "production";
const assetPrefix =!debug ? 'https://knlnt.github.io/dotaAPI/out/' : '';
const webpack = require('webpack');

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )

    return config
  }
};