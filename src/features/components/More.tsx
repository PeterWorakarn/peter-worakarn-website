interface MoreProps {
  readonly path: string;
};

const More: React.FC<MoreProps> = (props) => {
  return (
    <>
      <a href={props.path} target="_blank" rel="noreferrer" className="font-sans_english flex gap-1 items-center justify-start mb-3 text-typo-minor">
        <p className="text-base font-normal tracking-wider">All</p>
      </a>
    </>
  )
}

export default More
