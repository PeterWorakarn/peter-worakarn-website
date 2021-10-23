import { useQuery } from 'react-query';
import { fetchHighestEducation } from '../../utils/api-actions';

const useFetchHighestEducation = () => {
  return useQuery(
    ['StrapiHighestEducation'],
    () => fetchHighestEducation(),
  );
};

export default useFetchHighestEducation;