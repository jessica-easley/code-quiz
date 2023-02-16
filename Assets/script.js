var timerEl = document.getElementById('time');
var mainEl = document.getElementById('main');
var startButtonEl = document.getElementById('startquiz');
var endButtonEl = document.getElementById('submit-quiz');
var questionsEl = document.getElementById('questions');
var answerChoicesEl = document.getElementById('choices');
var initialsEl = document.querySelector('initials');
var timeInterval
var timeLeft
var score = 0;

// Timer Counterdown & Start Quiz
function countdown() {
    var timeLeft = 75;
    timerEl.innerHTML = timeLeft
    timeInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            timeLeft = 0
        }
    timerEl.innerHTML = timeLeft
    timeLeft = timeLeft-1
    }, 1000);
  }

  function startQuiz(){
    buttonEl.classList.add("hide")

  }


  buttonEl.addEventListener("click",countdown);
  buttonEl.addEventListener("click",startQuiz);

  // Quiz Questions & Answer Choices

  var questions = [
    {
      question: "Commonly Used Data Types DO NOT Include:",
      choices: ["strings", "alerts", "booleans", "numbers"],
      answer: "alerts"

    },
    {
      question: "The Condition in an if/else statement is enclosed with ____.",
      choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
      answer: "parenthesis"

    },
    {
      question: "Arrays in JavaScript can be used to store ___.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"

    },
    {
      question: "String Values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"

    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
      answer: "console log"

    }
  ]