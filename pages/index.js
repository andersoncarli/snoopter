// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
// import Head from 'next/head';

import Nav from '../components/Nav';
// import Nav from 'react-bootstrap/Nav';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';
import Alert from 'react-bootstrap/Alert';

// process.stdout.write('\x1Bc') // clear screen

export default function Home({ posts }) {
  // console.log('POSTS', posts)
  return (
    <div>
      <Nav />

      <Alert key='warning' variant='warning'>
        This is a <strong>warning</strong> alert—check it out!
      </Alert>

      <main>
        <div className={styles.container}> {
          posts.length === 0 ? (
            <h2>No added posts</h2>
          ) : (
            <ul>
              {posts.map((post, i) => (
                <PostCard post={post} key={i} />
              ))}
            </ul>
          )
        } </div>
      </main>
    </div>
  );
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