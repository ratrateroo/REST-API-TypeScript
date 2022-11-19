import jwt, { JwtPayload } from "jsonwebtoken";
import config from "config";

//const privateKey = config.get<string>("accessTokenPrivateKey");
const privateKey = config.get<string>("privateKey");
//const publicKey = config.get<string>("accessTokenPublicKey");
const publicKey = config.get<string>("publicKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string): JwtPayload {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded: decoded,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        valid: false,
        expired: error.message === "jwt expired",
        //decoded: null,
        decoded: "",
      };
    }
    return {
      valid: false,
      expired: false,
      decoded: "",
    };
  }
}
