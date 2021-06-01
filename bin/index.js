const gateway = require('fast-gateway')

const port = 8080;

const server = gateway({
  middlewares: [
    require('cors')(),
    require('helmet')()
  ],
  routes: [{
    prefix: '/ms-auth/*',
    target: 'http://localhost:8085/ms-auth/*',
  },{
    prefix: '/ms-project/*',
    target: 'http://localhost:8086/ms-project/*',
  }],
})

server.start(port)
  .then((address) => {
    console.log(`f-gateway-server listening on http://localhost:${port}`);
  })
  .catch(error => console.log(error));
