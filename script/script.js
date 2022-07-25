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
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const selectors = {
  addButton: ".profile__add-button",
  popupAdd: ".popup_type_add-card",
  closedPopupAdd: ".popup__closed",
  form: ".popup__form_add-card",
  input: ".popup__input-place",
  list: ".elements__list",
  template: ".template",
};

const form = document.querySelector(selectors.form);
const list = document.querySelector(selectors.list);
const popupAdd = document.querySelector(selectors.popupAdd);
const addButton = document.querySelector(selectors.addButton);
const closedPopupAdd = popupAdd.querySelector(selectors.closedPopupAdd);
const template = document.querySelector(selectors.template);
console.log(template);


function openPopup_addCard() {
  popupAdd.classList.add("popup_opened");
}
function closedPopup_addCard() {
  popupAdd.classList.remove("popup_opened");
}

function createTodo(any, index, arr) {
//   const template =`<li class="element">
//   <img src="${arr[index].link}" alt="${arr[index].name}" class="element__image" />
//   <div class="element__description">
//     <p class="element__title">${arr[index].name}</p>
//     <button type="button" class="element__like hover"></button>
//   </div>
// </li>`;
// list.insertAdjacentHTML('afterbegin', template);


}

function addEventListener() {
  const input = form.querySelector(selectors.input);

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    createTodo(input.value);
  });
}

function createInitiallCards() {
  todos.forEach(createTodo);
}


addEventListener();
createInitiallCards();

addButton.addEventListener("click", openPopup_addCard);
closedPopupAdd.addEventListener("click", closedPopup_addCard);
