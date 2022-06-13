import { Schema, model } from "mongoose";

// interface representing a document in MongoDB
interface IUser {
  username: string;
  password: string;
  email: string;
  avatar?: string;
}

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