export type TStrapi = {
  "id": number;
  "published_at": string;
  "created_at": string;
  "updated_at": string;
};

export type TStrapiImageFormat = {
  "name": string;
  "alternativeText"?: string;
  "formats": {
    "small": {
      "name": string;
      "width": number;
      "height": number;
      "url": string;
    },
    "thumbnail": {
      "name": string;
      "width": number;
      "height": number;
      "url": string;
    },
    "medium": {
      "name": string;
      "width": number;
      "height": number;
      "url": string;
    },
    "large": {
      "name": string;
      "width": number;
      "height": number;
      "url": string;
    },
  }
};

export type TBio = TStrapi & {
  "Short_name": string;
  "Date_of_birth": string;
  "First_name": string;
  "Last_name": string;
  "contact": string;
  "telephone": string;
  "location": string;
  "Tagline": string;
  "blog": string | null;
  "bio": string;
  "avatar": TStrapiImageFormat;
  "skill_set": string[];
};

export type TCareer = TStrapi & {
  "Current_job": boolean;
  "Title": string;
  "Company": string;
  "Company_link": string;
  "Description": string;
  "Location": string;
  "Start_date": string;
  "End_date": string | null;
  "Company_logo": TStrapiImageFormat;
};

export type TEducation = TStrapi & {
  "School": string;
  "Degree": string;
  "Current_education": boolean;
  "Highest_education": boolean;
  "Field_of_study": string;
  "Start_date": string;
  "End_date": string | null;
  "Description": string;
  "published_at": string;
  "created_at": string;
  "updated_at": string;
  "School_logo": TStrapiImageFormat;
};
