import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popup) {
    super(popup);
    this._submit = this._popup.querySelector(".popup__button-submit");
  }

  setEventListeners() {
    this._submit.addEventListener("click", () => {
      this._handleSubmit();
    });
    super.setEventListeners();
  }

  setSubmitAction(submitAction) {
    this._handleSubmit = submitAction;
  }
}
