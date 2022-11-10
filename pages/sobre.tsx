import Link from "next/link";
import Contador from '../components/Contador';

function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <Contador />
      <Link href="/">
        <a >Home</a>
      </Link>
    </>
  )
}

export default Sobre