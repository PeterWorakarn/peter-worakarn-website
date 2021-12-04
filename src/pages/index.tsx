import type { NextPage } from 'next';
import { TBio } from '../constant-enum-type/Strapi';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

const BioContainer = dynamic(import('../features/BioContainer'), {ssr: true});
// const GithubContainer = dynamic(import('../features/GithubContainer'), {ssr: false});
// const DatayolkContainer = dynamic(import('../features/DatayolkContainer'), {ssr: false});

export async function getStaticProps() {
  const res = await fetch('https://peter.datayolk.net/peter-bio')
  const Biodata: TBio = await res.json()
  if (!Biodata) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return { 
    // Pass data to the page via props
    // Incremental   Static  Regeneration
    revalidate: 1,
    props: { Biodata } 
  }
}

interface HomeProps {
  Biodata: TBio;
}

const Home: NextPage<HomeProps> = ({ Biodata }) => {
  const SEO = {
    description: Biodata.bio,
    openGraph: {
      description: Biodata.bio,
    },
  }
  return (
    <div className="flex flex-col gap-40">
      <NextSeo {...SEO} />
      <BioContainer data={Biodata} />
      {/* <GithubContainer /> */}
      {/* <DatayolkContainer /> */}
    </div>
  )
}

export default Home
