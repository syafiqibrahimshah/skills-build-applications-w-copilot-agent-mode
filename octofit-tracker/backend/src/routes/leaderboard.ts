import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';

const router = Router();

router.get('/', async (_request, response) => {
  response.json(await Leaderboard.find().populate('entries.user', 'name email totalPoints'));
});

export default router;
