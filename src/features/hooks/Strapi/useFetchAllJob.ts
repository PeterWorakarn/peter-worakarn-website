import { useQuery } from 'react-query';
import { fetchAllJob } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllJob = () => {
  return useQuery(
    [reactQueryKey.StrapiAllJob],
    () => fetchAllJob(),
  );
};

export default useFetchAllJob;