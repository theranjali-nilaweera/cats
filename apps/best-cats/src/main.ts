/**
 * 
 */

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { routes } from './app/routes';
import { createLog } from './app/logs/logging';
const log = createLog(__filename);

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to best-cats!' });
// });
app.use(bodyParser.json());
app.use('/api/cats', routes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  log.info(`Listening at http://localhost:${port}/api/cats/best`);
});
server.on('error', console.error);
