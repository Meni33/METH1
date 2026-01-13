import fastify from 'fastify';
import { getFeature } from './featureStore.mjs';

export function createServer() {
  const server = fastify();

  server.get('/feature/:code', async (request, reply) => {
    const { code } = request.params;
    return await getFeature(code);
  });

  return server;
}
