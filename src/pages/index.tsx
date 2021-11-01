import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import useFetchGithubUserInfo from '../features/hooks/Github/useFetchGithubUserInfo'
import useFetchGithubUserRepos from '../features/hooks/Github/useFetchGithubUserRepos'
import useFetchCurrentJob from '../features/hooks/Strapi/useFetchCurrentJob'
import useFetchDatayolkContent from '../features/hooks/Datayolk/useFetchDatayolkContent'
import { getPeterDatayolkAssetPath, getUTMOutboundPath } from '../configs'
import useFetchGithubReposReadMe from '../features/hooks/Github/useFetchGithubReposReadMe'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import BioContainer from '../features/BioContainer'
import { TBio } from '../constant-enum-type/Strapi'
import GithubContainer from '../features/GithubContainer'
import DatayolkContainer from '../features/DatayolkContainer'

const username = 'PeterWorakarn'

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
