import { useQuery } from 'react-query';
import { fetchAllEducation } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllEducation = () => {
  return useQuery(
    [reactQueryKey.StrapiAllEducation],
    () => fetchAllEducation(),
  );
};

export default useFetchAllEducation;