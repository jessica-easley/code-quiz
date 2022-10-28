var timerEl = document.getElementById('time');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('startquiz');

function countdown() {
    var timeLeft = 75;
    timerEl.innerHTML = timeLeft
    var timeInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            timeLeft = 0
        }
    timeLeft = timeLeft-1
    timerEl.innerHTML = timeLeft
    }, 1000);
  }

  function startQuiz(){
    buttonEl.classList.add("hide")

  }


  buttonEl.addEventListener("click",countdown);
  buttonEl.addEventListener("click",startQuiz);