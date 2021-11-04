import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPeterDatayolkAssetPath, getUTMOutboundPath } from '../configs'

import { TBio } from '../constant-enum-type/Strapi'
import dynamic from 'next/dynamic'

const BioContainer = dynamic(import('../features/BioContainer'));
const GithubContainer = dynamic(import('../features/GithubContainer'));
const DatayolkContainer = dynamic(import('../features/DatayolkContainer'));

export async function getServerSideProps() {
  const res = await fetch('https://peter.datayolk.net/peter-bio')
  const Biodata: TBio = await res.json()
  if (!Biodata) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return { props: { Biodata } }
  // Pass data to the page via props
}

interface HomeProps {
  Biodata: TBio;
}

const Home: NextPage<HomeProps> = ({ Biodata }) => {
  return (
    <>
      <BioContainer data={Biodata} />
      <Link href="/resume"><a>Resume</a></Link>
      <GithubContainer />
      <DatayolkContainer />
    </>
  )
}

export default Home
