import { useQuery } from 'react-query';
import { fetchHighestEducation } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchHighestEducation = () => {
  return useQuery(
    [reactQueryKey.StrapiHighestEducation],
    () => fetchHighestEducation(),
  );
};

export default useFetchHighestEducation;