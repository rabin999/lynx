import { MongoClient, Logger } from "mongodb";
import config from "../../../../config";

// Use connect method to connect to the Server
const db = async function () {
  const client = await MongoClient.connect(config.database.url, { useNewUrlParser: true, useUnifiedTopology: true });
  const database = client.db(config.database.name);

  // Set debug
  if (config.database.debug) {
    Logger.setLevel("debug");
  }

  return database;
};

export default db();
