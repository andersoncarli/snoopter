// https://youtu.be/V2T_bkOs0xA

// modo 1 usando router
// import { useRouter } from 'next/router';

// modo 2 usando getServerSideProps
// export async function getServerSideProps(context) {
//   const id = context.query.id

//   return {
//     props: { id }
//   }
// }

// modo 3 usando getStaticPaths & getStaticProps
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    // fallback: false, // retorna 404 para qq outo id
    // fallback: true,  // geração assíncrona
    fallback: 'blocking', // geração síncrona
  }
}

export async function getStaticProps(ctx) {
  // uma demora artifical para demonstrar fallback true e blocking
  await delay((5000))

  const id = ctx.params.id;
  return {
    props: { id }
  }
}

function Produtos(props) {
  // modo 1
  // const router = useRouter()
  // const id = router.query.id

  return <div>Id do produto: {props.id}</div>
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default Produtos