import "./index.css";

import { Popup } from "../components/Popup.js";
import {
  buttonOpenPopup,
  buttonOpenPopupPayment,
  links,
} from "../utils/constants.js";

const popupMenu = new Popup({ popupSelector: ".popup" });
popupMenu.setEventListeners();

buttonOpenPopup.addEventListener("click", () => {
  popupMenu.open();
});

const popupPayment = new Popup({ popupSelector: ".popup_payment" });
popupPayment.setEventListeners();

buttonOpenPopupPayment.addEventListener("click", () => {
  popupPayment.open();
});

// Закрытие попапа при клике на ссылку

links.forEach((item) => {
  item.addEventListener("click", function () {
    popupMenu.close();
  });
});
