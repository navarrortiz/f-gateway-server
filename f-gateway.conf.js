module.exports = {
  port: 8082,
  corsOptions: {
    exposedHeaders: ['Authorization', 'hub_url', 'hub_token', 'hub_topics'],
  },
  routes: [
    {
      prefix: '/ms-auth/api/access-request',
      target: 'http://localhost:8083',
    },
    {
      prefix: '/ms-auth',
      target: 'http://localhost:8080',
    }
  ],
}
