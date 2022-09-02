
export enum TEnumCookieCategories {
  NECESSARY = 'necessary',
  ANALYTICS = 'analytics',
  TARGETING = 'targeting',
}

export type TCookieData = {
  categories: TEnumCookieCategories[];
  consent_date: Date;
  consent_uuid: string;
  last_consent_update: Date;
  revision: number;
}