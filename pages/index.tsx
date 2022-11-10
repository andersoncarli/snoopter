import Link from "next/link";
import Contador from '../components/Contador';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Contador />
      <Link href="/sobre"> Sobre</Link>
    </>
  )
}

export default Home