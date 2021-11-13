export type TGithubUserInfo = {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
}

export type TGithubUserRepos = {
  id: number;
  name: string;
  full_name: string; // path param
  description:string;
  html_url:string;
  homepage?: string;
  topics: string[];
  language?: string;
  created_at: string;
}[];

export type TGithubReposReadMe = {
  content: string;
}

export interface GithubUserInfoErrorResponse {
  'message': "Not Found", 
  'documentation_url': 'https://docs.github.com/rest'
}
