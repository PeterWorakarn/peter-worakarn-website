import { useQuery } from 'react-query';
import { fetchLatestDatayolkContent } from '../../utils/api-actions';

const useFetchDatayolkContent = () => {
  return useQuery(
    ['DatayolkContent'],
    () => fetchLatestDatayolkContent(),
  );
};

export default useFetchDatayolkContent;