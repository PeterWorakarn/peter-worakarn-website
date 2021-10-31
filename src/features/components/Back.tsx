import Link from "next/link"

interface BackProps {
  readonly path: string;
};

const Back: React.FC<BackProps> = (props) => {
  return (
    <>
      <div className="fixed bottom-4 right-4 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        <Link href={props.path}>
          <a>
            <span>Back</span>
          </a>
        </Link>
      </div>
    </>
  )
}

export default Back
