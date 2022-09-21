import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const places = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const selectors = {
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  profileEdit: ".profile__edit-button",
  profileAdd: ".profile__add-button",

  list: ".elements__list",
  template: ".template",

  element: ".element",
  elementTitle: ".element__title",
  elementImage: ".element__image",
  elementDelete: ".element__delete",
  elementLike: ".element__like",
  elementLikeActive: "element__like_active",

  popup: ".popup",
  popupOpened: "popup_opened",
  popupOpenedclass: ".popup_opened",

  popupButtonClose: "popup__close-btn",

  popupEdit: ".popup_type_edit-profile",
  popupEditForm: ".popup__form",
  popupEditProfileForm: ".popup__form_edit-profile",
  popupEditButtonClose: ".popup__close-btn",
  popupEditInputName: ".popup__input-name",
  popupEditInputJob: ".popup__input-job",

  popupAdd: ".popup_type_add-card",
  popupAddForm: ".popup__form_add-card",
  popupAddClosed: ".popup__close-btn",
  popupAddSubmit: ".popup__button-submit",
  popupAddInputPlace: ".popup__input-place",
  popupAddInputPicture: ".popup__input-picture",

  popupImage: ".popup_type_image",
  popupImageClosed: ".popup__image-closed",
  popupImageImg: ".popup__image-img",
  popupImageTxt: ".popup__image-txt",
};

const selectorsForms = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "button_inactive",
  inputError: "popup__input_type_error",
  inputErrorActive: "popup__input-error_active",
};

const profileTitle = document.querySelector(selectors.profileTitle);
const profileSubtitle = document.querySelector(selectors.profileSubtitle);
const profileEdit = document.querySelector(selectors.profileEdit);
const profileAdd = document.querySelector(selectors.profileAdd);

const list = document.querySelector(selectors.list);
const template = document
  .querySelector(selectors.template)
  .content.querySelector(selectors.element);

const popupEdit = document.querySelector(selectors.popupEdit);
const popupEditForm = popupEdit.querySelector(selectors.popupEditForm);
const popupEditButtonClose = popupEdit.querySelector(
  selectors.popupEditButtonClose
);
const popupEditInputName = popupEdit.querySelector(
  selectors.popupEditInputName
);
const popupEditInputJob = popupEdit.querySelector(selectors.popupEditInputJob);

const popupAdd = document.querySelector(selectors.popupAdd);
const popupAddForm = popupAdd.querySelector(selectors.popupAddForm);
const popupAddClosed = popupAdd.querySelector(selectors.popupAddClosed);
const popupAddSubmit = popupAdd.querySelector(selectors.popupAddSubmit);
const popupAddInputPlace = popupAdd.querySelector(selectors.popupAddInputPlace);
const popupAddInputPicture = popupAdd.querySelector(
  selectors.popupAddInputPicture
);

const popupImage = document.querySelector(selectors.popupImage);
const popupImageClosed = popupImage.querySelector(selectors.popupImageClosed);
const popupImageImg = popupImage.querySelector(selectors.popupImageImg);
const popupImageTxt = popupImage.querySelector(selectors.popupImageTxt);

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");
    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(selectorsForms);

const handleClickImage = (name, link) => {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageTxt.textContent = name;
  openPopup(popupImage);
};

function createCard(item) {
  const card = new Card(item, selectors, handleClickImage);
  return card;
}

function renderElement(data, container) {
  const card = createCard(data);
  container.prepend(card.createElement());
}

function createInitialCards() {
  places.forEach((item) => renderElement(item, list));
}

createInitialCards();

const popups = document.querySelectorAll(selectors.popup);
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      (evt.target.classList.contains(selectors.popupOpened) ||
        evt.target.classList.contains(selectors.popupButtonClose)) &&
      evt.button === 0
    ) {
      closePopup(popup);
    }
  });
});

const handleEscapeKey = function (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(selectors.popupOpenedclass);
    closePopup(popupOpened);
  }
};

function openPopup(namePopup) {
  namePopup.classList.add(selectors.popupOpened);
  document.addEventListener("keydown", handleEscapeKey);
}
function closePopup(namePopup) {
  namePopup.classList.remove(selectors.popupOpened);
  document.removeEventListener("keydown", handleEscapeKey);
}

profileAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

function editProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputJob.value;
  closePopup(popupEdit);
}

function addSubmitEventListeners() {
  popupAddForm.addEventListener("submit", function (evt) {
    const formInput = {
      name: popupAddInputPlace.value,
      link: popupAddInputPicture.value,
    };
    renderElement(formInput, list);
    evt.target.reset();

    closePopup(popupAdd);
  });
  popupEditForm.addEventListener("submit", editProfile);
}
addSubmitEventListeners();

profileEdit.addEventListener("click", function () {
  const nameForm = popupEdit.querySelector(selectors.popupEditForm).name;
  formValidators[nameForm].resetValidation();
  openPopup(popupEdit);
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputJob.value = profileSubtitle.textContent;
});
// 1