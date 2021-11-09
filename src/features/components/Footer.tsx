import { getUTMOutboundPath } from "../../configs";

interface FooterProps {
  shortName: string;
  contact: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="text-typo-minor font-sans_english font-normal container px-5 py-2 mt-10 sm:mt-10 mx-auto flex items-center justify-center sm:flex-row flex-col">
      <p>Made with <span className="text-primary_pink">❤️</span> by <a href={getUTMOutboundPath({ path: 'https://github.com/PeterWorakarn' })} rel="noreferrer" target="_blank" className="text-white font-sans_english ml-1">{props.shortName}</a></p>
    </footer>
  )
}

export default Footer;
