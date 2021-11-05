import useFetchDatayolkContent from "./hooks/Datayolk/useFetchDatayolkContent"
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { UseQueryResult } from "react-query"
import { TWordpressRESTAPI } from "../constant-enum-type/Wordpress"
import moment from "moment-timezone"
import { CONTENT_LENGTH_STRIP, DATAYOLK_CONTENT_LENGTH, getUTMOutboundPath, PLACEHOLDER_IMAGE, THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../configs"

const ArticleSkeleton = dynamic(import('../features/components/skeletons/ArticleSkeleton'));

const DatayolkContainer: React.FC = () => {
  const datayolkQuery: UseQueryResult<TWordpressRESTAPI, unknown> = useFetchDatayolkContent()
  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className="mb-0 text-4xl font-sans_english text-white">Latest · Datayolk · Blog</h2>
        <a target="_blank" rel="noreferrer" href={getUTMOutboundPath({ path: 'https://datayolk.net/blog' })}>Visit Datayolk ?</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {datayolkQuery.status === "loading" && (
          <>
            {Array(DATAYOLK_CONTENT_LENGTH - 1)
              .fill('')
              .map((_, index) => (
                <ArticleSkeleton key={index} />
              ))}
          </>
        )}
        {datayolkQuery.status === "success" && datayolkQuery.data && datayolkQuery.data.filter((items, idx) => idx <= DATAYOLK_CONTENT_LENGTH && items.category !== 'AppSheet').map(eachContent => {
          return (
            <a key={eachContent.id} target="_blank" rel="noreferrer" href={getUTMOutboundPath({ path: eachContent.url })} hrefLang="th" className="">
              <article className="flex flex-col gap-2">
                <div className="relative w-full lg:w-[310px] h-[180px] aspect-w-16 aspect-h-9">
                  <Image
                    placeholder='blur'
                    blurDataURL={PLACEHOLDER_IMAGE}
                    className="rounded-lg"
                    layout="fill"
                    objectFit='cover'
                    objectPosition="top center"
                    src={`${eachContent.featured_image.medium}`}
                    alt={eachContent.title}
                  // width={THUMBNAIL_WIDTH}
                  // height={THUMBNAIL_HEIGHT}
                  />
                </div>
                <div className="flex justify-start gap-5 h-5">
                  <span className="font-sans_english text-white font-medium">{eachContent.category}</span>
                  <time className="capitalize text-typo-minor font-sans_english">{moment(eachContent.date).format('MMM YYYY')}</time>
                </div>
                <h3 className="font-head_thai font-medium leading-8 tracking-wide text-3xl text-white" dangerouslySetInnerHTML={{ __html: `${eachContent.title}` }}></h3>
                {/* <p className="font-sans_thai font-light text-typo-minor" dangerouslySetInnerHTML={{ __html: `${eachContent.description.length > CONTENT_LENGTH_STRIP ? `${eachContent.description.substring(0, CONTENT_LENGTH_STRIP)}...` : eachContent.description}` }}></p> */}
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default DatayolkContainer
