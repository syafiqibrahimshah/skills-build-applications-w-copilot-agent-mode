import { InferSchemaType, model, Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, required: true, min: 0 },
    performedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export type ActivityDocument = InferSchemaType<typeof activitySchema>;
export default model<ActivityDocument>('Activity', activitySchema);