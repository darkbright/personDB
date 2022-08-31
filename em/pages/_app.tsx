import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
