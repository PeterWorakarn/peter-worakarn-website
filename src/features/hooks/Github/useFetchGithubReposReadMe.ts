import { useQuery } from 'react-query';
import { fetchGithubReposReadMe } from '../../utils/api-actions';

const useFetchGithubReposReadMe = (name = '', project_name = '') => {
  return useQuery(
    ['GithubReposReadMe', name, project_name],
    () => fetchGithubReposReadMe(name, project_name),
  );
};

export default useFetchGithubReposReadMe;