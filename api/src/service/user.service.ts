import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error);
      throw new Error(error.message);
    }
  }
}
