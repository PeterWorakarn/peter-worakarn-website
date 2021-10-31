import { useQuery } from 'react-query';
import { fetchAllJob } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllJob = (isEnable: boolean) => {
  return useQuery(
    [reactQueryKey.StrapiAllJob],
    () => fetchAllJob(),{
      enabled: isEnable,
    }
  );
};

export default useFetchAllJob;