export const initialCards = [
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

export const selectorsForms = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "button_inactive",
  inputError: "popup__input_type_error",
  inputErrorActive: "popup__input-error_active",
};

export const selectors = {
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

export const profileTitle = document.querySelector(selectors.profileTitle);
export const profileSubtitle = document.querySelector(selectors.profileSubtitle);
export const profileEdit = document.querySelector(selectors.profileEdit);
export const profileAdd = document.querySelector(selectors.profileAdd);

export const list = document.querySelector(selectors.list);

export const popupEdit = document.querySelector(selectors.popupEdit);
export const popupEditForm = popupEdit.querySelector(selectors.popupEditForm);
export const popupEditInputName = popupEdit.querySelector(selectors.popupEditInputName);
export const popupEditInputJob = popupEdit.querySelector(selectors.popupEditInputJob);

export const popupAdd = document.querySelector(selectors.popupAdd);
export const popupAddForm = popupAdd.querySelector(selectors.popupAddForm);
export const popupAddInputPlace = popupAdd.querySelector(selectors.popupAddInputPlace);
export const popupAddInputPicture = popupAdd.querySelector(selectors.popupAddInputPicture);

export const popupImage = document.querySelector(selectors.popupImage);
export const popupImageImg = popupImage.querySelector(selectors.popupImageImg);
export const popupImageTxt = popupImage.querySelector(selectors.popupImageTxt);
