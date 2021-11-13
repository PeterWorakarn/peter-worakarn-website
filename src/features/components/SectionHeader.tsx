interface SectionHeaderProps {
  readonly title: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <>
      <h2 className="mb-0 text-4xl font-sans_english text-white">{props.title}</h2>
    </>
  )
}

export default SectionHeader
