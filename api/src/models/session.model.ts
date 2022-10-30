import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const seesionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("Session", seesionSchema);
export default SessionModel;
