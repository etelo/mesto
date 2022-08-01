///////////////////////////////////////////////////////////////////////// popup_type_edit-title
const popupEdit = document.querySelector(".popup_type_edit-title");
const nameInput = popupEdit.querySelector(".popup__input-name");
const jobInput = popupEdit.querySelector(".popup__input-job");
const closedButton = popupEdit.querySelector(".popup__closed");
const formElement = popupEdit.querySelector(".popup__form");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const editButton = document.querySelector(".profile__edit-button");

function openPopup() {
  popupEdit.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closedPopup() {
  popupEdit.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closedPopup();
}

editButton.addEventListener("click", openPopup);
closedButton.addEventListener("click", closedPopup);
formElement.addEventListener("submit", formSubmitHandler);

///////////////////////////////////////////////////////////////////////// popup_type_add-card

const todos = [
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
  addButton: ".profile__add-button",
  popupAdd: ".popup_type_add-card",
  closedPopupAdd: ".popup__closed",
  savePopupAdd: ".popup__button-submit",
  form: ".popup__form_add-card",
  inputPlace: ".popup__input-place",
  inputPicture: ".popup__input-picture",
  list: ".elements__list",
  template: ".template",
  title: ".element__title",
  image: ".element__image",
  delButton: ".element__delete",
  likeButton: ".element__like",
  likeActive: "element__like_active",
  popupImage: ".popup_type_image",
  imageClosed: ".popup__image-closed",
  popupImageImg: ".popup__image-img",
  popupImageTxt: ".popup__image-txt",


};

const form = document.querySelector(selectors.form);
const list = document.querySelector(selectors.list);
const popupAdd = document.querySelector(selectors.popupAdd);
const addButton = document.querySelector(selectors.addButton);
const closedPopupAdd = popupAdd.querySelector(selectors.closedPopupAdd);
const savePopupAdd = popupAdd.querySelector(selectors.savePopupAdd);
const template = document.querySelector(selectors.template).content.children[0];
const popupImage = document.querySelector(selectors.popupImage);
const imageClosed = document.querySelector(selectors.imageClosed);
const popupImageImg = document.querySelector(selectors.popupImageImg);
const popupImageTxt = document.querySelector(selectors.popupImageTxt);

function openPopup_addCard() {
  popupAdd.classList.add("popup_opened");
}
function closedPopup_addCard() {
  popupAdd.classList.remove("popup_opened");
}

function createTodo(any) {
  const toDo = template.cloneNode(true);
  const title = toDo.querySelector(selectors.title);
  const image = toDo.querySelector(selectors.image);
  const toDoDelButton = toDo.querySelector(selectors.delButton);
  const toDoLikeButton = toDo.querySelector(selectors.likeButton);

  image.addEventListener("click", function () {
    popupImage.classList.add("popup_opened");
    popupImageImg.src = any.link;
    popupImageImg.alt = any.name;
    popupImageTxt.textContent = any.name;
  });

  toDoDelButton.addEventListener("click", function () {
    toDo.remove();
  });

  toDoLikeButton.addEventListener("click", function () {
    toDoLikeButton.classList.forEach(function (item) {
      if (item === selectors.likeActive) {
        toDoLikeButton.classList.remove(selectors.likeActive);
      } else {
        toDoLikeButton.classList.add(selectors.likeActive);
      }
    });
  });

  title.textContent = any.name;
  image.alt = any.name;
  image.src = any.link;

  //  list.prepend(toDo);
  return toDo;
}

function renderTodo(data, container) {
  const todo = createTodo(data);
  container.prepend(todo);
}

function addEventListener() {
  const inputPlace = form.querySelector(selectors.inputPlace);
  const inputPicture = form.querySelector(selectors.inputPicture);

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const formInput = [
      {
        name: inputPlace.value,
        link: inputPicture.value,
      },
    ];
    formInput.forEach((item) => renderTodo(item, list));
    inputPlace.value = "";
    inputPicture.value = "";
    popupAdd.classList.remove("popup_opened");
  });
}

function createInitiallCards() {
  // todos.forEach(createTodo);
  todos.forEach((item) => renderTodo(item, list));
}

addEventListener();
createInitiallCards();

function closedPopup_image() {
  popupImage.classList.remove("popup_opened");
}

addButton.addEventListener("click", openPopup_addCard);
closedPopupAdd.addEventListener("click", closedPopup_addCard);
imageClosed.addEventListener("click", closedPopup_image);
