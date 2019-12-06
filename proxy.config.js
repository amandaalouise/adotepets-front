const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8443/api',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;