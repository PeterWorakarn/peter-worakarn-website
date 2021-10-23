import { useQuery } from 'react-query';
import { fetchCurrentJob } from '../../utils/api-actions';

const useFetchCurrentJob = () => {
  return useQuery(
    ['StrapiCurrentJob'],
    () => fetchCurrentJob(),
  );
};

export default useFetchCurrentJob;