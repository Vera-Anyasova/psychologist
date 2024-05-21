import "./index.css";

const cardList = document.querySelector("#elements__list");
const buttonPrev = document.querySelector(".elements__prev");
const buttonNext = document.querySelector(".elements__next");

const cards = Array.from(cardList.children);

cards.forEach(function (item, index) {
  // Скрываем все слайды, кроме первого
  if (index !== 0) {
    item.classList.add("hidden");
  }

  // Добавляем индексы
  item.dataset.index = index;

  // Добавляем data атрибут active для первого / активного слайда
  cards[0].setAttribute("data-active", "");

  // Клик по слайдам
  item.addEventListener("click", function () {
    showNextCard("next");
  });
});

buttonNext.onclick = function () {
  showNextCard("next");
};

buttonPrev.onclick = function () {
  showNextCard("prev");
};

function showNextCard(direction) {
  // Скрываем текущий слайд
  const currentCard = cardList.querySelector("[data-active]");
  const currentCardIndex = +currentCard.dataset.index;
  currentCard.classList.add("hidden");
  currentCard.removeAttribute("data-active");

  // Расчитываем следующий индекс взависимости от направления движения

  let nextCardIndex;
  if (direction === "next") {
    nextCardIndex =
      currentCardIndex + 1 === cards.length ? 0 : currentCardIndex + 1;
  } else if (direction === "prev") {
    nextCardIndex =
      currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  }

  // Показываем следующий слайд
  const nextCard = cardList.querySelector(`[data-index="${nextCardIndex}"]`);
  nextCard.classList.remove("hidden");
  nextCard.setAttribute("data-active", "");
}
