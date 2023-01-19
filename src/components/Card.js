export default class Card {
  constructor(data, selectors, handleClickImage) {
    this._title = data.name;
    this._imageLink = data.link;
    this._selectors = selectors;
    this._template = document.querySelector(selectors.template);
    this._card = this._template.content.querySelector(this._selectors.element).cloneNode(true);
    this._handleClickImage = handleClickImage;
  }

  createElement() {
    this._elementTitle = this._card.querySelector(this._selectors.elementTitle);
    this._elementImage = this._card.querySelector(this._selectors.elementImage);
    this._elementDelete = this._card.querySelector(this._selectors.elementDelete);
    this._elementLike = this._card.querySelector(this._selectors.elementLike);

    this._setEventListeners();

    this._elementTitle.textContent = this._title;
    this._elementImage.alt = this._title;
    this._elementImage.src = this._imageLink;;

    return this._card;
  }

  _setEventListeners() {
    // открыть картинку
    this._elementImage.addEventListener("click", () =>
      this._handleClickImage(this._title, this._imageLink)
    );
    // this._elementImage.addEventListener('click', this._handleClickImage);
    // удаление карточки
    this._elementDelete.addEventListener("click", () => this._handleClickDeleteCard());
    // поставить лайк
    this._elementLike.addEventListener("click", () => this._handleClickLike());
  }

  _handleClickDeleteCard() {
    this._card.remove();
  }

  _handleClickLike() {
    this._elementLike.classList.toggle(this._selectors.elementLikeActive);
  }
}
