let popup = document.querySelector(".popup");

let nameInput = document.querySelector('[name="nameInput"]');
let jobInput = document.querySelector('[name="jobInput"]');

let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

let editButton = document.querySelector(".profile__edit-button");
let closedButton = document.querySelector(".popup__closed");

let formElement = document.querySelector(".popup__form");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closedPopup() {
  popup.classList.remove("popup_opened");
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



