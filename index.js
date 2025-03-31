import { config } from './config/index.js';
import { app } from './src/app.js';

app.listen(config.app.port, () => {
  console.log(`Server is running on port: http://localhost:${config.app.port}`);
});
