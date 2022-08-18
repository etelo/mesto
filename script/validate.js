const showInputError = (obj, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.inputErrorActive);
};

const hideInputError = (obj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputError);
  errorElement.classList.remove(obj.inputErrorActive);
  errorElement.textContent = "";
};

const checkInputValidity = (obj, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(obj, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(obj, formElement, inputElement);
  }
};

const toggleButtonState = (obj, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEventListeners = (obj, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(obj, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(obj, formElement, inputElement);
      toggleButtonState(obj, inputList, buttonElement);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(obj, formElement);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "button_inactive",
  inputError: "popup__input_type_error",
  inputErrorActive: "popup__input-error_active",
});
