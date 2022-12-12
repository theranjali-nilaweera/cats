import { Request, Response, Router } from 'express';
import { getCats } from './catService';

import { createLog } from '../logs/logging';
const log = createLog(__filename);
const catRouter: Router = Router();

catRouter.get('/best', async (req: Request, res: Response) => {
    log.info('Fetching all movies summary'); 
    return res.json(await getCats());
});
export { catRouter };
