export type TCareer = {
  "id": number;
  "Current_job": boolean;
  "Title": string;
  "Company": string;
  "Company_link": string;
  "Description": string;
  "Location": string;
  "Start_date": string;
  "End_date": string | null,
  "Company_logo": {
    "formats": {
      "thumbnail": { "url": string },
      "medium": { "url": string },
      "small": { "url": string },
    }
  },
}[]

export type TEducation = {
  "id": number;
  "School": string,
  "Degree": string,
  "Current_education": boolean,
  "Highest_education": boolean,
  "Field_of_study": string,
  "Start_date": string,
  "End_date": string | null,
  "Description": string,
  "published_at": string,
  "created_at": string,
  "updated_at": string,
  "School_logo": {
    "format": {
      "thumbnail": { "url": string },
      "medium": { "url": string },
      "small": { "url": string },
    }
  },
}[]
