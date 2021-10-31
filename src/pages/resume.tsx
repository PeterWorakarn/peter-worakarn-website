import { AnimatePresence } from 'framer-motion'
import type { NextPage } from 'next'
import FAB from '../features/components/FAB'
import ResumeContainer from '../features/ResumeContainer'

const ResumePage: NextPage = () => {
  return (
    <section className="p-2 sm:p-8 bg-app_dark h-full print:p-0">
      {/* TODO: Glassy layer */}
      <div className="relative max-w-3xl mx-auto bg-app_white rounded-md">
        <div className="absolute top-20 left-0 w-40 h-40 rounded-full bg-red-500" />
        <div className="absolute top-0 left-20 w-52 h-52 rounded-full bg-blue-500" />
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-pink-500" />
        <ResumeContainer />
      </div>
      <div className="print:hidden">
        <FAB
          text="print"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
          action={() => window.print()} />
      </div>
    </section>
  )
}

export default ResumePage
