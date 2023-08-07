import { Router } from 'express';
import { folder } from './v1/folder';
import { file } from './v1/file';

const driveRouter = Router();

driveRouter.use('/v1/folder', folder);
driveRouter.use('/v1/file', file);
driveRouter.get('/ping', (req, res) => {
  res.send('Drive api is up');
});
export default driveRouter;
