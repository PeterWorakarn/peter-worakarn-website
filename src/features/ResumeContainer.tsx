import { useState } from "react";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import useFetchAllBio from "./hooks/Strapi/useFetchAllBio";
import useFetchAllEducation from "./hooks/Strapi/useFetchAllEducation";
import useFetchAllJob from "./hooks/Strapi/useFetchAllJob";
import useFetchCurrentJob from "./hooks/Strapi/useFetchCurrentJob";
// import SkeletonsElement from "./components/skeletons/SkeletonsElement";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const SkeletonsElement = dynamic(import('./components/skeletons/SkeletonsElement'));

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
    <article className="flex flex-col bg-opacity-80 bg-app_white backdrop-blur-md border-t-[20px] border-primary_blue border-opacity-25 print:border-none h-full max-w-3xl mx-auto p-10 sm:p-16 print:p-0 rounded-md">
      {/* Start Header */}
      <div className="flex flex-col sm:flex-row print:flex-row gap-0 sm:gap-8 mb-12 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3 h-auto ">
          <div className="w-full font-semibold text-4xl text-typo-main">
            {bioQuery.status === 'success' && bioQuery.data ? (
              <h1 className="text-4xl font-serif whitespace-nowrap font-semibold">{bioQuery.data.First_name} {bioQuery.data.Last_name.substr(0, 1)}</h1>
            ) : <SkeletonsElement key="First_name" width="w-full" height="h-[40px]" />}
          </div>
          <div className="font-normal text-typo-minor capitalize">
            {latestJobQuery.status === 'success' && latestJobQuery.data ? (
              <p className="text-typo-main">{latestJobQuery.data[0].Title}</p>
            ) : <SkeletonsElement key="Title" width="w-2/3" height="h-[20px]" />}
          </div>
        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 text-right h-auto flex flex-col justify-end items-start sm:items-end print:items-end text-sm font-normal text-typo-minor">
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


      {/* Start Career */}
      <div className="flex flex-col sm:flex-row print:flex-row gap-2 sm:gap-8 mb-8 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3">
          {jobQuery.status === 'success' && jobQuery.data ? (
            <h2 className="font-medium text-lg">Experience</h2>
          ) : <SkeletonsElement key="experience" width="w-2/4" height="h-[20px]" />}
        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 h-auto">
          {jobQuery.status === 'success' && jobQuery.data ? (
            <>{jobQuery.data.map(each => {
              return (
                <div key={each.Company} className="mb-5 print:mb-5">
                  <h3 className="text-lg font-semibold">{each.Company}, <br className="block sm:hidden" /><i className="font-normal font-sans_english text-primary_blue not-italic capitalize">{each.Title}</i></h3>
                  <p className="text-sm font-normal text-typo-minor">{moment(each.Start_date).format('MMM YYYY')} - {each.Current_job ? <>Current</> : <>{each.End_date ? <>{moment(each.End_date).format('MMM YYYY')}</> : 'Current'}</>} | {each.Location}</p>
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

      {/* Start Education */}
      <div className="flex flex-col sm:flex-row print:flex-row gap-2 sm:gap-8 mb-8 print:mb-1">
        <div className="w-full sm:w-1/3 print:w-1/3">
          {educationQuery.status === 'success' && educationQuery.data ? (
            <h2 className="font-medium text-lg">Education</h2>
          ) : <SkeletonsElement key='education' width="w-3/4" height="h-[20px]" />}

        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 h-auto">
          {educationQuery.status === 'success' && educationQuery.data ? (
            <>{educationQuery.data.filter(i => i.Highest_education === true).map(each => {
              return (
                <div key={each.Degree} className="mb-5 print:mb-5">
                  <h2 className="text-lg font-semibold">{each.School}</h2>
                  <p className="prose sm:prose-sm text-typo-main">{each.Degree} </p>
                  <p className="text-sm font-normal text-typo-minor">{moment(each.Start_date).format('MMM YYYY')} - {each.Current_education ? <>Current</> : <>{each.End_date ? <>{moment(each.End_date).format('MMM YYYY')}</> : 'Current'}</>} </p>
                </div>
              )
            })}</>
          ) : (
            <>
              {[1].map(each => {
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

      {/* Start Expertise */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 mb-8 print:hidden">
        <div className="w-1/3">
          {bioQuery.status === 'success' && bioQuery.data ? (
            <h2 className="font-medium text-lg">Expertise</h2>
          ) : (
            <SkeletonsElement key='expertise' width="w-3/4" height="h-[20px]" />
          )}
        </div>
        <div className="w-2/3 h-auto grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
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
