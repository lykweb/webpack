module.exports = config => {
  console.log('=======================================')
  config.module.rules = config.module.rules
    .concat(
      {
        test: /\.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        use: [{
          loader: 'file-loader'
        }]
      }, {
      test: /\.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[name].[ext]'
        }
      }]
    });
    console.log(JSON.stringify(config.module.rules))
    console.log(JSON.stringify(config.module.rules.filter(rule => rule.loader === 'url-loader')))
  return config;
};