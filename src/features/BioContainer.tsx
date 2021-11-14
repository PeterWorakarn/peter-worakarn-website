import { AnimatePresence, motion } from "framer-motion";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import { TBio } from "../constant-enum-type/Strapi";
import HeroImage from '../../public/3D-Hero-minify.webp';
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";

interface BioProps {
  data: TBio;
}

const BioContainer: React.FC<BioProps> = (props) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastY;

      setShouldAnimate(isScrollingUp);
      setLastY(yPos);
    }

    window.addEventListener('scroll', handleScroll, false)
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastY])

  return (
    <section className="flex flex-col justify-end lg:justify-around h-[80vh] sm:h-auto lg:h-[70vh] 2xl:h-auto">
      <Head>
        <link
          rel="preload"
          href={`${HeroImage}`}
          as="image"
        />
      </Head>
      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div
          initial={{ rotate: 15, opacity: 0 }}
          animate={{ rotate: !shouldAnimate ? 15 : 0, opacity: 1 }}
          exit={{opacity:0}}
          transition={{ rotate: { duration: 0.2 } }}
          className="hero-image-container mx-auto z-0 lg:absolute 2xl:hidden top-10 sm:-right-1 md:right-0 ">
          <Image
            className="selection:bg-primary_blue hero-image"
            objectFit='contain'
            width={600}
            height={600}
            priority
            src={HeroImage}
            alt="Hero image"
          />
        </motion.div>
      </AnimatePresence>
      <div className="z-10 mx-auto lg:mx-0">
        <h1 className="text-4xl sm:text-6xl tracking-wider leading-tight sm:leading-none my-5 text-white font-sans_english">
          Hi, I&apos;m <i className="not-italic custom_underline">{props.data.Short_name}</i> ({moment().diff(moment(props.data.Date_of_birth), 'years')})
        </h1>
        <div className="description_markdown leading-7 prose sm:prose-sm text-typo-minor max-w-[540px]">
          <ReactMarkdown>
            {props.data.bio}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default BioContainer;
