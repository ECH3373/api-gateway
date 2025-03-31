import axios from 'axios';
import cors from 'cors';
import express from 'express';
import { config } from '../config/index.js';

export const app = express();
app.use(express.json());
app.use(cors());

async function auth(headers) {
  try {
    const res = await axios.post(`${config.gateway.auth.url}/me`, {}, { headers: { Authorization: headers.authorization || '', ...headers } });
    return res.status === 200;
  } catch (err) {
    return false;
  }
}

Object.keys(config.gateway).forEach((api) => {
  config.gateway[api].endpoints.forEach((endpoint) => {
    app[endpoint.method](endpoint.as, async (req, res) => {
      try {
        const { host, connection, 'content-length': contentLength, ...forwardHeaders } = req.headers;

        if (endpoint.protected) {
          const isAuthenticated = await auth(forwardHeaders);
          if (!isAuthenticated) return res.status(401).json({ status: 'error', error: 'Unauthorized' });
        }

        let path = endpoint.path;
        Object.entries(req.params).forEach(([key, value]) => {
          path = path.replace(`:${key}`, value);
        });

        const response = await axios({
          method: endpoint.method,
          url: `${config.gateway[api].url}${path}`,
          data: ['post', 'put', 'patch'].includes(endpoint.method) ? req.body : undefined,
          params: req.query,
          headers: forwardHeaders,
          timeout: 10000,
        });

        return res.status(response.status).json(response.data);
      } catch (error) {
        return res.status(error?.response?.status || 500).json({ status: 'error', error: error?.response?.data?.error || 'internal gateway error' });
      }
    });
  });
});
