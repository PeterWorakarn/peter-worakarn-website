import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import useFetchAllBio from '../hooks/Strapi/useFetchAllBio';
import useFetchAllJob from '../hooks/Strapi/useFetchAllJob';
import useFetchAllEducation from '../hooks/Strapi/useFetchAllEducation';
import ResumePDF from './ResumePDF';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const btnClass = "fixed bottom-4 right-4 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none";

interface ResumePDFDownloadButtonProps {
  isEnable: boolean;
  onDownload?: () => void;
}

const ResumePDFDownloadButton: React.FC<ResumePDFDownloadButtonProps> = ({ isEnable, onDownload }) => {
  const bioQuery = useFetchAllBio(isEnable);
  const jobQuery = useFetchAllJob(isEnable);
  const educationQuery = useFetchAllEducation(isEnable);

  const isReady =
    bioQuery.status === 'success' && bioQuery.data &&
    jobQuery.status === 'success' && jobQuery.data &&
    educationQuery.status === 'success' && educationQuery.data;

  if (!isReady) {
    return (
      <button disabled className={`${btnClass} opacity-50 cursor-not-allowed`}>
        <DownloadIcon />
        <span className="sr-only">Preparing PDF...</span>
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={
        <ResumePDF
          bio={bioQuery.data}
          jobs={jobQuery.data}
          educations={educationQuery.data}
        />
      }
      fileName="peter-worakarn-resume.pdf"
      onClick={onDownload}
    >
      {({ loading }) => (
        <button className={`${btnClass} ${loading ? 'opacity-50' : ''}`} disabled={loading}>
          <DownloadIcon />
          <span className="sr-only">{loading ? 'Generating PDF...' : 'Download PDF'}</span>
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default ResumePDFDownloadButton;
