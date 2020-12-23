module.exports = function (env) {
  console.log(`webpack.config: process.env.NODE_ENV=${process.env.NODE_ENV}`)
  if (typeof env === 'undefined') {
    return require('./config/webpack.dev')();
  } else if (typeof env.devserver !== 'undefined' && env.devserver) {
    return require('./config/webpack.server')();
  } else if (typeof env.release !== 'undefined' && env.release) {
    return require('./config/webpack.release')();
  }
};