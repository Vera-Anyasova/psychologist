export class SectionWithButton {
  constructor({ buttonSelector }) {
    this._buttonElement = document.querySelector(buttonSelector);
  }

  // удалим у кнопки класс hidden
  show() {
    this._buttonElement.classList.remove("hidden");
  }

  // добавим к кнопке класс hidden
  hide() {
    this._buttonElement.classList.add("hidden");
  }

  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    this._buttonElement.onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  }
}
