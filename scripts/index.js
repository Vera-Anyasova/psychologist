const popup = document.querySelector(".popup");
const popupPayment = document.querySelector(".popup_payment");
const buttonOpenPopup = document.querySelector(".header__menu");
const buttonOpenPopupPayment = document.querySelector(".test__button-item");
const links = document.querySelectorAll(".popup__link");

// Открытие и закрытие попапа

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleKeyDown);
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleKeyDown);
};

// Закрытие попапа нажатием на Esc

function handleKeyDown(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

// Закрытие попапа кликом на оверлей и на крестик

popup.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popup);
  }
  if (evt.target.classList.contains("popup__button")) {
    closePopup(popup);
  }
});

// Закрытие попапа кликом на оверлей и на крестик

popupPayment.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popupPayment);
  }
  if (evt.target.classList.contains("popup__button")) {
    closePopup(popupPayment);
  }
});

// Открытие попапа при клике по кнопке меню

buttonOpenPopup.addEventListener("click", function () {
  openPopup(popup);
});

buttonOpenPopupPayment.addEventListener("click", function () {
  openPopup(popupPayment);
  console.log(popupPayment);
});

// Закрытие попапа при клике на ссылку

links.forEach((item) => {
  item.addEventListener("click", function () {
    closePopup(popup);
  });
});
