import Link from "next/link";
import Contador from '../components/Contador';
import Button from '../components/Button'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button></Button>
      <Contador />
      <Link href="/sobre"> Sobre</Link>
      <p>P{
        // // set unicode favicon
        // https://stackoverflow.com/questions/64452685/how-to-convert-unicode-character-to-svg-and-then-a-favicon
        // document.head.appendChild(
        //   Object.assign(document.createElement("link"),
        //   // {rel: "icon",
        //     // href: `data:image/svg+xml,
        //     // <svg xmlns='http://www.w3.org/2000/svg'
        //     // viewBox='0 0 100 100'>
        //     // <text y='.9em' font-size='90'>👽</text></svg>` }))
      }</p>
    </>
  )
}

export default Home