import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image-img');
    this._imageTitle = this._popup.querySelector('.popup__image-txt');
  }

  open(name, link) {
    super.open();
    console.log("2",name, link);
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.textContent = name;
  }
}