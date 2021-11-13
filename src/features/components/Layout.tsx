import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/dist/client/router';
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BioState } from "../../store";
import useFetchAllBio from "../hooks/Strapi/useFetchAllBio";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  // hidden: { opacity: 0, x: -200, y: 0 },
  // enter: { opacity: 1, x: 0, y: 0 },
  // exit: { opacity: 0, x: 0, y: -100 },
}

const Footer = dynamic(import('./Footer'), { ssr: false});
const Header = dynamic(import('./Header'), { ssr: false});

const Layout: React.FC = (props) => {
  const router = useRouter();
  const bioQuery = useFetchAllBio(true);
  const setBio = useSetRecoilState(BioState)
  useEffect(() => {
    if (bioQuery.status === 'success' && bioQuery.data)
      setBio(bioQuery.data);
  }, [bioQuery]);
  return (
    <div id="layout" className="max-w-2xl lg:max-w-5xl mx-auto selection:text-white selection:bg-primary_blue">
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
          px-5
          pb-5 
          sm:py-8 
          w-full 
          min-h-screen
          ">
          {props.children}
        </motion.section>
      </AnimatePresence>
      {
        bioQuery.status === 'success' && bioQuery.data ? (
          <Footer shortName={bioQuery.data.Short_name} contact={bioQuery.data.contact} />
        ) : <>loading..</>
      }

    </div>
  );
};

export default Layout;