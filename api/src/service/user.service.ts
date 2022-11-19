import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    const user = UserModel.create(input);
    return omit((await user).toJSON(), "password");
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error);
      throw new Error(error.message);
    }
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit((await user).toJSON(), "password");
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
