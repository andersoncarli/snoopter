// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable');
}

// if (!MONGODB_DB) {
//   throw new Error('Define the MONGODB_DB environment variable');
// }

let client = null, db = null;

export async function connectToDatabase(database) {
  // console.log('connectToDatabase')
  if (!client) {
    client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect()
    // console.log(client)
  };

  if (!db) {
    db = client.db(database || MONGODB_DB);
    // console.log(db)
  }
  return { client, db };
}