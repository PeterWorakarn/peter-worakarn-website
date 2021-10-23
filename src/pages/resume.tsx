import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

const ResumePage: NextPage = () => {
  const router = useRouter()
  return (
    <section className="p-5 bg-app_dark h-full print:p-0">
      <button className="print:hidden" type="button" onClick={() => window.print()}>print</button>
      {/* TODO Glassy layer */}
      <article className="flex flex-col bg-app_white backdrop-blur-md border-t-[20px] border-typo-minor h-full max-w-3xl mx-auto p-20 print:p-0">
        <div className="flex gap-8 mb-12">
          <div className="w-1/3 h-auto ">
            <h1 className="font-semibold text-4xl text-typo-main">Aric Schroeder</h1>
            <p className="font-normal text-typo-minor">Central Paradigm Analyst</p>
          </div>
          <div className="w-2/3 text-typo-minor h-auto flex flex-col justify-end text-sm font-semibold">
            <p>sss.com</p>
            <p>sss@email.com</p>
            <p>312-621-5560</p>
            <p>South Georgia and the South Sandwich Islands</p>
          </div>
        </div>

        <div className="flex gap-8 mb-8">
          <div className="w-1/3">
            <p className="font-medium text-lg">Experience</p>
          </div>
          <div className="w-2/3 h-auto">
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Kautzer, <i className="font-normal text-indigo-500">Lead Quality Designer</i></h2>
              <p className="text-sm font-medium text-typo-minor">1 Sunday 2021 - Current</p>
              <p className="text-sm ">
                Sit occaecati et sint doloribus est dicta maxime voluptates. Cupiditate temporibus deleniti. Consectetur et temporibus illo vitae minus id. Quia voluptatem recusandae ea voluptas ullam hic. Enim velit vitae laudantium quasi repellat laborum hic.
                Commodi eius illum est quo laudantium.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold">Kautzer, <i className="font-normal text-indigo-500">Lead Quality Designer</i></h2>
              <p className="text-sm font-medium text-typo-minor">1 Sunday 2021 - Current</p>
              <p className="text-sm ">
                Sit occaecati et sint doloribus est dicta maxime voluptates. Cupiditate temporibus deleniti. Consectetur et temporibus illo vitae minus id. Quia voluptatem recusandae ea voluptas ullam hic. Enim velit vitae laudantium quasi repellat laborum hic.
                Commodi eius illum est quo laudantium.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ResumePage
