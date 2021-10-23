import { useQuery } from 'react-query';
import { fetchGithubUserInfo } from '../../utils/api-actions';

const useFetchGithubUserInfo = (name = '') => {
  return useQuery(
    ['GithubUserInfo', name],
    () => fetchGithubUserInfo(name),
  );
};

export default useFetchGithubUserInfo;