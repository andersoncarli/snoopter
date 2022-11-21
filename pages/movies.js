// https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/
import { connectToDatabase } from "../lib/mongodb";

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Top 10 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { db } = await connectToDatabase("sample_mflix");

    console.log('getServerSideProps', db)

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}