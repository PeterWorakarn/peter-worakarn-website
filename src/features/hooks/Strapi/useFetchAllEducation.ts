import { useQuery } from 'react-query';
import { fetchAllEducation } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchAllEducation = (isEnable: boolean) => {
  return useQuery(
    [reactQueryKey.StrapiAllEducation],
    () => fetchAllEducation(),{
      enabled: isEnable,
    }
  );
};

export default useFetchAllEducation;