import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeMoment } from '../features/utils/moment';
import TagManager from 'react-gtm-module';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { gtmTrackingCode } from '../configs';
import CookieConsent from '../features/components/CookieConsent';
import { useState } from 'react';
import { TCookieData, TEnumCookieCategories } from '../constant-enum-type/cc-cookie';

const HeadSEO = dynamic(import('../features/components/HeadSEO'), { ssr: false });
const Layout = dynamic(import('../features/components/Layout'), { ssr: false });
const Providers = dynamic(import('../features/Providers'), { ssr: false });


initializeMoment();

function App({ Component, pageProps }: AppProps) {
  const [consentLevel, setConsentLevel] = useState<TEnumCookieCategories[]>([]);
  useEffect(() => {
    if (consentLevel.includes(TEnumCookieCategories.ANALYTICS)) {
      TagManager.initialize({
        gtmId: gtmTrackingCode
      });

      // SIGNAL GTM ABOUT CONSENT LEVEL analytics_storage 
      console.info('ANALYTICS MODE');
      TagManager.dataLayer({ dataLayer: ['consent', 'update', { analytics_storage: 'granted' }] })
    }
    if (consentLevel.includes(TEnumCookieCategories.TARGETING)) {
      TagManager.initialize({
        gtmId: gtmTrackingCode
      });

      // SIGNAL GTM ABOUT CONSENT LEVEL ad_storage
      console.info('TARGETING MODE');
      TagManager.dataLayer({ dataLayer: ['consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' }] })
    }
  }, [consentLevel])



  return (
    <Providers>
      <HeadSEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent consentHandler={(value: TCookieData) => setConsentLevel(value.categories)} />
    </Providers>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default App
