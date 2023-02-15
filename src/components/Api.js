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
    return fetch(url, { headers: this._headers }).then(this._handleResponse);
  }

  editProfile(data) {
    const url = `${this._baseUrl}/users/me`;
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleResponse);
  }

  addCard(data) {
    const url = `${this._baseUrl}/cards`;
    return fetch(url, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }

  editAvatar(data) {
    const url = `${this._baseUrl}/users/me/avatar`;
    return fetch(url, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleResponse);
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;
    return fetch(url, { headers: this._headers }).then(this._handleResponse);
  }

  deleteCard(id) {
    const url = `${this._baseUrl}/cards/${id}`;
    return fetch(url, { method: "DELETE", headers: this._headers }).then(this._handleResponse);
  }

  putLike(id) {
    const url = `${this._baseUrl}/cards/${id}/likes`;
    return fetch(url, { method: "PUT", headers: this._headers }).then(this._handleResponse);
  }

  deleteLike(id) {
    const url = `${this._baseUrl}/cards/${id}/likes`;
    return fetch(url, { method: "DELETE", headers: this._headers }).then(this._handleResponse);
  }
}
