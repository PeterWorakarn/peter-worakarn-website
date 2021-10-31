import { useQuery } from 'react-query';
import { fetchAllBio } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllBio = (isEnable: boolean) => {
  return useQuery(
    [reactQueryKey.StrapiAllBio],
    () => fetchAllBio(), {
      enabled: isEnable,
    }
  );
};

export default useFetchAllBio;