import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from '../features/Providers'
import { initializeMoment } from '../features/utils/moment';
import Layout from '../features/components/Layout';

initializeMoment();

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}
export default App
