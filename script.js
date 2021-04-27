
var seconds = 00;
var tens = 00;


var appendseconds = document.getElementById("seconds");
var appendtens= document.getElementById("tens");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var interval;

//function on start

function startTimer() {
    tens++;

    if (tens < 9) {
    appendtens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendtens.innerHTML = tens; 
    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendtens.innerHTML = "0" + 0;
      }

      if (seconds > 9) {
          appendseconds.innerHTML = seconds;
      }
}


buttonStart.onclick = () =>{
    interval = setInterval(startTimer);
};



buttonStop.onclick = () =>{
    clearInterval(Interval);
};

buttonReset.onclick = function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendseconds = seconds;
    appendtens = tens;
};

















/*
window.onload = () => {
  

}


window.onload = () => {
    var seconds = 00;
    var tens = 00;

    var appendseconds = document.getElementById("seconds");
    var appendtens= document.getElementById("milli-seconds");

    var buttonstart = document.getElementById("button-start");
    var buttonstop = document.getElementById("button-stop");
    var reset = document.getElementById("button-reset");

    var interval;

    buttonstart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }

    buttonstop.onclick = () => {
        clearInterval(interval)
    }

    reset.onclick = () => {
        clearInterval(interval);
        milliSeconds = 00;
        seconds = 00;

        appendseconds.innerHTML = seconds;
        appendtens.innerHTML = milliSeconds;

    }

    function startTimer() {
        milliSeconds++;
        if (milliSeconds < 9) {
        appendtens.innerHTML = "0" + milliSeconds;
        }

        if (milliSeconds > 9) {
            appendtens.innerHTML = milliSeconds;
        }

        if (milliSeconds > 99) {
            console.log("seconds");
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            tens = 0;
            appendtens.innerHTML = "0" + 0;
          }

          if (seconds > 9) {
              appendseconds.innerHTML = seconds;
          }
    }
}
 
 
 
 
 
 /*
 var startBtn, stopBtn, resetBtn, hours, minutes, seconds, milliSec;
  milli = "00"
  seconds = "00"
  minutes = "00"
  hours = "00"


  appendhours =  document.getElementById(" hours");
  appendminutes =  document.getElementById(" minutes");
  appendseconds = document.getElementById(" seconds");
  appendmilliSec = document.getElementById(" milli-seconds");
 
 
  startBtn = document.getElementById(" btn-start");
  stopBtn = document.getElementById(" btn-stop");
  resetBtn = document.getElementById(" btn-reset");


  startBtn.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

  function startTimer() {
      milli++;
      milli < 9 ? appendmilliSec.textContent = "0" +  milli : appendmilliSec = milli;

      
      if (milli > 99) {
        console.log("seconds");
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendtens.innerHTML = "0" + 0;
      }

      if (seconds > 9) {
          appendseconds.innerHTML = seconds;
      }
      
  }
  */