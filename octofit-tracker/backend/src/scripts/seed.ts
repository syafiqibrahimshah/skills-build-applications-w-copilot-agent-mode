import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [maya, theo, jordan] = await User.create([
      { name: 'Maya Chen', email: 'maya@octofit.local', totalPoints: 1280 },
      { name: 'Theo Martin', email: 'theo@octofit.local', totalPoints: 1140 },
      { name: 'Jordan Patel', email: 'jordan@octofit.local', totalPoints: 980 },
    ]);

    await Team.create({
      name: 'Summit Striders',
      description: 'A team building a consistent running habit.',
      members: [maya._id, theo._id, jordan._id],
    });

    await Activity.create([
      { user: maya._id, type: 'Trail run', durationMinutes: 48, caloriesBurned: 510, performedAt: new Date('2026-09-01T07:15:00Z') },
      { user: theo._id, type: 'Strength training', durationMinutes: 42, caloriesBurned: 360, performedAt: new Date('2026-08-31T17:30:00Z') },
      { user: jordan._id, type: 'Cycling', durationMinutes: 55, caloriesBurned: 475, performedAt: new Date('2026-08-30T09:00:00Z') },
    ]);

    await Leaderboard.create({
      period: '2026-W36',
      entries: [
        { user: maya._id, score: 1280, rank: 1 },
        { user: theo._id, score: 1140, rank: 2 },
        { user: jordan._id, score: 980, rank: 3 },
      ],
    });

    await Workout.create([
      {
        title: 'Morning Momentum',
        description: 'A balanced full-body session for a focused start.',
        level: 'beginner',
        durationMinutes: 25,
        exercises: ['Bodyweight squats', 'Incline push-ups', 'Dead bugs'],
      },
      {
        title: 'Hill Builder',
        description: 'Intervals designed to build running power and endurance.',
        level: 'intermediate',
        durationMinutes: 35,
        exercises: ['Dynamic warm-up', 'Hill repeats', 'Easy cooldown'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
