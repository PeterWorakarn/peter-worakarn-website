interface FABProps {
  readonly text: string;
  readonly icon?: JSX.Element;
  readonly action: () => void;
};

const FAB: React.FC<FABProps> = (props) => {
  return (
    <>
      <button type="button" onClick={props.action} className="fixed bottom-4 right-4 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
        {props.icon}
        <span className="sr-only">{props.text}</span>
      </button>
    </>
  )
}

export default FAB
