function Question(text, options, correctAnswer) {
  this.text = text;
  this.options = options;
  this.correctAnswer = correctAnswer;
}

// fonksiyonları, nesnenin prototype'ına koyduk
Question.prototype.checkAnswer = function (answer) {
  return answer === this.correctAnswer;
};

let questions = [
  new Question("1- Aşağıdakilerden hangisi JavaScript paket yöneticisidir?", { a: "node.js", b: "typscript", c: "npm", d: "Nuget" }, "c"),
  new Question("2- Aşağıdakilerden hangisi .NET paket yöneticisidir?", { a: "node.js", b: "typscript", c: "npm", d: "Nuget" }, "d"),
  new Question("3- Aşağıdakilerden hangisi Python paket yöneticisidir?", { a: "node.js", b: "pip", c: "npm", d: "Nuget" }, "b"),
  new Question("4- Aşağıdakilerden hangisi Java paket yöneticisidir?", { a: "node.js", b: "typscript", c: "maven", d: "Nuget" }, "c"),
];
