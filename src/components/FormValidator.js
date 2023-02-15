export default class FormValidator {
  constructor(selectorsForms, selectorPopUpForm) {
    this._selectorsForms = selectorsForms;
    this._selectorPopUpForm = selectorPopUpForm;

    this._formElement = selectorPopUpForm;
    this._inputList = Array.from(this._formElement.querySelectorAll(selectorsForms.inputSelector));
    this._buttonElement = this._formElement.querySelector(
      this._selectorsForms.submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectorsForms.inputError);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._selectorsForms.inputErrorActive);
  };

  _hideInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectorsForms.inputError);
    this._errorElement.classList.remove(this._selectorsForms.inputErrorActive);
    this._errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._selectorsForms.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _disableButton = () => {
    this._buttonElement.classList.add(this._selectorsForms.inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _setInputListeners = () => {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._disableButton();
    });
    this._setEventListeners();
  };

  enableValidation() {
    this._setInputListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
}
