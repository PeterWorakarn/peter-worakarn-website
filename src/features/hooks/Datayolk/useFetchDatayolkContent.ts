import { useQuery } from 'react-query';
import { fetchLatestDatayolkContent } from '../../utils/api-actions';
import { reactQueryKey } from '../reactQueryKey';

const useFetchDatayolkContent = () => {
  return useQuery(
    [reactQueryKey.DatayolkContent],
    () => fetchLatestDatayolkContent(),
  );
};

export default useFetchDatayolkContent;