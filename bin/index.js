try {
  const config = require('../f-gateway.conf')

  const gateway = require('fast-gateway')

  const port = config.port;

  const routes = config.routes;

  const server = gateway({
    middlewares: [
      require('cors')(),
      require('helmet')()
    ],
    routes,
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

