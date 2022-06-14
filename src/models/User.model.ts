import { Schema, model } from "mongoose";
import { IUser } from '../types/user';

// create schema
const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ""
  }
}, { timestamps: true });

export default model<IUser>('User', UserSchema);