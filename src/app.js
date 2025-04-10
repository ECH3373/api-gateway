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
    const { as, method, protected: isProtected, path, isBinary } = endpoint;

    app[method](as, async (req, res) => {
      try {
        const { host, connection, 'content-length': contentLength, ...forwardHeaders } = req.headers;

        if (isProtected) {
          const isAuthenticated = await auth(forwardHeaders);
          if (!isAuthenticated) return res.status(401).json({ status: 'error', error: 'Unauthorized' });
        }

        let resolvedPath = path;
        Object.entries(req.params).forEach(([key, value]) => {
          resolvedPath = resolvedPath.replace(`:${key}`, value);
        });

        const response = await axios({
          method,
          url: `${config.gateway[api].url}${resolvedPath}`,
          data: ['post', 'put', 'patch'].includes(method) ? req.body : undefined,
          params: req.query,
          headers: forwardHeaders,
          timeout: 10000,
          responseType: isBinary ? 'stream' : 'json',
        });

        if (isBinary) {
          res.set(response.headers);
          response.data.pipe(res);
        } else {
          res.status(response.status).json(response.data);
        }
      } catch (error) {
        res.status(error?.response?.status || 500).json({
          status: 'error',
          error: error?.response?.data?.error || 'internal gateway error',
        });
      }
    });
  });
});
