import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._formContainer = this._popup.querySelector(".popup__form");
    this._inputsList = this._formContainer.querySelectorAll(".popup__input");
    this._submitButton = this._popup.querySelector(".popup__button-submit");
    this._submitBtnText = this._submitButton.textContent;
    this._handleFormSubmit = handleFormSubmit;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // не понимаю как это применить
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._formValues = {};
    this._inputsList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._formContainer.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._formContainer.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  renderLoading(isLoading, loadingText = "Сохранение...") {
    if (isLoading) {
      // this._submitButton.textContent = "Сохранение...";
      this._submitButton.textContent = loadingText;
    } else {
      // this._submitButton.textContent = "Сохранение";
      this._submitButton.textContent = this._submitBtnText;
    }
  }
}
