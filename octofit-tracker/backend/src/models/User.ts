import { InferSchemaType, model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    avatarUrl: { type: String, trim: true },
    totalPoints: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true },
);

export type UserDocument = InferSchemaType<typeof userSchema>;
export default model<UserDocument>('User', userSchema);