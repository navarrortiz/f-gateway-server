
module.exports  = {
  port: 8080,
  routes: [{
    prefix: '/ms-auth/*',
    target: 'http://localhost:8085/ms-auth/*',
  }, {
    prefix: '/ms-project/*',
    target: 'http://localhost:8086/ms-project/*',
  }],
}
