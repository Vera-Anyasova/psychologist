import "./index.css";
import { questions } from "../utils/questions.js";

const popupTest = document.querySelector(".popup_test");
const popupAnswer = document.querySelector(".popup_answer");
const popupFinish = document.querySelector(".popup_finish");
const buttonOpenPopupTest = document.querySelector(".test__button_opened");
const questionList = document.querySelector(".popup__heading");
const buttonAgreeClick = document.querySelector(".popup__btn_agree");
const buttonDisagreeClick = document.querySelector(".popup__btn_disagree");
const questionResponce = document.querySelector(".popup__subtitle");
const answerList = document.querySelector(".popup__test-text");
const buttonNextQuestion = document.querySelector(".popup__btn-test");
const buttonAgain = document.querySelector(".popup__btn_again");
const buttonFinish = document.querySelector(".popup__btn_end");
const numberOfQuestion = document.querySelector(".popup__number");

let currentQuestionIndex = 0;
let indexOfPage = 0;

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

popupTest.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popupTest);
  }
  if (evt.target.classList.contains("popup__button")) {
    closePopup(popupTest);
    currentQuestionIndex = 0;
  }
});

// Закрытие попапа кликом на оверлей и на крестик

popupFinish.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(popupFinish);
  }
  if (evt.target.classList.contains("popup__button")) {
    closePopup(popupFinish);
  }
});

// Открытие теста при клике по кнопке начать тест

buttonOpenPopupTest.addEventListener("click", function () {
  openPopup(popupTest);
  renderQuestion();
});

// Отображение окна с вопросами

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionList.textContent = currentQuestion.title;
  numberOfQuestion.textContent = currentQuestionIndex + 1 + ` / 18`;
  if (currentQuestionIndex == 8) {
    showButtons();
  } else {
    hideButtons();
  }
  if (currentQuestionIndex == 17) {
    buttonNextQuestion.classList.add("hidden");
    buttonFinish.classList.remove("hidden");
  }
}

buttonAgreeClick.addEventListener("click", () => checkAnswer(true));
buttonDisagreeClick.addEventListener("click", () => checkAnswer(false));

// Показать дополнительные кнопки

function showButtons() {
  buttonAgain.classList.remove("hidden");
  buttonFinish.classList.remove("hidden");
  buttonNextQuestion.classList.add("hidden");
}

// Скрыть дополнительные кнопки

function hideButtons() {
  buttonAgain.classList.add("hidden");
  buttonFinish.classList.add("hidden");
  buttonNextQuestion.classList.remove("hidden");
}

buttonNextQuestion.addEventListener("click", () => buttonNextQuestionClick());
buttonAgain.addEventListener("click", () => buttonNextQuestionClick());
buttonFinish.addEventListener("click", () => quizOver());

// Отображение следующего вопроса

function buttonNextQuestionClick() {
  closePopup(popupAnswer);
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  renderQuestion();
  openPopup(popupTest);
}

// Открытие попапа завершающего тест

function quizOver() {
  currentQuestionIndex = 0;
  closePopup(popupAnswer);
  openPopup(popupFinish);
}

// Отображение ответа в соответсвии с условием

function checkAnswer(answer) {
  closePopup(popupTest);
  const questionAnswer = questions[currentQuestionIndex];
  if (questionAnswer.correct === answer || questionAnswer.correct === "all") {
    // show correct
    questionResponce.classList.add("popup__subtitle_correct");
    questionResponce.classList.remove("popup__subtitle_incorrect");
    questionResponce.textContent = "Вы правы!";
    answerList.textContent = questionAnswer.answers[0];
  } else {
    // show incorrect
    questionResponce.classList.add("popup__subtitle_incorrect");
    questionResponce.classList.remove("popup__subtitle_correct");
    questionResponce.textContent = "XXX";
    answerList.textContent = questionAnswer.answers[1];
  }
  openPopup(popupAnswer);
}
