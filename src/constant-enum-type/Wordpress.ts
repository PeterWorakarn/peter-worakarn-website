export type TWordpressRESTAPI = {
  id: number;
  author: string;
  title: string;
  description: string;
  url: string;
  date: string;
  category: string;
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