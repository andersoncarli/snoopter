import 'node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/custom.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}