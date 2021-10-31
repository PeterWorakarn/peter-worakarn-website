import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import SkeletonsElement from "./components/skeletons/SkeletonsElement";
import useFetchAllBio from "./hooks/Strapi/useFetchAllBio";
import useFetchAllEducation from "./hooks/Strapi/useFetchAllEducation";
import useFetchAllJob from "./hooks/Strapi/useFetchAllJob";
import useFetchCurrentJob from "./hooks/Strapi/useFetchCurrentJob";

const resumeVariants = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: {
    opacity: 1,
    y: 0,
  }
}

const ResumeContainer: React.FC = () => {
  const [isEnable, setIsEnable] = useState(false);
  setTimeout(() => {
    setIsEnable(true)
  }, 1000)
  const bioQuery = useFetchAllBio(isEnable);
  const latestJobQuery = useFetchCurrentJob(isEnable);
  const jobQuery = useFetchAllJob(isEnable);
  const educationQuery = useFetchAllEducation(isEnable);
  return (
    <article className="flex flex-col bg-opacity-80 bg-app_white backdrop-blur-md border-t-[20px] border-typo-minor print:border-none h-full max-w-3xl mx-auto p-10 sm:p-16 print:p-0 rounded-md">
      <div className="flex flex-col sm:flex-row print:flex-row gap-8 mb-12 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3 h-auto ">
          <div className="w-full font-semibold text-4xl text-typo-main">
              {bioQuery.status === 'success' && bioQuery.data ? (
                <h1>{bioQuery.data.First_name} {bioQuery.data.Last_name.substr(0, 1)}</h1>
              ) : <SkeletonsElement key="First_name" width="w-full" height="h-[40px]" />}
          </div>
          <div className="font-normal text-typo-minor capitalize">
              {latestJobQuery.status === 'success' && latestJobQuery.data ? (
                <p>{latestJobQuery.data[0].Title}</p>
              ) : <SkeletonsElement key="Title" width="w-2/3" height="h-[20px]" />}
          </div>
        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 text-typo-minor text-right h-auto flex flex-col justify-end items-start sm:items-end text-sm font-semibold">
            {bioQuery.status === 'success' && bioQuery.data ? (
              <p>{bioQuery.data.contact}</p>
            ) : <SkeletonsElement key="Contact" width="w-1/4" height="h-[20px]" />}
            {bioQuery.status === 'success' && bioQuery.data ? (
              <p>{bioQuery.data.telephone}</p>
            ) : <SkeletonsElement key="Telephone" width="w-1/4" height="h-[20px]" />}
            {bioQuery.status === 'success' && bioQuery.data ? (
              <p>{bioQuery.data.location}</p>
            ) : <SkeletonsElement key="Location" width="w-1/4" height="h-[20px]" />}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row print:flex-row gap-8 mb-8 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3">
          {jobQuery.status === 'success' && jobQuery.data ? (
            <p className="font-medium text-lg">Experience</p>
          ) : <SkeletonsElement key="experience" width="w-2/4" height="h-[20px]" />}
        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 h-auto">
          {jobQuery.status === 'success' && jobQuery.data ? (
            <>{jobQuery.data.map(each => {
              return (
                <div key={each.Company} className="mb-5 print:mb-5">
                  <h2 className="text-lg font-semibold">{each.Company}, <i className="font-normal text-indigo-500 capitalize">{each.Title}</i></h2>
                  <p className="text-sm font-medium text-typo-minor">{moment(each.Start_date).format('MMM YYYY')} - {each.Current_job ? <>Current</> : <>{each.End_date ? <>{moment(each.End_date).format('MMM YYYY')}</> : 'Current'}</>} | {each.Location}</p>
                  <div className="description_markdown prose sm:prose-sm">
                    <ReactMarkdown>
                      {each.Description}
                    </ReactMarkdown>
                  </div>
                </div>
              )
            })}</>
          ) : (
            <>
              {[1, 2, 3, 4].map(each => {
                return (
                  <div key={`${each}-experience`} className="mb-5">
                    <SkeletonsElement width="w-2/4" height="h-[20px]" />
                    <SkeletonsElement width="w-1/4" height="h-[20px]" />
                    <SkeletonsElement width="w-full" height="h-[20px]" />
                    <SkeletonsElement width="w-full" height="h-[20px]" />
                    <SkeletonsElement width="w-full" height="h-[20px]" />
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row print:flex-row gap-8 mb-8 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3">
          {educationQuery.status === 'success' && educationQuery.data ? (
            <p className="font-medium text-lg">Education</p>
          ) : <SkeletonsElement key='education' width="w-3/4" height="h-[20px]" />}

        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 h-auto">
          {educationQuery.status === 'success' && educationQuery.data ? (
            <>{educationQuery.data.map(each => {
              return (
                <div key={each.Degree} className="mb-5 print:mb-5">
                  <h2 className="text-lg font-semibold">{each.Degree}, <i className="font-normal text-indigo-500 capitalize">{each.School}</i></h2>
                  <p className="text-sm font-medium text-typo-minor">{moment(each.Start_date).format('MMM YYYY')} - {each.Current_education ? <>Current</> : <>{each.End_date ? <>{moment(each.End_date).format('MMM YYYY')}</> : 'Current'}</>} </p>
                </div>
              )
            })}</>
          ) : (
            <>
              {[1, 2].map(each => {
                return (
                  <div key={`${each}-education`} className="mb-5">
                    <SkeletonsElement width="w-3/4" height="h-[20px]" />
                    <SkeletonsElement width="w-3/4" height="h-[20px]" />
                    <SkeletonsElement width="w-2/4" height="h-[20px]" />
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 mb-8 print:hidden">
        <div className="w-1/3">
          {bioQuery.status === 'success' && bioQuery.data ? (
            <p className="font-medium text-lg">Expertise</p>
          ) : (
            <SkeletonsElement key='education' width="w-3/4" height="h-[20px]" />
          )}

        </div>
        <div className="w-2/3 h-auto grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
          {bioQuery.status === 'success' && bioQuery.data ? (
            <>
              {bioQuery.data.skill_set.map(each => {
                return <p key={each}>{each}</p>
              })}
            </>
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(each => {
                return (
                  <SkeletonsElement key={`${each}-skill_set`} width="w-full" height="h-[20px]" />
                )
              })}
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default ResumeContainer
