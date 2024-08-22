import "./index.css";

import { Popup } from "../components/Popup.js";
import { SectionWithButton } from "../components/SectionWithButton.js";
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

// Прокручивание страницы к началу

const sectionWithButton = new SectionWithButton({
  buttonSelector: ".profile__button-arrow",
});
sectionWithButton.addEventListener();

// изменять год автоматически

const date = new Date();
const currentYear = date.getFullYear();
const time = document.querySelector("time");
console.log(time);

time.setAttribute("datetime", date);
time.innerHTML = currentYear;
