import { Router } from 'express';
import Team from '../models/Team.js';
const router = Router();
router.get('/', async (_request, response) => {
    response.json(await Team.find().populate('members', 'name email totalPoints'));
});
router.get('/:id', async (request, response) => {
    response.json(await Team.findById(request.params.id).populate('members', 'name email totalPoints'));
});
export default router;
