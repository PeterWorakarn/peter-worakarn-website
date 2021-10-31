import api from "./api";
import { GithubUserInfoErrorResponse, TGithubReposReadMe, TGithubUserInfo, TGithubUserRepos } from "../../constant-enum-type/Github";
import { TBio, TCareer, TEducation } from "../../constant-enum-type/Strapi";
import { TWordpressRESTAPI } from "../../constant-enum-type/Wordpress";

// Github api
export function fetchGithubUserInfo(name: string): Promise<TGithubUserInfo> {
  return api.get(`https://api.github.com/users/${name}`).then((data) => data.data);
}
export function fetchGithubUserRepos(name: string): Promise<TGithubUserRepos> {
  return api.get(`https://api.github.com/users/${name}/repos`).then((data) => data.data);
}
export function fetchGithubReposReadMe(name: string, project_name: string): Promise<TGithubReposReadMe> {
  return api.get(`https://raw.githubusercontent.com/${name}/${project_name}/master/README.md`);
}
// export function fetchGithubReposReadMe(name: string, project_name: string): Promise<TGithubReposReadMe> {
//   return api.get(`https://api.github.com/repos/${name}/${project_name}/README`).then((data) => data.data);
// }

// Strapi api
export function fetchCurrentJob(): Promise<TCareer[]> {
  return api.get('https://peter.datayolk.net/careers?Current_job=true&_limit=1').then((data) => data.data);
}
export function fetchAllJob(): Promise<TCareer[]> {
  return api.get('https://peter.datayolk.net/careers?_sort=Start_date:DESC&_limit=4').then((data) => data.data);
}
export function fetchAllBio(): Promise<TBio> {
  return api.get('https://peter.datayolk.net/peter-bio').then((data) => data.data);
}
export function fetchHighestEducation(): Promise<TEducation[]> {
  return api.get('https://peter.datayolk.net/educations?Highest_education=true&_limit=1').then((data) => data.data);
}
export function fetchAllEducation(): Promise<TEducation[]> {
  return api.get('https://peter.datayolk.net/educations?_sort=Start_date:DESC&_limit=4').then((data) => data.data);
}

// Datayolk api
export function fetchLatestDatayolkContent(): Promise<TWordpressRESTAPI> {
  return api.get('https://datayolk.net/wp-json/datayolk/v1/posts').then((data) => data.data);
};