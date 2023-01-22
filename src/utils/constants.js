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
  profileTitleSelector: ".profile__title",
  profileSubtitleSelector: ".profile__subtitle",
  profileEditSelector: ".profile__edit-button",
  profileAddSelector: ".profile__add-button",

  listSelector: ".elements__list",
  templateSelector: ".template",

  elementSelector: ".element",
  elementTitleSelector: ".element__title",
  elementImageSelector: ".element__image",
  elementDeleteSelector: ".element__delete",
  elementLikeSelector: ".element__like",
  elementLikeActiveSelector: "element__like_active",

  popupSelector: ".popup",
  popupOpenedSelector: "popup_opened",
  popupOpenedclassSelector: ".popup_opened",

  popupButtonCloseSelector: "popup__close-btn",

  popupEditSelector: ".popup_type_edit-profile",
  popupEditFormSelector: ".popup__form",
  popupEditProfileFormSelector: ".popup__form_edit-profile",
  popupEditButtonCloseSelector: ".popup__close-btn",
  popupEditInputNameSelector: ".popup__input-name",
  popupEditInputJobSelector: ".popup__input-job",

  popupAddSelector: ".popup_type_add-card",
  popupAddFormSelector: ".popup__form_add-card",
  popupAddClosedSelector: ".popup__close-btn",
  popupAddSubmitSelector: ".popup__button-submit",
  popupAddInputPlaceSelector: ".popup__input-place",
  popupAddInputPictureSelector: ".popup__input-picture",

  popupImageSelector: ".popup_type_image",
  popupImageClosedSelector: ".popup__image-closed",
  popupImageImgSelector: ".popup__image-img",
  popupImageTxtSelector: ".popup__image-txt",
};

export const profileTitle = document.querySelector(selectors.profileTitleSelector);
export const profileSubtitle = document.querySelector(selectors.profileSubtitleSelector);
export const profileEdit = document.querySelector(selectors.profileEditSelector);
export const profileAdd = document.querySelector(selectors.profileAddSelector);

export const list = document.querySelector(selectors.listSelector);

export const popupEditSelector = document.querySelector(selectors.popupEditSelector);
export const popupEditForm = popupEditSelector.querySelector(selectors.popupEditFormSelector);
export const popupEditInputName = popupEditSelector.querySelector(selectors.popupEditInputNameSelector);
export const popupEditInputJob = popupEditSelector.querySelector(selectors.popupEditInputJobSelector);

export const popupAdd = document.querySelector(selectors.popupAddSelector);
export const popupAddForm = popupAdd.querySelector(selectors.popupAddFormSelector);
export const popupAddInputPlace = popupAdd.querySelector(selectors.popupAddInputPlaceSelector);
export const popupAddInputPicture = popupAdd.querySelector(selectors.popupAddInputPictureSelector);

export const popupImage = document.querySelector(selectors.popupImageSelector);
export const popupImageImg = popupImage.querySelector(selectors.popupImageImgSelector);
export const popupImageTxt = popupImage.querySelector(selectors.popupImageTxtSelector);
