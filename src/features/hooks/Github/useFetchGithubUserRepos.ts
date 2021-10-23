import { useQuery } from 'react-query';
import { fetchGithubUserRepos } from '../../utils/api-actions';

const useFetchGithubUserRepos = (name = '') => {
  return useQuery(
    ['GithubUserRepos', name],
    () => fetchGithubUserRepos(name),
  );
};

export default useFetchGithubUserRepos;