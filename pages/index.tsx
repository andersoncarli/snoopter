import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

import Contador from '../components/Contador';
// import Button from '../components/Button'

function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Home
      </h1>
      {/* <Button></Button> */}
      <Contador />
      <Link href="/sobre"> Sobre</Link>
    </div>
  )
}

export default Home