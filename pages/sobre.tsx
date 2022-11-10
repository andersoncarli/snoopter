import Link from "next/link";
import Button from '../components/Button';
import Contador from '../components/Contador';

function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <Button />
      <Contador />
      <Link href="/"> Home </Link>
    </>
  )
}

export default Sobre