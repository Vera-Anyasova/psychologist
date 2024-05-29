import "./index.css";
import { questions } from "../utils/questions.js";
import { Popup } from "../components/Popup.js";
import {
  buttonOpenPopupTest,
  questionList,
  buttonAgreeClick,
  buttonDisagreeClick,
  questionResponce,
  answerList,
  buttonNextQuestion,
  buttonAgain,
  buttonFinish,
  numberOfQuestion,
} from "../utils/constants.js";

let currentQuestionIndex = 0;

const popupTest = new Popup({ popupSelector: ".popup_test" });
popupTest.setEventListeners();

const popupAnswer = new Popup({ popupSelector: ".popup_answer" });

const popupFinish = new Popup({ popupSelector: ".popup_finish" });
popupFinish.setEventListeners();

// Открытие теста при клике по кнопке начать тест

buttonOpenPopupTest.addEventListener("click", function () {
  popupTest.open();
  currentQuestionIndex = 0;
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
  popupAnswer.close();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex = currentQuestionIndex + 1;
  }

  renderQuestion();
  popupTest.open();
}

// Открытие попапа завершающего тест

function quizOver() {
  currentQuestionIndex = 0;
  popupAnswer.close();
  popupFinish.open();
}

// Отображение ответа в соответсвии с условием

function checkAnswer(answer) {
  popupTest.close();
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
  popupAnswer.open();
}
