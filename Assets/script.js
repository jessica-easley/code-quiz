var timerEl = document.getElementById('time');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start quiz');

function countdown() {
    var timeLeft = 75;
    timerEl.innerHTML = timeLeft
    var timeInterval = setInterval(function () {
    timeLeft = timeLeft-1
    timerEl.innerHTML = timeLeft
    }, 1000);
  }

  buttonEl.addEventListener("click",countdown);