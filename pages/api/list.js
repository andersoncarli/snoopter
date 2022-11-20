// import { MongoClient } from "mongodb";
// import connectToDatabase from "../../lib/connectToDatabase";
import clientPromise from "../../lib/mongodb";

// console.log(connectToDatabase)

export default async function handler(request, response) {
  try {
    // console.log('list*')
    const mongoClient = await clientPromise //connectToDatabase()
    // console.log(mongoClient)

    const db = mongoClient.db('sample_restaurants')

    const collection = db.collection('restaurants')

    const results = await collection
      .find({})
      .project({
        grades: 0,
        borough: 0,
        restaurant_id: 0,
      })
      .limit(8)
      .toArray()

    response.status(200).json(results)

  } catch (e) {
    console.error(e)
    response.status(500).json(e)
  }
}