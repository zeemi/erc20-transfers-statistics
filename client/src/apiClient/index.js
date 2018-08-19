export default class ApiClient {
  _fetch = (endpoint) => {
    return fetch(`/api${endpoint}`).then((response) => { // .json()?
      if (response.status < 400) {
        return response.json()
      }

      let data = null;
      try {
        data = JSON.parse(response.text());
      }
      catch (exp) {}
      return Promise.reject({status: response.status, message: response.statusText, data});
    });
  };

  fetchTokenStatistics(token, limit) {
    return this._fetch(`/statistics/${token}?limit=${limit}`)
  }
}