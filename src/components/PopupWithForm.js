import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._formContainer = this._popup.querySelector(".popup__form");
    this._inputsList = this._formContainer.querySelectorAll(".popup__input");
    this._submitForm = submitForm;
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
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
}
