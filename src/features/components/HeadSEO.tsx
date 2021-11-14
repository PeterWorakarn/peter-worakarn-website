import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import extractPathName from '../utils/extractPath';
import titleCase from '../utils/titleCase';

const transformPath = (path: string) => {
  if (path === '/404') return '404';
  // remove last query
  const pathname = extractPathName(path);

  // Create upper case
  return titleCase(pathname.replace('/', '').replace('-', ' '));
}

const HeadSEO: React.FC = () => {
  const router = useRouter();
  const overideSEO = {
    titleTemplate: "%s – Peter O.",
    title: transformPath(router.pathname === '/' ? 'Home' : router.pathname),
    canonical: router.route,
    description: "Personal Website of Peter O.",
    additionalLinkTags:
      [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon.png',
          sizes: '76x76'
        },
        {
          rel: 'manifest',
          href: '/manifest.json'
        }
      ],
    openGraph: {
      description: 'Personal Website of Peter O.',
      images: [
        {
          url: `https://peter-o.tech/OG-Peter-O.png`,
          width: 800,
          height: 600,
          alt: 'Peter O.',
        },
        {
          url: `https://peter-o.tech/OG-Peter-O.svg`,
          width: 800,
          height: 600,
          alt: 'Peter O.',
        },
      ],
      url: 'https://peter-o.tech',
      type: 'website',
      locale: 'en_IE',
      site_name: 'Peter O.',
    },
    twitter: {
      cardType: 'summary_large_image',
      title: 'Peter O',
      description: 'Personal Website of Peter O.',
      image: `https://peter-o.tech/OG-Peter-O.svg`,
    },
  };
  return (
    <>
      <NextSeo {...overideSEO} />
      <SocialProfileJsonLd
        type="Person"
        name="Peter O."
        url={router.route}
        sameAs={[
          'https://github.com/PeterWorakarn',
          'https://www.linkedin.com/in/worakarn-o-92a238164/',
        ]}
      />
    </>
  );
};

export default HeadSEO;
