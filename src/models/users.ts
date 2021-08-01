import mongoose from 'mongoose';
const {Schema} = mongoose;

const schema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  email: String,
  firstName: String,
  lastName: String,
  role: {type: String, enum: ['superadmin', 'admin', 'assistant']},
});

export const User = mongoose.model('User', schema);
