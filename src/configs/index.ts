export const getPeterDatayolkAssetPath = (param: { path: string }): string => {
  return `https://peter.datayolk.net/${param.path}`;
};

export const getUTMOutboundPath = (param: {path:string}): string => {
  return `${param.path}?utm_campaign=personal-website&utm_medium=referal&utm_source=personal-website`;
}