import { useRecoilValue } from "recoil";
import { getUTMOutboundPath } from "../../configs";
import { BioState } from "../../store";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

interface FooterProps {
  shortName: string;
  contact: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  const bio = useRecoilValue(BioState);
  return (
    <footer className="block my-10 px-5 print:hidden">
      <hr className="h-0.5 w-8 border-none bg-typo-minor text-typo-minor mb-5" />
      <div className="text-typo-minor font-sans_english font-normal container py-2 mx-auto flex items-center justify-between flex-row">
        <p className="text-lg">{bio.Short_name}</p>

        <div className="flex gap-2 items-center justify-center">
          <a className="footer__linkedin" href={`${bio.linkedin}`} target="_blank" rel="noreferrer">
            <BsLinkedin className="w-5 h-5" />
          </a>
          <a className="footer__github" href={`${bio.github}`} target="_blank" rel="noreferrer">
            <BsGithub className="w-5 h-5" />
          </a>
          <a className="footer__email" href={`mailto:${bio.contact}`} target="_blank" rel="noreferrer">
            <MdAlternateEmail className="w-6 h-6" />
          </a>
        </div>
        {/* <p>Made with <span className="text-primary_pink">❤️</span> by <a href={getUTMOutboundPath({ path: 'https://github.com/PeterWorakarn' })} rel="noreferrer" target="_blank" className="text-white font-sans_english ml-1">{props.shortName}</a></p> */}
      </div>
    </footer>
  )
}

export default Footer;
