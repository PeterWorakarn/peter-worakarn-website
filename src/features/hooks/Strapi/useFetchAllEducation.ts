import { useQuery } from 'react-query';
import { fetchAllEducation } from '../../utils/api-actions';

const useFetchAllEducation = () => {
  return useQuery(
    ['StrapiAllEducation'],
    () => fetchAllEducation(),
  );
};

export default useFetchAllEducation;