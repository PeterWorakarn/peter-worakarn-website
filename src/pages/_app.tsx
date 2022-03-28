import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeMoment } from '../features/utils/moment';

import dynamic from 'next/dynamic';

const HeadSEO = dynamic(import('../features/components/HeadSEO'), { ssr: false });
const Layout = dynamic(import('../features/components/Layout'), { ssr: false });
const Providers = dynamic(import('../features/Providers'), { ssr: false });


initializeMoment();

function App({ Component, pageProps }: AppProps) {

  return (
    <Providers>
      <HeadSEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default App
