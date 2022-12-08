
// https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
import Posts from './Posts';
// import SimpleMenu from '../components/SimpleMenu';

export default function Home({ posts = [] }) {
  return (<>
    {/* <SimpleMenu /> */}
    {posts.map && (<Posts posts={posts} />)}
  </>)
}
