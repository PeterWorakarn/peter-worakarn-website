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

const username = 'PeterWorakarn'

const parseWordpressFeature = (feature_image: string) => {
  return feature_image.replaceAll(`\\`, ' ')
};

const Home: NextPage = () => {
  const [state, setstate] = useState('')


  // Defining async function
  async function getReadMeapi(name: string, project_name: string): Promise<void> {
    const api_url = `https://raw.githubusercontent.com/${name}/${project_name}/master/README.md`;

    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    const data = await response.text();
    setstate(data);
    // return data;
  }

  useEffect(() => {
    getReadMeapi('PeterWorakarn', 'PeterWorakarn');
  }, [])
  // Calling that async function

  // const githubUserQuery = useFetchGithubUserInfo(username);
  // const githubAllReposQuery = useFetchGithubUserRepos(username); // TODO: Create Web Scarping server to get Content daily
  // const githubReadMeQuery = useFetchGithubReposReadMe(username, username);
  const currentJobQuery = useFetchCurrentJob(true);
  const datayolkPostQuery = useFetchDatayolkContent();

  if (currentJobQuery.status === 'loading') {
    return <p>Loading...</p>
  }
  if (currentJobQuery.status === 'error') {
    return <p>Error</p>
  }
  if (datayolkPostQuery.status === 'loading') {
    return <p>Loading...</p>
  }
  if (datayolkPostQuery.status === 'error') {
    return <p>Error</p>
  }
  return (
    <>
      {/* IMAGE FROM GITHUB
      {githubUserQuery.data?.name}
      {githubUserQuery.data?.location}
      {githubUserQuery.data?.bio}
      <Image width="60" height="60" objectFit="cover" alt={githubUserQuery.data?.name} src={githubUserQuery.data?.avatar_url as string} />
      DATA FROM GITHUB
      {githubAllReposQuery.data?.map(each => {
        return <p key={each.id}><Link href={`Github-project/${each.name}`}><a>{each.name}</a></Link></p>;
      })} */}


      <Link href="/resume"><a>Resume</a></Link>

      IMAGE FROM STRAPI
      {currentJobQuery.data?.map(each => {
        return (
          <Image alt='sss' key={each.id} width="50" height="50" src={getPeterDatayolkAssetPath({ path: each.Company_logo.formats.medium.url })} />
        )
      })}
      {datayolkPostQuery.data?.map(each => {
        return (
          <a rel="noreferrer" target="_blank" href={getUTMOutboundPath({ path: each.url })} key={each.id}>
            <p>{each.title}</p>
            <p>{each.description}</p>
            <Image src={each.featured_image.large} alt={each.title} objectFit="cover" width="360px" height="190px" />
            {/* <p>{each.tags}</p> */}
            <p>{each.categories}</p>
          </a>
        )
      })}
      <div>
        <ReactMarkdown>
          {state}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default Home
