import { useQuery } from 'react-query';
import { fetchCurrentJob } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchCurrentJob = (isEnable:boolean) => {
  return useQuery(
    [reactQueryKey.StrapiCurrentJob],
    () => fetchCurrentJob(),{
      enabled: isEnable,
    }
  );
};

export default useFetchCurrentJob;