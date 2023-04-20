try {
  const config = require('../f-gateway.conf')

  const gateway = require('fast-gateway')

  const port = config.port;

  const routes = config.routes.map((route) => ({ prefixRewrite: route.prefix, ...route}));

  const corsOptions = config.corsOptions || {};

  const server = gateway({
    middlewares: [
      require('cors')(corsOptions),
      require('helmet')(),
    /* // log all requests
     (req, res, next) => {
        console.log({res});
        return next();
     },*/
    ],
    routes
  })

  server.start(port)
    .then((address) => {
      console.log(`f-gateway-server listening on http://localhost:${port}`)
      console.log('Gateways:')
      routes.map(route => {
        console.log(`http://localhost:${port}${route.prefix} forwarded to => ${route.target}`)
      });
    })
    .catch(error => console.log(error))
} catch (error) {
  console.log(error)
}

