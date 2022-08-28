import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import TagManager from 'react-gtm-module';

const Back = dynamic(import('../features/components/Back'), { ssr: false });
const FAB = dynamic(import('../features/components/FAB'), { ssr: false });
const ResumeContainer = dynamic(import('../features/ResumeContainer'), { ssr: false });

const onPrintTrack = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'click',
      action: 'print'
    }
  })
}

const ResumePage: NextPage = () => {
  return (
    <section className="bg-app_dark h-full print:p-0 max-w-3xl mx-auto">
      <div className="print:hidden text-typo-minor"><Back path="/" /></div>
      <div className="relative overflow-hidden  bg-app_white rounded-md">
        <div className="animate-pulse absolute top-10 left-28 w-40 h-40 sphere sphere-red" />
        <div className="animate-pulse absolute -top-20 left-20 w-52 h-52 sphere sphere-pink" />
        <div className="animate-pulse absolute top-0 -left-20 w-60 h-60 sphere sphere-blue" />
        <ResumeContainer />
      </div>
      <div className="print:hidden">
        <FAB
          text="print"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>}
          action={() => {
            onPrintTrack();
            window.print();
            return null;
          }} />
      </div>
    </section>
  )
}

export default ResumePage
