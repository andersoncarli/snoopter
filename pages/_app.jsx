import 'bootstrap/dist/css/bootstrap.css'
import '../styles/reset.css'
import '../styles/custom.css'

// import { AppProps } from 'next/app'

import SSRProvider from 'react-bootstrap/SSRProvider'
import Layout from '../components/Layout';

import * as react from 'react';
Object.entries(react).forEach(([name, exported]) => { global[name] = exported });

// console.log(Object.keys(react))
// import * as next from 'next';
// Object.entries(next).forEach(([name, exported]) => global[name] = exported);
// console.log(Object.keys(next))
// Object.assign(global, next)

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('node_modules/bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}