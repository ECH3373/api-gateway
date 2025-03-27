import 'dotenv/config';

export const transporter = {
  name: process.env.TRANSPORTER || 'redis',
  url: process.env.TRANSPORTER_URL,
};
