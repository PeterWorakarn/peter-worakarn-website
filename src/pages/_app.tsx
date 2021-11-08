import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Providers from '../features/Providers'
import { initializeMoment } from '../features/utils/moment';
import Layout from '../features/components/Layout';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect, useState } from 'react';
import * as ga from 'react-ga'
import { useRouter } from 'next/dist/client/router';

initializeMoment();

function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
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
      <DefaultSeo {...SEO} />
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
