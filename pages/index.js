
// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
import Posts from './Posts';
// import styles from '../styles/Home.module.css';
import SimpleMenu from '../components/SimpleMenu';

import useTranslation from "next-translate/useTranslation";

export default function Home({ posts = [] }) {
  return (<>
    <SimpleMenu />
    {posts.map && (<Posts posts={posts} />)}
  </>)
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== 'production';
  let { DEV_URL, PROD_URL } = process.env;

  // process.stdout.write('\x1Bc') // clear screen
  // console.log('DEV_URL, PROD_URL', DEV_URL, PROD_URL)

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);

  // console.log('RESPONSE:', response.json)
  // extract the data
  let data = await response.json();

  // console.log(data)
  return {
    props: {
      posts: data['message'],
    },
  };
}
