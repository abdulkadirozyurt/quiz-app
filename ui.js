function UI() {
  this.quizBox = document.querySelector(".quiz-box");
  this.scoreBox = document.querySelector(".score-box");
  this.startButton = document.querySelector(".btn-start");
  this.optionList = document.querySelector(".option-list");
  this.questionText = document.querySelector(".question-text");
  this.nextQuestionButton = document.querySelector(".btn-next");
  this.restartButton = document.querySelector(".btn-restart");
  this.quitButton = document.querySelector(".btn-quit");
  this.finishQuizButton = document.querySelector(".btn-finish");
  this.previousQuestionButton = document.querySelector(".btn-prev");
  this.correctIcon = ' <div class="icon"><i class="fas fa-check"></i></div> ';
  this.incorrectIcon = ' <div class="icon"><i class="fas fa-times"></i></div> ';
  this.timeText = document.querySelector(".time-text");
  this.timeSecond = document.querySelector(".time-second");
  this.timeLine = document.querySelector(".time-line");
  
}

UI.prototype.showQuestion = function showQuestion(question) {
  let questionTextHTML = `<span>${question.text}</span>`;
  let options = ``;
  for (const option in question.options) {
    options += `
                      <div class="option">
                          <span><b>${option}</b>: ${question.options[option]}</span>                        
                      </div>
                  `;
  }

  this.questionText.innerHTML = questionTextHTML;
  this.optionList.innerHTML = options;

  const options2 = this.optionList.querySelectorAll(".option");

  for (let option of options2) {
    option.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.showQuestionNumber = function showQuestionNumber(questionNumber, totalQuestions) {
  let tag = `<span class="badge bg-warning">${questionNumber} / ${totalQuestions}</span>`;
  document.querySelector(".card-footer .question-number").innerHTML = tag;
};

UI.prototype.showScore = function (totalQuestion, correctAnswerCount) {
  let scoreText = `Toplam ${totalQuestion} sorudan ${correctAnswerCount} dogru cevap verdiniz.`;
  document.querySelector(".score-box .score-text").innerHTML = scoreText;
};
