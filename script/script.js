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

  elementTitle: ".element__title",
  elementImage: ".element__image",
  elementDelete: ".element__delete",
  elementLike: ".element__like",
  elementLikeActive: "element__like_active",

  popupEdit: ".popup_type_edit-title",
  popupEditForm: ".popup__form",
  popupEditClosed: ".popup__closed",
  popupEditInputName: ".popup__input-name",
  popupEditInputJob: ".popup__input-job",

  popupAdd: ".popup_type_add-card",
  popupAddForm: ".popup__form_add-card",
  popupAddClosed: ".popup__closed",
  popupAddSubmit: ".popup__button-submit",
  popupAddInputPlace: ".popup__input-place",
  popupAddInputPicture: ".popup__input-picture",

  popupImage: ".popup_type_image",
  popupImageClosed: ".popup__image-closed",
  popupImageImg: ".popup__image-img",
  popupImageTxt: ".popup__image-txt",
};

const profileTitle = document.querySelector(selectors.profileTitle);
const profileSubtitle = document.querySelector(selectors.profileSubtitle);
const profileEdit = document.querySelector(selectors.profileEdit);
const profileAdd = document.querySelector(selectors.profileAdd);

const list = document.querySelector(selectors.list);
const template = document.querySelector(selectors.template).content.children[0];

const popupEdit = document.querySelector(selectors.popupEdit);
const popupEditForm = popupEdit.querySelector(selectors.popupEditForm);
const popupEditClosed = popupEdit.querySelector(selectors.popupEditClosed);
const popupEditInputName = popupEdit.querySelector(selectors.popupEditInputName);
const popupEditInputJob = popupEdit.querySelector(selectors.popupEditInputJob);

const popupAdd = document.querySelector(selectors.popupAdd);
const popupAddForm = popupAdd.querySelector(selectors.popupAddForm);
const popupAddClosed = popupAdd.querySelector(selectors.popupAddClosed);
const popupAddSubmit = popupAdd.querySelector(selectors.popupAddSubmit);
const popupAddInputPlace = popupAdd.querySelector(selectors.popupAddInputPlace);
const popupAddInputPicture = popupAdd.querySelector(selectors.popupAddInputPicture);

const popupImage = document.querySelector(selectors.popupImage);
const popupImageClosed = popupImage.querySelector(selectors.popupImageClosed);
const popupImageImg = popupImage.querySelector(selectors.popupImageImg);
const popupImageTxt = popupImage.querySelector(selectors.popupImageTxt);

function openPopup(namePopup) {
  namePopup.classList.add("popup_opened");
}
function closedPopup(namePopup) {
  namePopup.classList.remove("popup_opened");
}
function editProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputJob.value;
  closedPopup(popupEdit);
}

profileEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputJob.value = profileSubtitle.textContent;
});
popupEditClosed.addEventListener("click", function () {
  closedPopup(popupEdit);
});
popupEditForm.addEventListener("submit", editProfile);

// ////
// Создание карточки места
// ////
function createElement(any) {
  const element = template.cloneNode(true);
  const elementTitle = element.querySelector(selectors.elementTitle);
  const elementImage = element.querySelector(selectors.elementImage);
  const elementDelete = element.querySelector(selectors.elementDelete);
  const elementLike = element.querySelector(selectors.elementLike);

  elementImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImageImg.src = any.link;
    popupImageImg.alt = any.name;
    popupImageTxt.textContent = any.name;
  });

  elementDelete.addEventListener("click", function () {
    element.remove();
  });
  elementLike.addEventListener("click", function () {
    elementLike.classList.toggle(selectors.elementLikeActive);
  });

  elementTitle.textContent = any.name;
  elementImage.alt = any.name;
  elementImage.src = any.link;

  // list.prepend(element);
  return element;
}

function renderTodo(data, container) {
  const elm = createElement(data);
  container.prepend(elm);
}
function createInitiallyCards() {
  // popups.forEach(createTodo);
  places.forEach((item) => renderTodo(item, list));
}
function addEventListenerPopupAdd() {
  popupAddForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const formInput = {
      name: popupAddInputPlace.value,
      link: popupAddInputPicture.value,
    };
    renderTodo(formInput, list);
    popupAddInputPlace.value = "";
    popupAddInputPicture.value = "";
    closedPopup(popupAdd);
  });
}

profileAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});
popupAddClosed.addEventListener("click", function () {
  closedPopup(popupAdd);
});
popupImageClosed.addEventListener("click", function () {
  closedPopup(popupImage);
});

createInitiallyCards();
addEventListenerPopupAdd();

const popupOverley = Array.from(document.querySelectorAll(".popup"));
popupOverley.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      evt.target.classList.remove("popup_opened")
    }
  })
})

document.addEventListener('keydown', (evt) => {
  const popup_opened = document.querySelector(".popup_opened");
  if(popup_opened !== null && evt.key === "Escape")
  {
    popup_opened.classList.remove("popup_opened");
  }
})