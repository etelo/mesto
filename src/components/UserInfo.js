export default class UserInfo {
  constructor({ nameAuthor, jobAuthor }) {
    this._nameAuthor = nameAuthor;
    this._jobAuthor = jobAuthor;
  }

  getUserInfo() {
    this._userInfoValues = {
      nameAuthor: this._nameAuthor.textContent,
      jobAuthor: this._jobAuthor.textContent,
    };
    return this._userInfoValues;
  }

  setUserInfo(newData) {
    this._nameAuthor.textContent = newData.name;
    this._jobAuthor.textContent = newData.job;

  }
}