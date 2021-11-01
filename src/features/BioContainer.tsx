import moment from "moment-timezone";
import { TBio } from "../constant-enum-type/Strapi";

interface BioProps {
  data: TBio;
}

const BioContainer: React.FC<BioProps> = (props) => {
  return (
    <>
      Bio {props.data.Short_name} {props.data.Tagline}
      {props.data.bio} {moment().diff(moment(props.data.Date_of_birth), 'years')}
    </>
  )
}

export default BioContainer;
