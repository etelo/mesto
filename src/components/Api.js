export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    const url = `${this._baseUrl}/users/me`;
    return this._request(url, { headers: this._headers });
  }

  editProfile(data) {
    const url = `${this._baseUrl}/users/me`;
    return this._request(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  addCard(data) {
    const url = `${this._baseUrl}/cards`;
    return this._request(url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  editAvatar(data) {
    const url = `${this._baseUrl}/users/me/avatar`;
    return this._request(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;
    return this._request(url, { headers: this._headers });
  }

  deleteCard(id) {
    const url = `${this._baseUrl}/cards/${id}`;
    return this._request(url, { method: "DELETE", headers: this._headers });
  }

  putLike(id) {
    const url = `${this._baseUrl}/cards/${id}/likes`;
    return this._request(url, { method: "PUT", headers: this._headers });
  }

  deleteLike(id) {
    const url = `${this._baseUrl}/cards/${id}/likes`;
    return this._request(url, { method: "DELETE", headers: this._headers });
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse);
  }
}
