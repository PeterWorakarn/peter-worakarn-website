export type TWordpressRESTAPI = {
  id: number;
  author: string;
  title: string;
  description: string;
  url: string;
  categories: string;
  tags: {
    name: string;
  }[];
  featured_image: {
    thumbnail: string,
    medium: string,
    large: string,
  };
  pageview: number;
}[]