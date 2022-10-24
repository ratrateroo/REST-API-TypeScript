import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

// function connect() {
//   const dbUri = config.get<string>("dbUri");
//   return mongoose
//     .connect(dbUri)
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((error) => {
//       console.log("Could not connect to db.");
//       process.exit(1);
//     });
// }

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to DB");
    //console.log("Connected to DB");
  } catch (error) {
    logger.error("Could not connect to db.");
    //console.log("Could not connect to db.");
    process.exit(1);
  }
};

export default connect;
