import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { initializeMoment } from '../features/utils/moment';

import { useEffect, useState } from 'react';
import * as ga from 'react-ga'
import { useRouter } from 'next/dist/client/router';
import { gaTrackingCode } from '../configs';
import dynamic from 'next/dynamic';

const HeadSEO = dynamic(import('../features/components/HeadSEO'), {ssr: true});
const Layout = dynamic(import('../features/components/Layout'), {ssr: true});
const Providers = dynamic(import('../features/Providers'), {ssr: true});


initializeMoment();
ga.initialize(gaTrackingCode);

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Run Logic on GA
    ga.pageview(window.location.pathname);
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });
    
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
      console.log('Fire PageViews')
      ga.pageview(window.location.pathname);
    });
  }, []);
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
