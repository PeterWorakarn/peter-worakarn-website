import { useQuery } from 'react-query';
import { fetchAllJob } from '../../utils/api-actions';

const useFetchAllJob = () => {
  return useQuery(
    ['StrapiAllJob'],
    () => fetchAllJob(),
  );
};

export default useFetchAllJob;