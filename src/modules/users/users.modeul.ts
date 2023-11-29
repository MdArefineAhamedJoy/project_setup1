import { Schema, model } from 'mongoose';
import { Tusers } from './users.interface';

const usersSchema = new Schema<Tusers>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true, optional: true },
    role: {
      type: String,
      enum: ['admin', 'students', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progras', 'blocked'],
      default: 'in-progras',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const UsersModel = model<Tusers>('User', usersSchema);
