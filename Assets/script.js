var timerEl = document.querySelector("#time");
var mainEl = document.querySelector("#main");
var startButtonEl = document.querySelector("#start_quiz");
var endButtonEl = document.querySelector("#submit_quiz");
var questionsEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timeInterval;
var score = 0;

// Timer Counterdown & Start Quiz
function countdown() {
  var timeLeft = 75;
  timerEl.innerHTML = timeLeft;
  timeInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      timeLeft = 0;
    }
    timerEl.innerHTML = timeLeft;
    timeLeft = timeLeft - 1;
  }, 1000);
}

function startQuiz() {
  buttonEl.classList.add("hide");
}

buttonEl.addEventListener("click", countdown);
buttonEl.addEventListener("click", startQuiz);

// Quiz Questions & Answer Choices

var questions = [
  {
    question: "Commonly ssed data types DO NOT include:",
    choices: ["A. strings", "B. alerts", "C. booleans", "D. numbers"],
    answer: "B. alerts",
  },
  {
    question: "The Condition in an if/else statement is enclosed with ____.",
    choices: ["A. quotes", "B. curly brackets", "C. parenthesis", "D. square brackets"],
    answer: "C. parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    choices: ["A. numbers and strings", "B. other arrays","C. booleans","D. all of the above"],
    answer: "D. all of the above",
  },
  {
    question:
      "String Values must be enclosed within ____ when being assigned to variables.",
    choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
    answer: "C. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["A. JavaScript", "B. terminal/bash", "C. for loops", "D. console log"],
    answer: "D. console log",
  },
];

//  Additional Variables
// var secondsLeft = 75;
// var questionNumber = 0;
// var totalScore = 0;
// var questionCount = 1;
