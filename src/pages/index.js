import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  selectorsForms,
  selectors,
  profileTitle,
  profileSubtitle,
  profileEdit,
  profileAdd,
  list,
  popupEditSelector,
  popupEditForm,
  popupEditInputName,
  popupEditInputJob,
  popupAdd,
  popupAddForm,
  popupImage,
} from "../utils/constants.js";

const validatorForAddCard = new FormValidator(selectorsForms, popupAddForm);
const validatorForEdit = new FormValidator(selectorsForms, popupEditForm);
validatorForAddCard.enableValidation();
validatorForEdit.enableValidation();

const cardsContainer = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardItem = createCard(item);
      cardsContainer.addItem(cardItem);
    },
  },
  list
);

const popupScaleImage = new PopupWithImage(popupImage);

function handleCardClick(name, link) {
  popupScaleImage.open(name, link);
}

function createCard(card) {
  const newCard = new Card(card, selectors, handleCardClick).createElement();
  return newCard;
}

const popupAddCard = new PopupWithForm(popupAdd, (data) => {
  cardsContainer.addItem(createCard(data));
});

const dataUserInfo = new UserInfo({
  nameAuthor: profileTitle,
  jobAuthor: profileSubtitle,
});

const popupEdit = new PopupWithForm(popupEditSelector, (data) => {
  dataUserInfo.setUserInfo(data);
});
popupEdit.setEventListeners();

profileEdit.addEventListener("click", () => {
  popupEdit.open();
  const { nameAuthor, jobAuthor } = dataUserInfo.getUserInfo();
  popupEditInputName.value = nameAuthor;
  popupEditInputJob.value = jobAuthor;
  validatorForEdit.resetValidation();
});

popupAddCard.setEventListeners();

profileAdd.addEventListener("click", () => {
  popupAddCard.open();
  validatorForAddCard.resetValidation();
});

cardsContainer.renderItems();
popupScaleImage.setEventListeners();
