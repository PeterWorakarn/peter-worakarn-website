import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import useFetchGithubUserInfo from '../features/hooks/Github/useFetchGithubUserInfo'
import useFetchGithubUserRepos from '../features/hooks/Github/useFetchGithubUserRepos'
import useFetchCurrentJob from '../features/hooks/Strapi/useFetchCurrentJob'
import useFetchDatayolkContent from '../features/hooks/Datayolk/useFetchDatayolkContent'
import { getPeterDatayolkAssetPath, getUTMOutboundPath } from '../configs'

const username = 'PeterWorakarn'

const parseWordpressFeature = (feature_image: string) => {
  return feature_image.replaceAll(`\\`, ' ')
};

const Home: NextPage = () => {
  // const githubUserQuery = useFetchGithubUserInfo(username);
  // const githubAllReposQuery = useFetchGithubUserRepos(username); // TODO: Create Web Scarping server to get Content daily
  const currentJobQuery = useFetchCurrentJob();
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
            <a rel="noreferrer" target="_blank" href={getUTMOutboundPath({path: each.url})} key={each.id}>
              <p>{each.title}</p>
            </a>
        )
      })}
    </>
  )
}

export default Home
