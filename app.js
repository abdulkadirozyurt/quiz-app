const ui = new UI();

let q1 = new Question("Deneme sorusu", { a: "1", b: "2" }, "b");

const quiz = new Quiz(questions);

ui.startButton.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  startTimer(10);
  startTimeLine(10);
  ui.showQuestion(quiz.getQuestion());
  ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
});

ui.nextQuestionButton.addEventListener("click", function () {
  if (quiz.questionIndex < quiz.questions.length - 1) {
    quiz.questionIndex++;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimeLine(10)
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);

    console.log(quiz.questionIndex);
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    console.log("Quiz bitti");
    ui.scoreBox.classList.add("active");
    ui.quizBox.classList.remove("active");
    ui.showScore(quiz.questions.length, quiz.correctAnswerCount);
  }
});

ui.previousQuestionButton.addEventListener("click", function () {
  if (quiz.questionIndex >= quiz.questions.length - (quiz.questions.length - 1)) {
    quiz.questionIndex--;
    ui.showQuestion(quiz.getQuestion());
    ui.showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  } else {
    console.log("Quiz bitti");
  }
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestion();

  if (question.checkAnswer(answer)) {
    quiz.correctAnswerCount++;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }
}

ui.quitButton.addEventListener("click", function () {
  window.location.reload();
});

ui.restartButton.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerCount = 0;
  ui.startButton.click();
  ui.scoreBox.classList.remove("active");
});

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeSecond.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.timeText.textContent = "Süre Bitti";
      let correctAnswer = quiz.getQuestion().correctAnswer;
      for (let option of ui.optionList.children) {
        if (option.querySelector("span b").textContent == correctAnswer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }
    }
  }
}

let counterLine;
function startTimeLine() {
  let lineWidth = 0;
  counterLine = setInterval(timer, 100);

  function timer() {
    lineWidth += 5;
    ui.timeLine.style.width = lineWidth + "px";

    if (lineWidth > 549) {
      clearInterval(counterLine);
    }
  }
}
