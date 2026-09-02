import { Router } from 'express';
import Workout from '../models/Workout.js';
const router = Router();
router.get('/', async (_request, response) => {
    response.json(await Workout.find().sort({ level: 1, durationMinutes: 1 }));
});
router.get('/:id', async (request, response) => {
    response.json(await Workout.findById(request.params.id));
});
export default router;
