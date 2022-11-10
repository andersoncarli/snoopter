import Link from "next/link";
import Contador from '../components/Contador';

function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <Contador />
      <Link href="/"> Home </Link>
    </>
  )
}

export default Sobre