import { AnimatePresence, motion } from "framer-motion";

interface SkeletonsElementProps {
  width: string;
  height: string;
}


const SkeletonsElementVariant = {
  initial: {
    opacity: 0,
    y: -30,
    scale: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}
const SkeletonsElement: React.FC<SkeletonsElementProps> = (props) => {
  return (
    <motion.div variants={SkeletonsElementVariant} initial="initial" animate="animate" exit="exit" className={`${props.width} ${props.height} my-1 mr-1 bg-skeletons animate-pulse rounded-md`} />
  );
};

export default SkeletonsElement;
