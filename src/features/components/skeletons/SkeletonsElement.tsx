import { AnimatePresence, motion } from "framer-motion";

interface SkeletonsElementProps {
  width: string;
  height: string;
  margin?: string;
}


const SkeletonsElementVariant = {
  initialSkeleton: {
    opacity: 0,
    y: -30,
    scale: 0,
  },
  animateSkeleton: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exitSkeleton: {
    opacity: 0,
    y: -30,
    scale: 0,
  },
}
const SkeletonsElement: React.FC<SkeletonsElementProps> = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={SkeletonsElementVariant}
        initial="initialSkeleton"
        animate="animateSkeleton"
        className={`${props.width} ${props.height} ${props.margin ? props.margin : 'my-1 mr-1'} bg-skeletons animate-pulse rounded-md`} />
    </AnimatePresence>
  );
};

export default SkeletonsElement;
