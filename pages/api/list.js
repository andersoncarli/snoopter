import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(request, response) {
  try {
    const { db } = await connectToDatabase("sample_restaurants");
    // console.log('list*')
    // console.log(mongoClient)

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