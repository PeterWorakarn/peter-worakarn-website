import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import useFetchGithubReposReadMe from '../../features/hooks/Github/useFetchGithubReposReadMe'

const username = 'PeterWorakarn'

const GithubProjectPage: NextPage = () => {
  const router = useRouter()
  const githubContentQuery = useFetchGithubReposReadMe(username,router.query.name as string);
  console.log(githubContentQuery)
  return (
    <>
      <h1>{router.query.name}</h1>
      <p>{githubContentQuery.data?.content}</p>
      Voluptate quasi et facilis et ex animi accusamus qui architecto. Ut vel perspiciatis perspiciatis accusamus et quos sequi. Velit esse impedit eius cum nihil magni enim. Assumenda sed vero excepturi. Ut corrupti ea aperiam placeat quia fugit maxime cum facere. Nobis quaerat perspiciatis velit eos modi.
      Est quam quis ipsam. Nulla ullam qui rerum quisquam iure dolore. Architecto omnis porro sit eum sapiente similique vero. Sunt exercitationem exercitationem odit eligendi perferendis voluptatem. Vel saepe quibusdam. Sed enim a nisi.
      Ipsam non atque laudantium. Nemo quia aliquam voluptas possimus praesentium ab quos aut. Unde omnis laudantium. Maiores aut explicabo sit.
    </>
  )
}

export default GithubProjectPage
