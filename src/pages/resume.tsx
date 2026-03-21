import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import TagManager from 'react-gtm-module';

const Back = dynamic(import('../features/components/Back'), { ssr: false });
const ResumeContainer = dynamic(import('../features/ResumeContainer'), { ssr: false });
const ResumePDFDownloadButton = dynamic(import('../features/pdf/ResumePDFDownloadButton'), { ssr: false });

const onDownloadTrack = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'download_pdf',
      label: 'resume',
      position: 'floating action button',
    }
  })
}

const ResumePage: NextPage = () => {
  const [isEnable, setIsEnable] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsEnable(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-app_dark h-full print:h-auto print:p-0 max-w-3xl mx-auto">
      <div className="print:hidden text-typo-minor"><Back path="/" /></div>
      <div className="relative overflow-hidden print:overflow-auto  bg-app_white rounded-md">
        <div className="animate-pulse absolute top-10 left-28 w-40 h-40 sphere sphere-red print:hidden" />
        <div className="animate-pulse absolute -top-20 left-20 w-52 h-52 sphere sphere-pink print:hidden" />
        <div className="animate-pulse absolute top-0 -left-20 w-60 h-60 sphere sphere-blue print:hidden" />
        <ResumeContainer isEnable={isEnable} />
      </div>
      <div className="print:hidden">
        <ResumePDFDownloadButton isEnable={isEnable} onDownload={onDownloadTrack} />
      </div>
    </section>
  )
}

export default ResumePage
