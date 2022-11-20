import Link from "next/link";
// import Button from '../components/Button';
import Contador from '../components/Contador';
import styles from '../styles/Home.module.css'

function Sobre() {
  return (
    <div className={styles.container}>
      <h1>Sobre</h1>
      {/* <Button /> */}
      <Contador />
      <Link href="/"> Home </Link>
    </div>
  )
}

export default Sobre