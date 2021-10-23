/* eslint-disable import/no-anonymous-default-export */
interface IRes {
  ok: any;
  json: any;
  status: any;
}

const processFetch = (res: IRes) => {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json().then((resJson: any, body: any) => ({ data: resJson }));
};

export default {
  get: (url: string) => (
    fetch(url, {
      method: 'GET',
      // credentials: 'include', // remove credential
    }).then(processFetch)
  ),
  post: (url: string, body = {}) => (
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
  delete: (url: string, body = {}) => (
    fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
  put: (url: string, body = {}) => (
    fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(processFetch)
  ),
};