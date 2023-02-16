export default class Card {
  constructor({
    handleClickImage,
    handleDeleteClick,
    handlePutLike,
    handleDeleteLike,
    data,
    id,
    selectors,
  }) {
    this._title = data.name;
    this._imageLink = data.link;
    this._id = data._id;
    this._selfId = id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._selectors = selectors;
    this._template = document.querySelector(selectors.templateSelector);
    this._card = this._template.content
      .querySelector(this._selectors.elementSelector)
      .cloneNode(true);
    this._handleClickImage = handleClickImage;
    this._handleDeleteClick = handleDeleteClick;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  createElement() {
    this._elementTitle = this._card.querySelector(this._selectors.elementTitleSelector);
    this._elementImage = this._card.querySelector(this._selectors.elementImageSelector);
    this._elementDelete = this._card.querySelector(this._selectors.elementDeleteSelector);
    this._elementLike = this._card.querySelector(this._selectors.elementLikeSelector);

    this._elementlikeCount = this._card.querySelector(this._selectors.elementLikeCount);

    this._setEventListeners();

    this._elementTitle.textContent = this._title;
    this._elementImage.alt = this._title;
    this._elementImage.src = this._imageLink;

    const likesLength = this._likes.length;
    this.likeCount(likesLength);

    if (this._likes.some((like) => like._id === this._selfId)) {
      this.like();
    }

    if (this._owner._id === this._selfId) {
      this._elementDelete.classList.add("element__delete-active");
    }

    return this._card;
  }

  getId = () => {
    return this._id;
  };

  likeCount(likesCount) {
    this._elementlikeCount.textContent = likesCount;
  }

  _setEventListeners() {
    // открыть картинку
    this._elementImage.addEventListener("click", () =>
      this._handleClickImage(this._title, this._imageLink)
    );
    // удаление карточки
    this._elementDelete.addEventListener("click", () => this._handleDeleteClick());
    // поставить лайк
    this._elementLike.addEventListener("click", () => {
      if (this._elementLike.classList.contains(this._selectors.elementLikeActiveSelector)) {
        this._handleDeleteLike(this._card);
      } else {
        this._handlePutLike(this._card);
      }
    });
  }

  handleClickDeleteCard = () => {
    this._card.remove();
    this._card = null;
  };

  like() {
    this._elementLike.classList.toggle(this._selectors.elementLikeActiveSelector);
  }
}
