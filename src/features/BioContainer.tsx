import { AnimatePresence, motion } from "framer-motion";
import moment from "moment-timezone";
import ReactMarkdown from "react-markdown";
import { TBio } from "../constant-enum-type/Strapi";

interface BioProps {
  data: TBio;
}

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  }
};

const BioContainer: React.FC<BioProps> = (props) => {
  return (
    <section className="pt-[40vh]">
      <h1 className="text-6xl tracking-wider leading-none my-5 text-white font-sans_english">
        Hi, I&apos;m <i className="not-italic custom_underline">{props.data.Short_name}</i> ({moment().diff(moment(props.data.Date_of_birth), 'years')})
      </h1>
      <p className="description_markdown leading-7 prose sm:prose-sm text-typo-minor max-w-2xl">
        <ReactMarkdown>
          {props.data.bio}
        </ReactMarkdown>
      </p>
    </section>
  )
}

export default BioContainer;
