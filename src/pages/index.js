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
  popupEdit,
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

const cards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardItem = handleNewCard(item);
      cards.addItem(cardItem);
    },
  },
  list
);

const popupScaleImage = new PopupWithImage(popupImage);

function handleCardClick(name, link) {
  popupScaleImage.open(name, link);
}

function handleNewCard(card) {
  const newCard = new Card(card, selectors, handleCardClick).createElement();
  return newCard;
}

const popupAddCard = new PopupWithForm(popupAdd, (data) => {
  cards.addItem(handleNewCard(data));
});

const dataInfo = new UserInfo({
  nameAuthor: profileTitle,
  jobAuthor: profileSubtitle,
});

const popupEdit2 = new PopupWithForm(popupEdit, (data) => {
  dataInfo.setUserInfo(data);
});
popupEdit2.setEventListeners();

profileEdit.addEventListener("click", () => {
  popupEdit2.open();
  const { nameAuthor, jobAuthor } = dataInfo.getUserInfo();
  popupEditInputName.value = nameAuthor;
  popupEditInputJob.value = jobAuthor;
  validatorForEdit.resetValidation();
});

popupAddCard.setEventListeners();

profileAdd.addEventListener("click", () => {
  popupAddCard.open();
  validatorForAddCard.resetValidation();
});

cards.renderItems();
popupScaleImage.setEventListeners();
