import Link from "next/link"

interface BackProps {
  readonly path: string;
};

const Back: React.FC<BackProps> = (props) => {
  return (
    <>
      <Link href={props.path}>
        <a className="flex gap-1 items-center justify-start mb-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <p className="text-xs">Back</p>
        </a>
      </Link>
    </>
  )
}

export default Back
