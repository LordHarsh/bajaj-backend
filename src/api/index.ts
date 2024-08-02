import { Router } from 'express';

export default (): Router => {
  const app = Router();

  //TODO: add routes here..
  app.use('/bfhl', require('./bfhl/router').default());

  return app;
};
