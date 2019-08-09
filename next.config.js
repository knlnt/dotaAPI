const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function() {
    return {
      '/dotaAPI/out/': { page: '/' }
    };
  },
  assetPrefix: !debug ? 'https://knlnt.github.io/dotaAPI/out/' : '',
};