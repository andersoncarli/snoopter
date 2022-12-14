import 'node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/custom.css'

import type { AppProps } from 'next/app'

import SSRProvider from 'react-bootstrap/SSRProvider'
import Layout from '../components/Layout';

import * as react from 'react';
Object.assign(global, react)
// Object.entries(react).forEach(([name, exported]) => global[name] = exported);
// console.log(Object.keys(react))
// import * as next from 'next';
// Object.entries(next).forEach(([name, exported]) => global[name] = exported);
// console.log(Object.keys(next))
// Object.assign(global, next)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}