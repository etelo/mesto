import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import {
  selectorsForms,
  selectors,
  profileTitle,
  profileSubtitle,
  profileEdit,
  profileAdd,
  avatar,
  list,
  popupEditSelector,
  popupEditForm,
  popupEditInputName,
  popupEditInputJob,
  popupAdd,
  popupAddForm,
  popupImage,
  options,
  popupDelete,
  profileChangeAvatarButton,
  popupAvatar,
} from "../utils/constants.js";

const api = new Api(options);
const popupScaleImage = new PopupWithImage(popupImage);
const validatorForAddCard = new FormValidator(selectorsForms, popupAddForm);
const validatorForEdit = new FormValidator(selectorsForms, popupEditForm);
const validatorForEditAvatar = new FormValidator(selectorsForms, popupAvatar);
validatorForEditAvatar.enableValidation();
validatorForAddCard.enableValidation();
validatorForEdit.enableValidation();

const popupDeleteCard = new PopupWithSubmit(popupDelete);
popupDeleteCard.setEventListeners();

const profileInfo = new UserInfo({
  name: profileTitle,
  about: profileSubtitle,
  avatar: avatar,
});

const cardsContainer = new Section(
  {
    renderer: (item) => {
      const cardItem = createCard(item);
      cardsContainer.addItem(cardItem);
    },
  },
  list
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, result]) => {
    profileInfo.setUserInfo(userInfo);

    cardsContainer.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(card) {
  const newCard = new Card({
    handleClickImage: () => {
      popupScaleImage.open(card.name, card.link);
    },
    handleDeleteClick: () => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitAction(() => {
        api
          .deleteCard(card._id)
          .then(() => {
            newCard.handleClickDeleteCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    handlePutLike: () => {
      api
        .putLike(card._id)
        .then((card) => {
          newCard.likeCount(card.likes.length);
          newCard.like();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDeleteLike: () => {
      api
        .deleteLike(card._id)
        .then((card) => {
          newCard.likeCount(card.likes.length);
          newCard.like();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    data: card,
    id: profileInfo._selfId,
    selectors: selectors,
  });

  return newCard.createElement();
}

const profileChangeAvatar = new PopupWithForm(popupAvatar, {
  handleFormSubmit: (item) => {
    profileChangeAvatar.renderLoading(true);
    api
      .editAvatar(item)
      .then((res) => {
        profileInfo.setUserInfo(res);
        profileChangeAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => profileChangeAvatar.renderLoading(false));
  },
});
profileChangeAvatar.setEventListeners();

profileChangeAvatarButton.addEventListener("click", () => {
  profileChangeAvatar.open();
  validatorForEditAvatar.resetValidation();
});

const popupEdit = new PopupWithForm(popupEditSelector, {
  handleFormSubmit: (item) => {
    popupEdit.renderLoading(true);
    api
      .editProfile(item)
      .then((res) => {
        profileInfo.setUserInfo(res);
        popupEdit.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEdit.renderLoading(false));
  },
});
popupEdit.setEventListeners();

const popupAddCard = new PopupWithForm(popupAdd, {
  handleFormSubmit: (item) => {
    popupAddCard.renderLoading(true);
    api
      .addCard(item)
      .then((res) => {
        cardsContainer.addItemPrepend(createCard(res));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupAddCard.renderLoading(false));
  },
});
popupAddCard.setEventListeners();
profileAdd.addEventListener("click", () => {
  popupAddCard.open();
  validatorForAddCard.resetValidation();
});

profileEdit.addEventListener("click", () => {
  const userInfo = profileInfo.getUserInfo();
  popupEditInputName.value = userInfo.name;
  popupEditInputJob.value = userInfo.about;
  validatorForEdit.resetValidation();
  popupEdit.open();
});
