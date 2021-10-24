interface SkeletonsElementProps {
  width: string;
  height: string;
}

const SkeletonsElement: React.FC<SkeletonsElementProps> = (props) => {
  return (
    <div className={`${props.width} ${props.height} my-1 mr-1 bg-skeletons animate-pulse rounded-md`}>
    </div>
  );
};

export default SkeletonsElement;
