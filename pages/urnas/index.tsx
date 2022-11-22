import Head from 'next/head'
import { connectToDatabase } from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

export async function getServerSideProps() {
  let { client } = await connectToDatabase()

  return {
    props: { isConnected: !!client },
  }
}

import { useEffect, useState } from 'react'

export default function Home({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/list")
      const resJson = await res.json()
      setRestaurants(resJson)
    })();
  }, [])

  return (
    <div className="container">
      <main>
        <h1>
          First MongoDB!
        </h1>
        <div className="grid">
          {
            restaurants.map((restaurant: any) => (
              <div className='card' key={restaurant._id}>
                <h2>{restaurant.name}</h2>
                <p>{restaurant.cuisine}</p>
              </div>
            ))
          }
        </div>
      </main>

      <footer>
      </footer>

    </div>
  )
}
