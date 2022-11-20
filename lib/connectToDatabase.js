import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
if (!uri) throw new Error("Please add your Mongo URI to .env")

let mongoClient;

export default async function connectToDatabase() {
  if (!mongoClient) try {
    console.log("Connecting...")
    mongoClient = await (new MongoClient(uri, {})).connect()
    console.log("Connected!")
  } catch (e) { console.log(e) }

  return mongoClient
}