/* eslint-disable @next/next/no-document-import-in-page */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { gaTrackingCode } from '../configs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#455AFB" />
          <meta name="og:title" content="Peter O" />
          <meta name="og:image" content="https://peter-o.tech/OG-Peter-O.png" />
          <meta name="og:width" content="800" />
          <meta name="og:height" content="600" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="og:description" content="I'm a self-taught web developer with design background in Thailand. For my weekend, I usually write articles about Data and Technology in Datayolk.net" />
          <meta name="google-site-verification" content="RRZfDeXabtlJLdFYUrvBmJH6YWUbv8NCoughR9CFoEU" />
        </Head>
        <body style={{ scrollSnapType: 'y proximity' }} className="resume scorll_bar overflow-x-hidden bg-app_dark">

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}