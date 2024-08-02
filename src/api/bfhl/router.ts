import { Router } from 'express';
import { handle_get_bfhl, handle_post_bfhl } from './controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/', handle_post_bfhl);
    app.get('/', handle_get_bfhl);

    return app;
};
