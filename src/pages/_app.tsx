import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from '../features/Providers'
import { initializeMoment } from '../features/utils/moment';

initializeMoment();

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
export default App
