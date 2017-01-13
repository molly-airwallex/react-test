var path = require('path');

const externalAPI = 'http://10.0.1.28:10080/';
const extInternalAPI = 'http://10.0.1.28:10180/';
const internalAPI = 'http://10.0.1.28:9000/';
const moneyFlowAPI = 'http://10.0.1.28:9200/';
const notificationsAPI = 'http://10.0.1.28:10081/';

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.css', '.scss', '.html', '.svg'],
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    stats: 'normal', // none (or false), errors-only, minimal, normal (or true) and verbose
    proxy: {
      '/notif': {
        target: notificationsAPI,
        pathRewrite: {'^/notif': ''},
        secure: false
      },
      '/service/*': {
        target: internalAPI,
        secure: false
      },
      '/api/v1/users/*': {
        target: externalAPI,
        secure: false
      },
      '/internal/banktransfer/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/contract/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/attachments/*': {
        target: extInternalAPI,
        secure: false
      },
      '/internal/account/*': {
        target: extInternalAPI,
        secure: false
      },
      '/api/v1/transactions/*': {
        target: externalAPI,
        secure: false
      },
      '/api/v1/invoices/search/*': {
        target: internalAPI,
        secure: false
      },
      '/api/v1/invoices/*': {
        target: externalAPI,
        secure: false
      },
      '/api/v1/automation/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/ccnotification/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/collection/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/contract/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/order/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/moneyhouse/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/application': {
        target: moneyFlowAPI,
        secure: false
      },
      '/api/v1/simulation/*': {
        target: moneyFlowAPI,
        secure: false
      },
      '/exServices/*': {
        target: internalAPI,
        secure: false
      },
      '/internal/*': {
        target: extInternalAPI,
        secure: false
      }
    }
  }
};
module.exports = config;

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
