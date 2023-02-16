var timerEl = document.querySelector("#time");
var mainEl = document.querySelector("#main");
var startButtonEl = document.querySelector("#start_quiz");
var endButtonEl = document.querySelector("#submit_quiz");
var questionsEl = document.querySelector("#questions");
var answerChoicesEl = document.querySelector("#choices");
var initialsEl = document.querySelector("#initials");
var timeInterval;
var score = 0;
var questionIndex = 0;

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
  startButtonEl.classList.add("hide");
  countdown();
  displayQuestions();
}

// startButtonEl.addEventListener("click", countdown);
startButtonEl.addEventListener("click", startQuiz);

// Quiz Questions & Answer Choices

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
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

// Display Questions & Answer Choices

function displayQuestions() {
  console.log(questions[3].question)
  var currentQuestion = questions[questionIndex]
  var questionTitleEl = document.querySelector("#question-title")
  var answerBox = document.querySelector("#answers")
  questionTitleEl.textContent = currentQuestion.question
  for (var i = 0; i < currentQuestion.choices.length; i++){
    var buttonEl = document.createElement("button")
    console.log(currentQuestion.choices[i])
    buttonEl.textContent = currentQuestion.choices[i]
    // Add class & value to buttonEL to put an event listener on it that has 
    // make a function for handling question/answer choice click, check if answer is right or wrong (if/else statement)
    // Increase question index when it's clicked currentQuestion ++
    // setAttribute
  answerBox.appendChild(buttonEl)
  }
}




//  Additional Variables
// var secondsLeft = 75;
// var questionNumber = 0;
// var totalScore = 0;
// var questionCount = 1;
