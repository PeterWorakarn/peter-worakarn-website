import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import moment from "moment-timezone";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { UseQueryResult } from "react-query";
import { GITHUB_CONTENT_LENGTH, GITHUB_USER } from "../configs";
import { TGithubUserRepos } from "../constant-enum-type/Github";
import SectionHeader from "./components/SectionHeader";
import useFetchGithubUserInfo from "./hooks/Github/useFetchGithubUserInfo";
import useFetchGithubUserRepos from "./hooks/Github/useFetchGithubUserRepos";
import { randomColor } from "./utils/random-color";

const CardSkeleton = dynamic(import('../features/components/skeletons/CardSkeleton'));

const dummyGithubData = [
  {
    id: 378810744,
    name: "progress-bar",
    full_name: "PeterWorakarn/progress-bar", // path param
    description: "Simple Progress Circle Bar without additional UI Library",
    html_url: "https://github.com/PeterWorakarn/progress-bar",
    homepage: "https://circular-progress-bar.netlify.app/",
    topics: ["pin",
      "react",
      "scss"],
    language: "SCSS",
    created_at: "2021-06-21T04:56:03Z",
  },
  {
    id: 378810744,
    name: "progress-bar",
    full_name: "PeterWorakarn/progress-bar", // path param
    description: "The Application that help teacher to create and manage quiz.",
    html_url: "https://github.com/PeterWorakarn/progress-bar",
    homepage: "https://circular-progress-bar.netlify.app/",
    topics: ["pin",
      "react",
      "scss"],
    language: "SCSS",
    created_at: "2021-06-21T04:56:03Z",
  },
  {
    id: 378810744,
    name: "progress-bar",
    full_name: "PeterWorakarn/progress-bar", // path param
    description: "Create quarantine infographic with Single Page Application",
    html_url: "https://github.com/PeterWorakarn/progress-bar",
    homepage: "https://circular-progress-bar.netlify.app/",
    topics: ["pin",
      "react",
      "scss"],
    language: "SCSS",
    created_at: "2021-06-21T04:56:03Z",
  },
]

const GithubContainer: React.FC = () => {
  const githubQuery: UseQueryResult<TGithubUserRepos, unknown> = useFetchGithubUserRepos(GITHUB_USER)
  return (
    <section>
      <div className="flex justify-between items-baseline">
        <SectionHeader title="Github · Project" />
        {/* <a target="_blank" rel="noreferrer" href={getUTMOutboundPath({ path: 'https://datayolk.net/blog' })}>Visit Datayolk ?</a> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
        {githubQuery.status !== "success" && (
          <>
            {Array(GITHUB_CONTENT_LENGTH - 1)
              .fill('')
              .map((_, index) => (
                <CardSkeleton key={index} />
              ))}
          </>
        )}
        {githubQuery.status === "success" && githubQuery.data.filter(items => items.topics.includes('pin')).map(item => {
          return (
            <a key={item.id} href={item.html_url} target="_blank" rel="noreferrer">
              <article className={`font-sans_english md:min-h-[384px] flex flex-col justify-between p-10 ${randomColor()}`}>
                <div>
                  <p className="uppercase font-normal tracking-normal mb-2">{item.language ? item.language : 'Javascript'}</p>
                  <h3 className="font-medium leading-9 tracking-wide text-3xl mb-8">{item.description}</h3>
                </div>
                <time className="capitalize font-base">{moment(item.created_at).format('MMM YYYY')}</time>
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default GithubContainer
