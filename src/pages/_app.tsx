import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeMoment } from '../features/utils/moment';
import TagManager from 'react-gtm-module';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { gtmTrackingCode } from '../configs';

const HeadSEO = dynamic(import('../features/components/HeadSEO'), { ssr: false });
const Layout = dynamic(import('../features/components/Layout'), { ssr: false });
const Providers = dynamic(import('../features/Providers'), { ssr: false });


initializeMoment();

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: gtmTrackingCode
    });
  }, [])

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
