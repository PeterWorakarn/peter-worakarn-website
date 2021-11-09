import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/dist/client/router';
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BioState } from "../../store";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Footer = dynamic(import('./Footer'));
const Header = dynamic(import('./Header'));

const Layout: React.FC = (props) => {
  const router = useRouter();
  const bio = useRecoilValue(BioState)
  return (
    <div id="layout" className="max-w-5xl mx-auto selection:text-white selection:bg-primary_blue">
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.section
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'tween' }}
          key={router.pathname}
          className=" 
          bg-app_dark 
          p-5 
          sm:py-8 
          w-full 
          min-h-screen
          ">
          {props.children}
        </motion.section>
      </AnimatePresence>
      <Footer shortName={bio.Short_name} contact={bio.contact} />
    </div>
  );
};

export default Layout;