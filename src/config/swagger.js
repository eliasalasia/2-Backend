import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert {type:'json'};

export const swaggerDocs = (app) => {
  app.use('/api-docs', serve, setup(swaggerDocument));
};