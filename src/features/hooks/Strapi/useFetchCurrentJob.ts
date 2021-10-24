import { useQuery } from 'react-query';
import { fetchCurrentJob } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchCurrentJob = () => {
  return useQuery(
    [reactQueryKey.StrapiCurrentJob],
    () => fetchCurrentJob(),
  );
};

export default useFetchCurrentJob;