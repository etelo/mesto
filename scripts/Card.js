export default class Card {
  constructor(data, selectors, handleClicImage) {
    this._data = data;
    this._selectors = selectors;
    this._template = document.querySelector(selectors.template);
    this._card = this._template.content
      .querySelector(this._selectors.element)
      .cloneNode(true);
    this._handleClicImage = handleClicImage;
  }

  createElement() {
    this._elementTitle = this._card.querySelector(this._selectors.elementTitle);
    this._elementImage = this._card.querySelector(this._selectors.elementImage);
    this._elementDelete = this._card.querySelector(
      this._selectors.elementDelete
    );
    this._elementLike = this._card.querySelector(this._selectors.elementLike);

    // открыть картинку
    this._elementImage.addEventListener("click", () =>
      this._handleClicImage(this._data.name, this._data.link)
    );

    // удаление карточки
    this._elementDelete.addEventListener("click", () =>
      this._handleClickDeleteCard()
    );

    // поставить лайк
    this._elementLike.addEventListener("click", () => this._handleClickLike());

    this._elementTitle.textContent = this._data.name;
    this._elementImage.alt = this._data.name;
    this._elementImage.src = this._data.link;

    return this._card;
  }

  _handleClickDeleteCard() {
    this._card.remove();
  }

  _handleClickLike() {
    this._elementLike.classList.toggle(this._selectors.elementLikeActive);
  }
}
