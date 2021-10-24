import { useQuery } from 'react-query';
import { fetchAllBio } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllBio = () => {
  return useQuery(
    [reactQueryKey.StrapiAllBio],
    () => fetchAllBio(),
  );
};

export default useFetchAllBio;