import { Schema, model } from 'mongoose';
import { Tusers } from './users.interface';
import bcrypt, { hash } from 'bcrypt';
import config from '../../app/config';

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

usersSchema.pre('save', async function (next) {
  const users = this;
  users.password = await bcrypt.hash(
    users.password,
    Number(config.bcrypt_salt),
  );
  next();
});

usersSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UsersModel = model<Tusers>('User', usersSchema);
