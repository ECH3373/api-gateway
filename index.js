import axios from 'axios';
import { ServiceBroker } from 'moleculer';
import ApiGateway from 'moleculer-web';
import { config } from './config/index.js';

const broker = new ServiceBroker({
  nodeID: 'api-gateway',
  transporter: config.transporter.name,
  requestTimeout: 5 * 1000,
  retries: 1,
  transporterOptions: { url: config.transporter.url },
});

broker.createService(ApiGateway, {
  routes: [
    {
      name: 'api',
      path: '/api',
      aliases: {
        'GET /departments': 'departments.index',
        'GET /departments/:id': 'departments.show',
      },
    },
  ],
});

broker.createService({
  name: 'departments',
  actions: {
    async index() {
      try {
        const response = await axios.get(`${config.apps.departments}/departments`);
        return response.data;
      } catch (error) {
        throw new Error('Error al obtener departments');
      }
    },
    async show(ctx) {
      const { id } = ctx.params;
      try {
        const response = await axios.get(`${config.apps.departments}/departments/${id}`);
        return response.data;
      } catch (error) {
        throw new Error(`Error al obtener la department con ID ${id}`);
      }
    },
  },
});

broker.start().then(() => {
  console.log('Broker started...');
});
