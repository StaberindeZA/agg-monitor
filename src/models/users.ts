import mongoose from 'mongoose';
const {Schema, model} = mongoose;

export enum UserRole {
  superadmin = 'superadmin',
  admin = 'admin',
  assistant = 'assistant',
}

export interface IUser {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName: string;
  role: UserRole;
}

const schema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  email: String,
  firstName: String,
  lastName: String,
  role: {type: String, enum: UserRole},
});

export const User = model<IUser>('User', schema);
