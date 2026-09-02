import { InferSchemaType, model, Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    period: { type: String, required: true, unique: true, trim: true },
    entries: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        score: { type: Number, required: true, min: 0 },
        rank: { type: Number, required: true, min: 1 },
      },
    ],
  },
  { timestamps: true },
);

export type LeaderboardDocument = InferSchemaType<typeof leaderboardSchema>;
export default model<LeaderboardDocument>('Leaderboard', leaderboardSchema);