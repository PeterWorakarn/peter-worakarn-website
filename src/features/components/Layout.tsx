import dynamic from 'next/dynamic';

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/dist/client/router';
import { getUTMOutboundPath } from '../../configs';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout: React.FC = (props) => {
  const router = useRouter();
  return (
    <div id="layout">
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
          className="selection:text-white selection:bg-primary_pink 
          bg-app_dark 
          p-2 
          sm:py-8 
          w-full 
          max-w-5xl 
          mx-auto 
          min-h-screen
          ">
          {props.children}
        </motion.section>
      </AnimatePresence>
      <footer className="text-typo-minor font-sans_english container px-5 py-2 mt-10 sm:mt-10 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <p>Made with <span className="text-primary_pink">❤️</span> by <a href={getUTMOutboundPath({ path: 'https://github.com/PeterWorakarn' })} rel="noreferrer" target="_blank" className="text-white font-sans_english ml-1">Peter O.</a></p>
      </footer>
    </div>
  );
};

export default Layout;