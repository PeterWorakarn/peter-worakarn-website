import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Providers from '../features/Providers'
import { initializeMoment } from '../features/utils/moment';
import Layout from '../features/components/Layout';

import { useEffect, useState } from 'react';
import * as ga from 'react-ga'
import { useRouter } from 'next/dist/client/router';
import HeadSEO from '../features/components/HeadSEO';
import { TBio } from '../constant-enum-type/Strapi';
import { useSetRecoilState } from 'recoil';
import { BioState } from '../store';
import { gaTrackingCode } from '../configs';

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
