import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privatekey");
const publicKey = config.get<string>("publickey");
function signJwt() {}

function verifyJwt() {}
