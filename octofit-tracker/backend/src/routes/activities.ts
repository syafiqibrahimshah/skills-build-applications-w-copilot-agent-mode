import { Router } from 'express';
import Activity from '../models/Activity.js';

const router = Router();

router.get('/', async (_request, response) => {
  response.json(await Activity.find().sort({ performedAt: -1 }).populate('user', 'name email'));
});

router.get('/:id', async (request, response) => {
  response.json(await Activity.findById(request.params.id).populate('user', 'name email'));
});

export default router;
