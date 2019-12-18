import { FastifyAdapter } from '@nestjs/platform-fastify';
import fastify from 'fastify';

const fastifyInstance = fastify();
const adapter = new FastifyAdapter(fastifyInstance);
