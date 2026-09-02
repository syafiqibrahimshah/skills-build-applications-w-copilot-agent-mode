import { Router } from 'express';
import User from '../models/User.js';
const router = Router();
router.get('/', async (_request, response) => {
    response.json(await User.find().sort({ totalPoints: -1 }));
});
router.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id);
    response.json(user);
});
export default router;
