
/* eslint-disable import/no-anonymous-default-export */
const defaultSeo = {
  title: "Home",
  titleTemplate: "%s – Peter O.",
  description: "Personal Website of Peter O.",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: 'Peter O.',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags:
    [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/vercel.svg',
        sizes: '76x76'
      },
      // {
      //   rel: 'manifest',
      //   href: '/manifest.json'
      // }
    ]
};

export default defaultSeo;