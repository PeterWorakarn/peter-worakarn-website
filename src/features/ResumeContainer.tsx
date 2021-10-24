import ReactMarkdown from "react-markdown";
import SkeletonsElement from "./components/skeletons/SkeletonsElement";
import useFetchAllBio from "./hooks/Strapi/useFetchAllBio";
import useFetchAllEducation from "./hooks/Strapi/useFetchAllEducation";
import useFetchAllJob from "./hooks/Strapi/useFetchAllJob";
import useFetchCurrentJob from "./hooks/Strapi/useFetchCurrentJob";

const ResumeContainer: React.FC = () => {
  const bioQuery = useFetchAllBio();
  const latestJobQuery = useFetchCurrentJob();
  const jobQuery = useFetchAllJob();
  const educationQuery = useFetchAllEducation();
  return (
    <article className="flex flex-col bg-app_white backdrop-blur-md border-t-[20px] border-typo-minor print:border-none h-full max-w-3xl mx-auto p-20 print:p-0">
      <div className="flex gap-8 mb-12">
        <div className="w-1/3 h-auto ">
          <div className="font-semibold text-4xl text-typo-main">
            {bioQuery.status === 'success' && bioQuery.data ? (
              <h1>{bioQuery.data.First_name} {bioQuery.data.Last_name.substr(0, 1)}</h1>
            ) : <SkeletonsElement width="w-[192px]" height="h-[40px]" />}
          </div>
          <div className="font-normal text-typo-minor capitalize">
            {latestJobQuery.status === 'success' && latestJobQuery.data ? (
              <p>{latestJobQuery.data[0].Title}</p>
            ) : <SkeletonsElement width="w-[130px]" height="h-[20px]" />}
          </div>
        </div>
        <div className="w-2/3 text-typo-minor h-auto flex flex-col justify-end text-sm font-semibold">
          {bioQuery.status === 'success' && bioQuery.data && bioQuery.data.blog ? (
            <p>{bioQuery.data.blog}</p>
          ) : <SkeletonsElement width="w-[110px]" height="h-[20px]" />}
          {bioQuery.status === 'success' && bioQuery.data ? (
            <p>{bioQuery.data.contact}</p>
          ) : <SkeletonsElement width="w-[150px]" height="h-[20px]" />}
          {bioQuery.status === 'success' && bioQuery.data ? (
            <p>{bioQuery.data.telephone}</p>
          ) : <SkeletonsElement width="w-[90px]" height="h-[20px]" />}
          {bioQuery.status === 'success' && bioQuery.data ? (
            <p>{bioQuery.data.location}</p>
          ) : <SkeletonsElement width="w-[120px]" height="h-[20px]" />}
        </div>
      </div>

      <div className="flex gap-8 mb-8">
        <div className="w-1/3">
          <p className="font-medium text-lg">Experience</p>
        </div>
        <div className="w-2/3 h-auto">
          {jobQuery.status === 'success' && jobQuery.data && (
            <>{jobQuery.data.map(each => {
              return (
                <div key={each.Company} className="mb-5">
                  <h2 className="text-lg font-semibold">{each.Company}, <i className="font-normal text-indigo-500 capitalize">{each.Title}</i></h2>
                  <p className="text-sm font-medium text-typo-minor">1 Sunday 2021 - Current | {each.Location}</p>
                  <p className="text-sm description_markdown">
                    <ReactMarkdown>
                      {each.Description}
                    </ReactMarkdown>
                  </p>
                </div>
              )
            })}</>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row print:flex-row gap-8 mb-8">
        <div className="w-full sm:w-1/3 print:w-1/3">
          <p className="font-medium text-lg">Education</p>
        </div>
        <div className="w-full sm:w-2/3 print:w-2/3 h-auto">
          {educationQuery.status === 'success' && educationQuery.data && (
            <>{educationQuery.data.map(each => {
              return (
                <div key={each.Degree} className="mb-5">
                  <h2 className="text-lg font-semibold">{each.Degree}, <i className="font-normal text-indigo-500 capitalize">{each.School}</i></h2>
                  <p className="text-sm font-medium text-typo-minor">1 Sunday 2021 - Current</p>
                  <p className="text-sm description_markdown">
                    <ReactMarkdown>
                      {each.Description}
                    </ReactMarkdown>
                  </p>
                </div>
              )
            })}</>
          )}
        </div>
      </div>

      <div className="flex gap-8 mb-8">
        <div className="w-1/3">
          <p className="font-medium text-lg">Expertise</p>
        </div>
        <div className="w-2/3 h-auto grid grid-cols-4 gap-2 text-left">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Python</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Python</p>
        </div>
      </div>


    </article>
  )
}

export default ResumeContainer
