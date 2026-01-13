import fastify from 'fastify';

export function createServer() {
  const server = fastify();

  server.get('/feature/:code', async (request, reply) => {
    const { code } = request.params;
    return { code, enabled: true };
  });

  return server;
}
